// StockDetail.js

import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/common/sidebar/Sidebar';
import Nav from 'react-bootstrap/Nav';
import { Container, Content, ChartSection, TabsSection, CustomTabs, CustomTabLink, Price } from './StockDetail.style';
import 'bootstrap/dist/css/bootstrap.min.css';
import Maintab from './maintab/Maintab';
import Pricetab from './pricetab/Pricetab';
import Newstab from './newstab/Newstab';
import Header from '../../../components/common/header/Header';

import { useParams } from 'react-router-dom';

export default function StockDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('main'); 
  const [stockData, setStockData] = useState(null); 

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3002');

    ws.onopen = function() {
      console.log('WebSocket 연결이 열렸습니다.');
      ws.send(JSON.stringify({ id: id }));
    };

    ws.onmessage = function(event) {
      const data = JSON.parse(event.data);
      console.log('받은 데이터:', data);
      setStockData(data); // 받은 데이터를 상태로 설정
    };

    ws.onclose = function(event) {
      console.log('WebSocket 연결이 닫혔습니다.');
    };

  
  }, []);

  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey);ㄹ
  };

  const renderPriceChange = () => {
    if (!stockData) return null;
    let changeSymbol;
    let color;
    let prefix='';
  
  switch (stockData.전일대비부호) {
    case '2':
      changeSymbol = '▲';
      color = '#ED3738'; // Blue for increase
      prefix='+'
      break;
    case '5':
      changeSymbol = '▼';
      color = '#077DF3'; // Red for decrease
      break;
    case '3':
      changeSymbol = '-';
      color = '#555555'; // Gray for no change
      break;
    default:
      changeSymbol = '';
      color = '#555555'; // Default to gray for unknown state
  }
    const isUp = stockData.전일대비부호 === "2";

    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <h1>{parseInt(stockData.주식현재가).toLocaleString()}</h1>
      <Price style={{ color: color}}>
        <div>{changeSymbol} {Math.abs(parseInt(stockData.전일대비))} {' '}</div>
        <div>{prefix}{stockData.전일대비율}%</div>
      </Price>
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
            <div style={{fontSize:"26px", fontWeight:"bold"}}>{id}</div>
            <h1>삼성전자</h1> 
            <div>
              {renderPriceChange()}
            </div>
          </div>
          <div className="chart-image">
            <img src="/assets/images/chart.png" alt="chart" />
          </div>
        </ChartSection>
        <TabsSection>
          <CustomTabs variant="underline" activeKey={activeTab} onSelect={handleTabSelect}>
            <Nav.Item className="w-22">
              <CustomTabLink eventKey="main">종합</CustomTabLink>
            </Nav.Item>
            <Nav.Item className="w-22">
              <CustomTabLink eventKey="news">뉴스</CustomTabLink>
            </Nav.Item>
            <Nav.Item className="w-22">
              <CustomTabLink eventKey="price">시세</CustomTabLink>
            </Nav.Item>
            <Nav.Item className="w-22">
              <CustomTabLink eventKey="financial">재무</CustomTabLink>
            </Nav.Item>
          </CustomTabs>
          <div style={{height: 'calc(100vh - 406px)', overflowY: 'auto' }}>
            {activeTab === 'main' && <Maintab id={id} />}
            {activeTab === 'news' && <Newstab id={id} />}
            {activeTab === 'price' && <Pricetab id={id} />}
            {activeTab === 'financial' && <Financial id={id} />}
          </div>
        </TabsSection>
      </Content>
    </Container>
  );
}
