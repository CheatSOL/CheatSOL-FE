import {
  StyledStockDiv,
  StyledStockBodyDiv,
  StyledBodyCompanyDiv,
  StyledStockHeaderDiv,
  StyledLoadingDiv,
} from "./Stock.style";
import ContentsItem from "~/components/common/contents-item/Contents";
import Header from "../../components/common/header/Header";
import Sidebar from "../../components/common/sidebar/Sidebar";
import StockChart from "./Stock.chart";
import { useQuery } from "react-query";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const fetchStockData = async () => {
  const response = await axios.get("http://localhost:3001/trends", {
    params: {
      keyword: "기아", // Replace with your keyword variable if dynamic
    },
  });
  return JSON.parse(response.data); // JSON 형식으로 파싱된 데이터
};

export default function StockPage() {
  const { data, isLoading, error } = useQuery("stockData", fetchStockData, {
    staleTime: Infinity,
  });

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  const timelineData = data?.default?.timelineData || [];
  console.log(isLoading);
  return (
    <StyledStockDiv>
      <Sidebar />
      <div>
        <Header />
        <StyledStockHeaderDiv>
          최근 7일간 <strong>"불닭"</strong>
          <span>연관 주식</span>의 주가 흐름과 <span>대중의 관심 경향</span>을
          함께 비교해보세요.
        </StyledStockHeaderDiv>
        <StyledStockBodyDiv>
          <div>
            {isLoading ? (
              <StyledLoadingDiv>
                <ClipLoader color={"#43D2FF"} loading={true} />
              </StyledLoadingDiv>
            ) : (
              <StockChart data={timelineData} />
            )}
          </div>
          <StyledBodyCompanyDiv>
            <ContentsItem width={"350px"} height={"200px"} />
            <ContentsItem width={"350px"} height={"200px"} />
            <ContentsItem width={"350px"} height={"200px"} />
            <ContentsItem width={"350px"} height={"200px"} />
            <ContentsItem width={"350px"} height={"200px"} />
            <ContentsItem width={"350px"} height={"200px"} />
            <ContentsItem width={"350px"} height={"200px"} />
            <ContentsItem width={"350px"} height={"200px"} />
          </StyledBodyCompanyDiv>
        </StyledStockBodyDiv>
      </div>
    </StyledStockDiv>
  );
}
