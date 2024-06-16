import CountrySelectBar from "../../components/common/chart-select-bar/country/Country.select.bar";
import PeriodSelectBar from "../../components/common/chart-select-bar/period/Period.select.bar";
import YoutubeData from "../../components/common/news/youtube-data/Youtube.data";
import {
  StyledSocialYoutubeDiv,
  StyledYoutubeItemDiv,
  StyledYoutubeHeaderDiv,
  StyledYoutubeChartNewsDiv,
} from "./Youtube.style";

export default function YoutubeItem() {
  return (
    <StyledSocialYoutubeDiv>
      <StyledYoutubeItemDiv>
        <div>
          <img src="/assets/images/youtube.png" />
        </div>
        <StyledYoutubeHeaderDiv>
          <PeriodSelectBar />
          <CountrySelectBar />
        </StyledYoutubeHeaderDiv>
        <div></div>
      </StyledYoutubeItemDiv>
      <StyledYoutubeChartNewsDiv>
        <div>
          <span>
            <strong>"불닭"</strong>이 이만큼 언급됐어요
          </span>
        </div>
        <YoutubeData />
      </StyledYoutubeChartNewsDiv>
    </StyledSocialYoutubeDiv>
  );
}
