import { useState, useEffect } from "react";
import ContentHeader from "./contents-item/ContentHeader";
import StockContent from "./contents-item/StockContent";
import { Contents, StyledContentsDiv } from "./contents-item/Contents.style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { StyledMainContentDiv } from "./Main.style";

export default function RelatedStock({ keyword }) {
  const STOCK_SIZE = 6;
  const STOCK_CONTENT_WIDTH = "15%";
  const STOCK_CONTENT_HEIGHT = "90px";

  const [companies, setCompaines] = useState([]);

  useEffect(() => {
    setCompaines([]);
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/company?word=${keyword}`);
        const newCompanies = [];
        for (let i = 0; i < STOCK_SIZE; i++) {
          newCompanies.push(response.data.message[i]);
        }
        setCompaines(newCompanies);
      } catch (error) {
        console.error("Error fetching the news:", error);
      }
    };
    fetchData();
  }, [keyword]);

  return (
    <StyledMainContentDiv>
      <ContentHeader
        imgUrl="/assets/images/hand-with-care.svg"
        keyword={keyword}
        description="와 관련도가 높은 주식회사에요."
        toLink="/main/stock"
      ></ContentHeader>
      <Contents>
        {/* 내용이 들어오면 변경 */}
        {companies.length === 0 ? (
          Array.from({ length: STOCK_SIZE }).map((elem, index) => (
            <StyledContentsDiv
              width={STOCK_CONTENT_WIDTH}
              height={STOCK_CONTENT_HEIGHT}
            >
              <Skeleton
                key={index}
                width={140}
                height={40}
                style={{ margin: "0.5rem" }}
              />
              <Skeleton width={70} height={15} />
            </StyledContentsDiv>
          ))
        ) : companies[0].similarity == 0 ? (
          <img
            style={{ width: "750px", height: "165px" }}
            // 다크 모드 시 no-data-darkmode.svg
            src="/assets/images/no-data.svg"
          ></img>
        ) : (
          companies.map((company) => (
            <StockContent
              key={company.id} // 고유한 key 속성을 사용하세요. 예를 들어 company.id 또는 company.name 등을 사용하세요.
              company={company}
              width={STOCK_CONTENT_WIDTH}
              height={STOCK_CONTENT_HEIGHT}
            />
          ))
        )}
      </Contents>
    </StyledMainContentDiv>
  );
}
