import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';

// Container를 정의하여 Flexbox 레이아웃을 설정합니다.
export const Container = styled.div`
  display: flex;
  height: 100vh;  
  width: 100vw;  
`;

// Content를 정의하여 Flexbox에서 flex: 1을 적용하여 나머지 공간을 차지하도록 설정합니다.
export const Content = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

// ChartSection을 정의하여 차트와 제목의 스타일을 설정합니다.
export const ChartSection = styled.div`
    flex: 0 0 auto; 
    justify-content: center;
    height: 230px;
    display: flex;
    gap:115px;
    align-items: center;
    position:relative;
    
    .header-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        // margin-left: 150px;
    }

    .chart-image {
        margin-right:40px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

  
`;

// TabsSection을 정의하여 탭의 스타일을 설정합니다.
export const TabsSection = styled.div`
  flex: 1 1 auto;  // 이 섹션은 가변 크기로 설정합니다.
 
`;

// CustomTabs를 정의하여 탭의 스타일을 설정합니다.
export const CustomTabs = styled(Nav)`
  width: 100%;
  border-bottom: 1px solid #959595;

  .nav-link {
    color: black;
    &:hover {
      border-bottom: 2px solid #077DF3;
      color: #077DF3;
    }
    &.active {
      border-bottom: 2px solid #077DF3;
      color: #077DF3;
    }
  }
`;

export const StockStatus=styled.div`
  color: #8F9293;
  margin-left: 10px;
  

`
export const StyledChangeRate = styled.span`
    font-size: 14px;
    font-weight: 600;
    ${({ color }) => `color: ${color};`}
`;
export const PriceContent=styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const LinkTo=styled.span`
  position:absolute;
  right:0;
  bottom:0;
  margin-bottom:35px;
  margin-right:20px;
  border-radius:10px;
  padding:5px 10px;
  cursor:pointer;
  &:hover {
    color: #077DF3; /* Change this to the desired hover color */
  }

`