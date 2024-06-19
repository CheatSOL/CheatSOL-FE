import CountrySelectBar from "../../components/common/chart-select-bar/country/Country.select.bar";
import PeriodSelectBar from "../../components/common/chart-select-bar/period/Period.select.bar";
import GoogleNews from "../../components/common/news/google-news/Google.news";
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
        <div>
          <span>
            <strong>"불닭"</strong>이 이만큼 언급됐어요
          </span>
        </div>
        <GoogleNews />
      </StyledGoogleChartNewsDiv>
    </StyledSocialGoogleDiv>
  );
}
