import {
  StyledStockDiv,
  StyledStockBodyDiv,
  StyledBodyCompanyDiv,
  StyledStockHeaderDiv,
  StyledLoadingDiv,
  StyledContentsDiv,
  StyledHeaderChart,
  StyledSearchSpan,
  StyledPriceSpan,
} from "./Stock.style";

import ContentsItem from "~/components/common/contents-item/Contents";
import Header from "../../components/common/header/Header";
import Sidebar from "../../components/common/sidebar/Sidebar";
import StockChart from "./Stock.chart";
import { useQuery } from "react-query";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";

const fetchStockData = async (keyword) => {
  const response = await axios.get("/api/trends", {
    params: {
      keyword: keyword,
    },
  });
  return JSON.parse(response.data);
};

const fetchCompanyData = async (keyword) => {
  const response = await axios.get("/api/company", {
    params: {
      word: keyword,
    },
  });
  return response.data.message.slice(0, 20);
};

export default function StockPage() {
  const keyword = useSelector((state) => state.keyword.keyword);
  const [curCompanyPrice, setCurCompanyPrice] = useState([]);
  const [curCompanyName, setCurCompanyName] = useState("");

  const {
    data: stockData,
    isLoading: isStockLoading,
    error: stockError,
  } = useQuery(
    ["stockData", keyword],
    () => (keyword ? fetchStockData(keyword) : Promise.resolve(null)),
    {
      staleTime: Infinity,
      enabled: !!keyword,
      refetchInterval: 5000,
    }
  );

  const {
    data: companyData,
    isLoading: isCompanyLoading,
    error: companyError,
  } = useQuery(
    ["companyData", keyword],
    () => (keyword ? fetchCompanyData(keyword) : Promise.resolve([])),
    {
      staleTime: Infinity,
      enabled: !!keyword,
      refetchInterval: 5000,
    }
  );

  useEffect(() => {
    const fetchDailyPrice = async () => {
      if (companyData && companyData.length > 0) {
        try {
          const result = await axios.get("/api/daily-price", {
            params: {
              symbol: companyData[0].code,
            },
          });
          console.log(result);
          setCurCompanyName(companyData[0].name);
          setCurCompanyPrice(
            result.data.output.map((e) => e.stck_oprc).reverse()
          );
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchDailyPrice();
  }, [companyData]);

  const handleItemClick = (data, name) => {
    setCurCompanyPrice(data.output.map((e) => e.stck_clpr).reverse());
    setCurCompanyName(name);
  };

  return (
    <StyledStockDiv>
      <Sidebar />
      <div>
        <Header />
        <StyledStockHeaderDiv>
          {keyword ? (
            <>
              최근 한달간 <strong>{`"${keyword}"`}</strong>
              <span>연관 주식</span>의 주가 흐름과 <span>대중의 관심 경향</span>
              을 함께 비교해보세요.
            </>
          ) : (
            "키워드를 입력해주세요."
          )}
        </StyledStockHeaderDiv>

        <StyledStockBodyDiv>
          <div>
            <StyledHeaderChart>
              <span>
                {keyword}의{" "}
                <StyledSearchSpan>검색 트랜드 추이</StyledSearchSpan>와{" "}
                {curCompanyName}의<StyledPriceSpan> 시세 </StyledPriceSpan>비교
              </span>
            </StyledHeaderChart>
            {isStockLoading ? (
              <StyledLoadingDiv>
                <ClipLoader color={"#43D2FF"} loading={true} />
              </StyledLoadingDiv>
            ) : (
              stockData && (
                <StockChart
                  data={stockData?.default?.timelineData}
                  curCompanyPrice={curCompanyPrice}
                  curCompanyName={curCompanyName}
                />
              )
            )}
          </div>
          <div>
            <StyledHeaderChart>
              <span>
                {keyword}의 <StyledSearchSpan>연관 기업 정보 </StyledSearchSpan>
                확인하기
              </span>
            </StyledHeaderChart>
            <StyledBodyCompanyDiv>
              {isCompanyLoading || !companyData ? (
                Array.from({ length: 20 }).map((_, index) => (
                  <StyledContentsDiv
                    width={"280px"}
                    height={"180px"}
                    key={index}
                  >
                    <Skeleton height={20} />
                    <Skeleton height={15} />
                    <Skeleton height={15} width="80%" />
                  </StyledContentsDiv>
                ))
              ) : (
                // Show company data
                <>
                  {companyData.map((e, i) => (
                    <ContentsItem
                      width={"280px"}
                      height={"180px"}
                      item={e}
                      key={i}
                      currentCompany={handleItemClick}
                    />
                  ))}
                </>
              )}
            </StyledBodyCompanyDiv>
          </div>
        </StyledStockBodyDiv>
      </div>
    </StyledStockDiv>
  );
}
