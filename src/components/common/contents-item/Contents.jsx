import React from "react";
import { StyledContentsDiv, StyledContentsTitle, StyledContentsTitleGroup, StyledContentsSubTitle, StyledContentsMiniTitle } from "./Contents.style";
import { StyledContentsTag } from "./Contents.style";

export default function Contents(props) {
  // DB 모든 회사의 종목코드마다 map 돌려서 요청해서 그 안에서 컴포넌트 불러와주면 될 것 같다
  // !! sample data -> 실제 데이터로 추후 변경해주세요.
  const stock_sample_code = "005930"
  const stock_sample_name = "삼성전자"
  const stock_sample_price = 597000
  const stock_sample_data = ["1",16000,2.75] 
  const stock_sample_tag = [610000, 640000, 103100]


  const stck_cd = stock_sample_code //종목코드
  const stck_name = stock_sample_name //회사이름
  const stck_prpr = stock_sample_price //시세(현재가)
  // !! 전일 대비 부호가 1이면 +, 2이면 -로 임의 설정해뒀습니다. API 구현 후 수정해주세요.
  const prdy_vrss_sign = stock_sample_data[0] === "1"? "+" : "-" //전일 대비
  const prdy_vrss_sign_ic = stock_sample_data[0] === "1"? "~/images/up-icon.png" : "~/images/down-icon.png" 
  const prdy_vrss = stock_sample_data[1] //전일 대비 부호 
  const prdy_ctrt = stock_sample_data[2] //전일 대비율
  const stck_oprc = stock_sample_tag[0] //시가(하루의 첫거래가)
  const stck_dryy_hgpr = stock_sample_tag[1] //1년 최고
  const stck_dryy_lwpr = stock_sample_tag[2] //1년 최저

  // contentsdiv
  // -> contentstitlegroup
  // --> contentstitle & subtitle & minititle
  // -> contentstaggroup
  // --> contentstag
  return (
          // !! div에 key값 붙여주세요. (redux 구현 후)
          <StyledContentsDiv
          width={props.width}
          height={props.height}>
            <StyledContentsTitleGroup>
              <div>
              <StyledContentsTitle>
              {stck_name}
              </StyledContentsTitle>
              <StyledContentsSubTitle>
                {stck_prpr} krw
              </StyledContentsSubTitle>
              </div>
              <StyledContentsMiniTitle>
                <p>{prdy_vrss_sign}{prdy_vrss}</p>
                <p>({prdy_ctrt}%)</p>
                <img src="/assets/images/up-icon.png"></img>
              </StyledContentsMiniTitle>
            </StyledContentsTitleGroup>
            <StyledContentsTag>
            <div className="price-box">시가 <p>{stck_oprc}</p></div>
            <div className="price-box">1년 최고 {stck_dryy_hgpr}</div>
            <div className="price-box">1년 최저 {stck_dryy_lwpr}</div>
            </StyledContentsTag>
          </StyledContentsDiv>
        )
}