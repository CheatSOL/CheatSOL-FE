import React from 'react';
import Chart from 'react-apexcharts';

const RelatedKeywordChart = (props) => {
  
  const data1= props.data1;
  const data2= props.data2;

  const options = {
    chart: {
      type: 'line', // 차트 유형 설정
      height: 350
    },
    stroke: {
      curve: 'smooth' // 꺾은선의 곡선 설정 (기본값은 'straight')
    },
    title: {
      text: 'Sample Line Chart',
      align: 'left'
    },
    xaxis: {
      categorires: data1[0],
      labels: {
        show: false,
      },
    },
    
  };

  const series = [
    {
      name: 'Series 1',
      data: data1[1]
    },
    {
      name: 'Series 2',
      data: data2[1]
    },
  ];

  return (
      <Chart options={options} series={series} type="line" height={350} />
  );
};

export default RelatedKeywordChart;
