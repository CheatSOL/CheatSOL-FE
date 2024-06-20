import { useState, useEffect } from "react";
import Header from "../../components/common/header/Header";
import Sidebar from "../../components/common/sidebar/Sidebar";
import {
  StyledMainDiv,
  StyledMainContentDiv,
  MainBody,
  MainContent,
} from "./Main.style";
import ContentHeader from "./contents-item/ContentHeader";
import StockContent from "./contents-item/StockContent";
import { Contents, StyledContentsDiv } from "./contents-item/Contents.style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

export default function MainPage() {
  const [keyword, setKeyWord] = useState("불닭");
  const [companies, setCompaines] = useState([]);

  const STOCK_SIZE = 6;
  const STOCK_CONTENT_WIDTH = "15%";
  const STOCK_CONTENT_HEIGHT = "90px";

  useEffect(() => {
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
  }, []);

  return (
    <StyledMainDiv>
      <Sidebar />
      <MainContent>
        <MainBody>
          <Header />
          <StyledMainContentDiv>
            <ContentHeader
              imgUrl="/assets/images/hand-with-care.svg"
              keyword={keyword}
              description="관련도가 높은 주식회사에요."
            ></ContentHeader>
            <Contents>
              {/* 내용이 들어오면 변경 */}
              {companies.length === 0
                ? Array.from({ length: STOCK_SIZE }).map(() => (
                    <StyledContentsDiv
                      width={STOCK_CONTENT_WIDTH}
                      height={STOCK_CONTENT_HEIGHT}
                    >
                      <Skeleton
                        width={140}
                        height={40}
                        style={{ margin: "0.5rem" }}
                      />
                      <Skeleton width={70} height={15} />
                    </StyledContentsDiv>
                  ))
                : companies.map((company) => (
                    <StockContent
                      key={company.id} // 고유한 key 속성을 사용하세요. 예를 들어 company.id 또는 company.name 등을 사용하세요.
                      company={company}
                      width={STOCK_CONTENT_WIDTH}
                      height={STOCK_CONTENT_HEIGHT}
                    />
                  ))}
            </Contents>
          </StyledMainContentDiv>
        </MainBody>
      </MainContent>
    </StyledMainDiv>
  );
}
