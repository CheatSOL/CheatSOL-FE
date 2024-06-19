import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledMainTabDiv, Table, Th, Td, Thead, Tbody } from './Maintab.style';

export default function Maintab({id}) {
    const [currentPrice, setCurrentPrice] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/current-price?symbol=${id}`);
                setCurrentPrice(response.data.output);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const numberWithCommas = (number) => {
        if (!number) return ''; // 값이 없으면 빈 문자열 반환
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    return (
        <StyledMainTabDiv>
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
                            <Td>{numberWithCommas(currentPrice.stck_prpr)}</Td>
                            <Td>{numberWithCommas(currentPrice.stck_oprc)}</Td>
                            <Td>{numberWithCommas(currentPrice.stck_hgpr)}</Td>
                            <Td>{numberWithCommas(currentPrice.stck_lwpr)}</Td>
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
                            <Td>{numberWithCommas((currentPrice.acml_vol / 1000000).toFixed(2))} 백만</Td>
                            <Td>{numberWithCommas((currentPrice.acml_tr_pbmn / 100000000).toFixed(2))} 억</Td>
                            <Td>{numberWithCommas((currentPrice.lstn_stcn * currentPrice.stck_prpr / 100000000).toFixed(2))} 억</Td>
                            <Td>{numberWithCommas(currentPrice.hts_frgn_ehrt)}%</Td>
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
                            <Td>{numberWithCommas(currentPrice.w52_hgpr)}</Td>
                            <Td>{numberWithCommas(currentPrice.w52_lwpr)}</Td>
                            <Td>{numberWithCommas(currentPrice.per)}배</Td>
                            <Td>{numberWithCommas(currentPrice.eps)}원</Td>
                        </tr>
                    </Tbody>
                    <Thead>
                        <tr>
                            <Th>PBR</Th>
                            <Th>BPS</Th>
                            <Th></Th>
                            <Th></Th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr>
                            <Td>{numberWithCommas(currentPrice.pbr)} 배</Td>
                            <Td>{numberWithCommas(currentPrice.bps)} 원</Td>
                            <Td></Td>
                            <Td></Td>
                        </tr>
                    </Tbody>
                </Table>
            )}
        </StyledMainTabDiv>
    );
}
