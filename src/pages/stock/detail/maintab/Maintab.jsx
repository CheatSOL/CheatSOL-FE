import React, { useState, useEffect } from 'react';
import { auth, getCurrentPrice } from './currentPrice';
import { StyledMainTabDiv, Table, Th, Td, Thead, Tbody } from './Maintab.style';

export default function Maintab() {
    const [currentPrice, setCurrentPrice] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            await auth();
            const price = await getCurrentPrice("005930"); // 현재 삼성전자로 하드코딩
            setCurrentPrice(price);
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
                            <Td>{currentPrice.output.stck_prpr}</Td>
                            <Td>{currentPrice.output.stck_oprc}</Td>
                            <Td>{currentPrice.output.stck_hgpr}</Td>
                            <Td>{currentPrice.output.stck_lwpr}</Td>
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
                            <Td>{(currentPrice.output.acml_vol / 1000000).toFixed(2)} 백만</Td>
                            <Td>{(currentPrice.output.acml_tr_pbmn / 100000000).toFixed(2)} 억</Td>
                            <Td>{(currentPrice.output.lstn_stcn * currentPrice.output.stck_prpr / 100000000).toFixed(2)} 억</Td>
                            <Td>{currentPrice.output.hts_frgn_ehrt}%</Td>
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
                            <Td>{currentPrice.output.w52_hgpr}</Td>
                            <Td>{currentPrice.output.w52_lwpr}</Td>
                            <Td>{currentPrice.output.per}배</Td>
                            <Td>{currentPrice.output.eps}원</Td>
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
                            <Td>{currentPrice.output.pbr} 배</Td>
                            <Td>{currentPrice.output.bps} 원</Td>
                        </tr>
                    </Tbody>
                </Table>
            )}
        </StyledMainTabDiv>
    );
}
