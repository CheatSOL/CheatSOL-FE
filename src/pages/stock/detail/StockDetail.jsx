// StockDetail.js

import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/common/sidebar/Sidebar';
import Nav from 'react-bootstrap/Nav';
import { Container, Content, ChartSection, TabsSection, CustomTabs, StockStatus, PriceContent, LinkTo } from './StockDetail.style';
import {StyledPriceChange} from './pricetab/Pricetab.style';
import 'bootstrap/dist/css/bootstrap.min.css';
import Maintab from './maintab/Maintab';
import Pricetab from './pricetab/Pricetab';
import Newstab from './newstab/Newstab';
import Header from '../../../components/common/header/Header';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ChartModal from './chart/ChartModal';

export default function StockDetail() {
  const { code, name } = useParams();
  
  const [activeTab, setActiveTab] = useState('main'); 
  const [stockData, setStockData] = useState(null); 
  const [marketStatus, setMarketStatus] = useState(1);
  const [timeoutId, setTimeoutId] = useState(null)
  const [lastPrice, setLastPrice] = useState();
  const [show, setShow] = useState(false);
  const [ws, setWs] = useState(null);
  const handleShowChart=()=>{
    setShow(true);
  }
  const onHide=()=>{
    setShow(false);
  }
  useEffect(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const day = currentDate.getDay();
    const isMarketClosed = (day === 0) || (day === 6) || (hours < 9) || (hours > 15) || (hours === 15 && minutes > 30);

    const fetchDailyData = async () => {
      try {
        const response = await axios.get(`/api/daily-price?symbol=${code}&period=D`);
        setLastPrice(response.data.output[0]);
        setMarketStatus(0); // Market closed
      } catch (error) {
        console.error('API 요청 에러:', error);
      }
    };
    if(isMarketClosed){
      fetchDailyData();
    }else{
      const ws = new WebSocket('ws://localhost:3002');
      ws.onopen = function() {
        console.log('WebSocket 연결이 열렸습니다.');
        ws.send(JSON.stringify({ id: code }));
      };
      ws.onmessage = function(event) {
        const data = JSON.parse(event.data);
        console.log("받은 데이터!!", data);
        setStockData(data); 
        setMarketStatus(1);
      };

      ws.onclose = function(event) {
        console.log('WebSocket 연결이 닫혔습니다.');
      };

      setWs(ws);
    }

     return () => { 
     
    };
  
  }, [code]);

  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  const renderPriceChange = () => {
    if (!stockData) return null;
    return (
      <PriceContent>
      <div style={{fontSize:"35px", fontWeight:"bold"}}>{parseInt(stockData.주식현재가).toLocaleString()}<span style={{fontSize:"15px", marginLeft:"3px"}}>원</span></div>
      <div style={{ display: "flex", gap: "7px" }}>
                    {formatPC(stockData.전일대비)}
                    {formatCR(stockData.전일대비율)}
      </div>
      <StockStatus>
      <>
      {new Date().getHours()}:{new Date().getMinutes()}
      <i class="bi bi-circle-fill" style={{ color: '#4BFF3B' , fontSize:"8px", marginLeft:"15px", marginRight:"5px"}}></i>실시간
      </>
      </StockStatus>
    </PriceContent>
    );
  };

  const formatPC = (dataString) => {
    const sign = dataString.substring(0, 1);
    const number = dataString.substring(1);
    if (sign === '-') {
        return <StyledPriceChange color="#077DF3"><i className="bi bi-caret-down-fill"></i> {numberWithCommas(number)}</StyledPriceChange>;
    } else if (sign === '0') {
        return <span style={{ color: 'gray', fontWeight:"600" }}>{numberWithCommas(dataString)}</span>;
    } else {
        return <StyledPriceChange color="#ED3738"><i className="bi bi-caret-up-fill"></i> {numberWithCommas(dataString)}</StyledPriceChange>;
    }
};

const formatCR = (dataString) => {
    const sign = dataString.substring(0, 1);
    const zero=dataString.substring(0,4);
    const number = dataString.substring(1);
    if (sign === '-') {
        return <span style={{color:"#077DF3", fontWeight:"bold"}}>-{numberWithCommas(number)}%</span>;
    } else if (zero === '0.00') {
        return <span style={{color:"gray", fontWeight:"bold"}}>{numberWithCommas(dataString)}%</span>;
    } else {
        return <span style={{color:"#ED3738", fontWeight:"bold"}}>+{numberWithCommas(dataString)}%</span>;
    }
};
const numberWithCommas = (number) => {
  if (!number) return ''; // 값이 없으면 빈 문자열 반환
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};


const handleLinkTo = () => {
  window.location.href = "https://digitalshinhansec.com/stock";
};
const DateStatus = () => {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const dayPeriod = hours < 9 ? "개장전" : "장마감" ;
  const displayDate = currentDate.toLocaleDateString('ko-KR', {  month: 'numeric', day: 'numeric' });

  return (
    <div>
      <span>{displayDate}</span>
      <i className="bi bi-circle-fill" style={{ color: '#9A9D9E', fontSize: "8px", marginLeft: "15px" }}></i>
      <span style={{ marginLeft: "5px" }}>{dayPeriod}</span>
    </div>
  );
};

  return (
    <Container>
      <Sidebar />
      <Content>
      <Header></Header>
      <ChartSection>
          <div className="header-content">
            <div style={{fontSize:"24px", fontWeight:"bold"}}>{code}</div>
            <h4>{name}</h4> 
            <div>
              {marketStatus === 1 && renderPriceChange()}
              {marketStatus === 0 && lastPrice && (
                <PriceContent>
                  <div style={{fontSize:"35px", fontWeight:"bold"}}>{numberWithCommas(lastPrice.stck_clpr)}<span style={{fontSize:"15px", marginLeft:"3px"}}>원</span></div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    {formatPC(lastPrice.prdy_vrss)}
                    {formatCR(lastPrice.prdy_ctrt)}
                  </div>
                  <StockStatus>
                    <DateStatus/>
                  </StockStatus>
                </PriceContent>
              )}
            </div>
          </div>
          <div className="chart-image">
            <img src="/assets/images/chart.png" alt="chart" onDoubleClick={handleShowChart} style={{width:"150px", marginBottom:"10pxs", cursor:"pointer"}}/>
            <div>
            <i class="bi bi-arrows-fullscreen" style={{color:"#0DAA5C", fontSize:"12px", fontWeight:"bold", cursor:"pointer"}} onClick={handleShowChart}></i>
            <span style={{fontSize:"12px", marginLeft:"10px", color:"#0DAA5C", cursor:"pointer"}} onClick={handleShowChart} >차트 자세히 보기</span>
            </div>
            
            <ChartModal show={show} onHide={onHide} code={code} name={name}/>
          </div>
          <LinkTo onClick={handleLinkTo}> <i class="bi bi-box-arrow-up-right" style={{marginRight:"3px", fontSize:"26px"}}></i><span style={{fontWeight:"bold", fontSize:"18px"}}><i style={{fontSize:"20px"}}>{name}</i>  투자하러 가기</span></LinkTo>
        </ChartSection>
        <TabsSection>
          <CustomTabs justify variant="underline" activeKey={activeTab} onSelect={handleTabSelect}>
            <Nav.Item>
              <Nav.Link eventKey="main" >종합</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="news">뉴스</Nav.Link>
            </Nav.Item>
            <Nav.Item >
            <Nav.Link eventKey="price">시세</Nav.Link>
            </Nav.Item>
            <Nav.Item >
            <Nav.Link eventKey="financial" >재무</Nav.Link>
            </Nav.Item>
          </CustomTabs>
          <div style={{height: 'calc(100vh - 406px)', overflowY: 'auto' }}>
            {activeTab === 'main' && <Maintab id={code} />}
            {activeTab === 'news' && <Newstab id={code} />}
            {activeTab === 'price' && <Pricetab id={code} />}
            {activeTab === 'financial' && <Financial id={code} />}
          </div>
        </TabsSection>
      </Content>
    </Container>
  );
}
