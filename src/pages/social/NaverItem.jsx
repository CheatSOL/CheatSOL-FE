import CountrySelectBar from "../../components/common/chart-select-bar/country/Country.select.bar";
import PeriodSelectBar from "../../components/common/chart-select-bar/period/Period.select.bar";
import GoogleNews from "../../components/common/news/google-news/Google.news";
import NaverNews from "../../components/common/news/naver-news/Naver.news";
import NaverGraph from "../../components/common/keywordGraph/naverGraph/NaverGraph";
import {
  StyledSocialNaverDiv,
  StyledNaverItemDiv,
  StyledNaverHeaderDiv,
  StyledNaverChartNewsDiv,
} from "./NaverItem.style";
import NaverGroups from "../../components/common/keywordGraph/naverGraph/NaverGroups.jsx";

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
          <NaverGraph></NaverGraph>
          <NaverGroups />
        </div>
        <NaverNews />
      </StyledNaverChartNewsDiv>
    </StyledSocialNaverDiv>
  );
}
