import CountrySelectBar from "../../components/common/chart-select-bar/country/Country.select.bar";
import PeriodSelectBar from "../../components/common/chart-select-bar/period/Period.select.bar";
import InstagramGraph from "../../components/common/keywordGraph/instagramGraph/InstagramGraph";
import InstagramData from "../../components/common/news/instagram-data/instagram.data";
import YoutubeData from "../../components/common/news/youtube-data/Youtube.data";
import {
  StyledSocialInstagramDiv,
  StyledInstagramItemDiv,
  StyledInstagramHeaderDiv,
  StyledInstagramChartNewsDiv,
} from "./Instagram.style";

export default function InstagramItem() {
  return (
    <StyledSocialInstagramDiv>
      <StyledInstagramItemDiv>
        <div>
          <img src="/assets/images/instagram-logo.png" />
        </div>
        <StyledInstagramHeaderDiv>
          <PeriodSelectBar />
          <CountrySelectBar />
        </StyledInstagramHeaderDiv>
        <div></div>
      </StyledInstagramItemDiv>
      <StyledInstagramChartNewsDiv>
        <div>
          <span>
            <strong>"불닭"</strong>이 이만큼 언급됐어요
          </span>
          <InstagramGraph></InstagramGraph>
        </div>

        <InstagramData />
      </StyledInstagramChartNewsDiv>
    </StyledSocialInstagramDiv>
  );
}
