import CountrySelectBar from "../../components/common/chart-select-bar/country/Country.select.bar";
import PeriodSelectBar from "../../components/common/chart-select-bar/period/Period.select.bar";
import GoogleNews from "../../components/common/news/google-news/Google.news";
import GoogleGraph from "../../components/common/keywordGraph/googleGraph/GoogleGraph";
import {
  StyledSocialGoogleDiv,
  StyledGoogleItemDiv,
  StyledGoogleHeaderDiv,
  StyledGoogleChartNewsDiv,
} from "./Google.style";

export default function GoogleItem() {
  return (
    <StyledSocialGoogleDiv>
      <StyledGoogleItemDiv>
        <div>
          <img src="/assets/images/google.png" />
        </div>
        <StyledGoogleHeaderDiv>
          <PeriodSelectBar />
          <CountrySelectBar />
        </StyledGoogleHeaderDiv>
        <div></div>
      </StyledGoogleItemDiv>
      <StyledGoogleChartNewsDiv>
        <GoogleGraph></GoogleGraph>
        <GoogleNews />
      </StyledGoogleChartNewsDiv>
    </StyledSocialGoogleDiv>
  );
}
