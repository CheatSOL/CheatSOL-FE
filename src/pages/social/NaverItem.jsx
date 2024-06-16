import CountrySelectBar from "../../components/common/chart-select-bar/country/Country.select.bar";
import PeriodSelectBar from "../../components/common/chart-select-bar/period/Period.select.bar";
import GoogleNews from "../../components/common/news/google-news/Google.news";
import NaverNews from "../../components/common/news/naver-news/Naver.news";
import {
  StyledSocialNaverDiv,
  StyledNaverItemDiv,
  StyledNaverHeaderDiv,
  StyledNaverChartNewsDiv,
} from "./NaverItem.style";

export default function NaverItem() {
  return (
    <StyledSocialNaverDiv>
      <StyledNaverItemDiv>
        <div>
          <img src="/assets/images/naver.png" />
        </div>
        <StyledNaverHeaderDiv>
          <PeriodSelectBar />
          <CountrySelectBar />
        </StyledNaverHeaderDiv>
        <div></div>
      </StyledNaverItemDiv>
      <StyledNaverChartNewsDiv>
        <div>
          <span>
            <strong>"불닭"</strong>이 이만큼 언급됐어요
          </span>
        </div>
        <NaverNews />
      </StyledNaverChartNewsDiv>
    </StyledSocialNaverDiv>
  );
}
