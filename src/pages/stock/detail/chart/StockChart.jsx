import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';

export const StockChart = () => {
  const [activeTab, setActiveTab] = useState('D'); // Default to 'day' tab
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchChartData(activeTab); // Fetch initial chart data based on active tab
  }, [activeTab]);

  const fetchChartData = async (period) => {
    let symbol = '005930'; // Replace with your symbol if it's dynamic
    let apiUrl = `/api/daily-price?symbol=${symbol}&period=${period}`;

    try {
      const response = await axios.get(apiUrl);
      console.log(response.data.output); // Log the fetched data
      setChartData(response.data.output); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  const transformDataForChart = (data) => {
    return data.map(item => ({
      x: new Date(item.stck_bsop_date.slice(0, 4), parseInt(item.stck_bsop_date.slice(4, 6)) - 1, item.stck_bsop_date.slice(6, 8)).getTime(), // Convert date to timestamp
      y: [parseFloat(item.stck_oprc), parseFloat(item.stck_hgpr), parseFloat(item.stck_lwpr), parseFloat(item.stck_clpr)]
    }));
  };

  const options = {
    chart: {
      type: 'candlestick',
      height: "600px",
    },
    plotOptions: {
        candlestick: {
          colors: {
            upward: '#ED3738', // 증가할 때의 색상
            downward: '#077DF3', // 감소할 때의 색상
          },
        },
      },
      xaxis: {
        type: 'datetime',
      }
  };

  const series = [
    {
      data: transformDataForChart(chartData),
    },
  ];

  

  const handleTabChange = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <div id="chart">
     
      <Nav justify variant="underline" activeKey={activeTab} onSelect={handleTabChange}>
        <Nav.Item>
          <Nav.Link eventKey="D">일별</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="W">주별</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="M">월별</Nav.Link>
        </Nav.Item>
      </Nav>
      <Chart
        options={options}
        series={series}
        type="candlestick"
        height={350}
        
      />
    </div>
  );
};

export default StockChart;
