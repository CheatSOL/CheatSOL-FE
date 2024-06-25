import styled from 'styled-components';

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    th, td {
        
        padding: 10px;
        text-align: center;
        
    }
    th {
        background-color: #F1FCFF;
        border-bottom: 1.5px solid #ddd
        
    }
    td{
        line-height: 40px;
        border-bottom: 0.5px solid #ddd
    }
   
`;

export const StyledChangeRate = styled.span`
    display: inline-block;
    min-width: 60px;
    font-size: 14px;
    border-radius: 4px;
    font-weight: 600;
    line-height: 32px;
    color: #fff;
    /* background-color: #909aab; */
    vertical-align: top;
    text-align: center;
    ${({ color }) => `background-color: ${color};`}
    color: #fff;
`;

export const StyledPriceChange = styled.span`
    font-size:16px;
    font-weight: bold;
    ${({ color }) => `color: ${color};`}
`;
export const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Adjust based on your layout */
`;