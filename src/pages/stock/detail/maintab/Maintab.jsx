import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledMainTabDiv, Table, Th, Td, Thead, Tbody } from './Maintab.style';

export default function Maintab() {
    const [currentPrice, setCurrentPrice] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/current-price?symbol=005930'); // 현재 삼성전자로 하드코딩
                console.log(response.data); // 확인을 위해 응답 데이터 전체를 출력
                setCurrentPrice(response.data.output);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <StyledMainTabDiv>
            <h1>Maintab</h1>
            {currentPrice && (
                <Table>
                    <Thead>
                        <tr>
                            <Th>전일</Th>
                            <Th>시가</Th>
                            <Th>고가</Th>
                            <Th>저가</Th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr>
                            <Td>{currentPrice.stck_prpr}</Td>
                            <Td>{currentPrice.stck_oprc}</Td>
                            <Td>{currentPrice.stck_hgpr}</Td>
                            <Td>{currentPrice.stck_lwpr}</Td>
                        </tr>
                    </Tbody>
                    <Thead>
                        <tr>
                            <Th>거래량</Th>
                            <Th>대금</Th>
                            <Th>시총</Th>
                            <Th>외인소진율</Th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr>
                            <Td>{(currentPrice.acml_vol / 1000000).toFixed(2)} 백만</Td>
                            <Td>{(currentPrice.acml_tr_pbmn / 100000000).toFixed(2)} 억</Td>
                            <Td>{(currentPrice.lstn_stcn * currentPrice.stck_prpr / 100000000).toFixed(2)} 억</Td>
                            <Td>{currentPrice.hts_frgn_ehrt}%</Td>
                        </tr>
                    </Tbody>
                    <Thead>
                        <tr>
                            <Th>52주 최고</Th>
                            <Th>52주 최저</Th>
                            <Th>PER</Th>
                            <Th>EPS</Th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr>
                            <Td>{currentPrice.w52_hgpr}</Td>
                            <Td>{currentPrice.w52_lwpr}</Td>
                            <Td>{currentPrice.per}배</Td>
                            <Td>{currentPrice.eps}원</Td>
                        </tr>
                    </Tbody>
                    <Thead>
                        <tr>
                            <Th>PBR</Th>
                            <Th>BPS</Th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr>
                            <Td>{currentPrice.pbr} 배</Td>
                            <Td>{currentPrice.bps} 원</Td>
                        </tr>
                    </Tbody>
                </Table>
            )}
        </StyledMainTabDiv>
    );
}
