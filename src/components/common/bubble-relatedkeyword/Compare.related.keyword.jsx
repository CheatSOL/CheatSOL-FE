import React from 'react';
import Chart from 'react-apexcharts';

const RelatedKeywordChart = () => {
  const series = [
    {
      name: 'Series 1',
      data: [44, 55, 41, 67, 22, 43, 21]
    },
    {
      name: 'Series 2',
      data: [13, 23, 20, 8, 13, 27, 33]
    }
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yaxis: {
      title: {
        text: 'Value'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        }
      }
    }
  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default RelatedKeywordChart;
