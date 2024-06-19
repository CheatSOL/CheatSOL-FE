import styled from "styled-components";

// 메인 컨테이너 스타일
export const StyledMainTabDiv = styled.div`
    padding: 20px;
    
`;

// 테이블 스타일
export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
`;

export const Th = styled.th`
    background-color: #F1FCFF;
    /* 제목 셀 하단에만 경계선 추가 */
    padding: 12px;  /* 높이를 늘리기 위해 패딩 조정 */
    text-align: center;
    font-weight: bold;
    color: #666; /* 연한 색상 */
`;

export const Td = styled.td`
    border-bottom: 1.5px solid #ddd; 
    padding: 8px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

export const Thead = styled.tbody`
    background-color: #ff;
    
`;

export const Tbody = styled.tbody`
    background-color: #ff;
    
`;
