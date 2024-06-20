import CountrySelectBar from "../../components/common/chart-select-bar/country/Country.select.bar";
import PeriodSelectBar from "../../components/common/chart-select-bar/period/Period.select.bar";
import YoutubeData from "../../components/common/news/youtube-data/Youtube.data";
import {
  StyledSocialYoutubeDiv,
  StyledYoutubeItemDiv,
  StyledYoutubeHeaderDiv,
  StyledYoutubeChartNewsDiv,
} from "./Youtube.style";

import YoutubeGraph from "../../components/common/keywordGraph/youtubeGraph/YoutubeGraph";
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
        <YoutubeGraph></YoutubeGraph>
        <YoutubeData />
      </StyledYoutubeChartNewsDiv>
    </StyledSocialYoutubeDiv>
  );
}
