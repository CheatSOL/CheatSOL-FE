import Header from "../../components/common/header/Header";
import GoogleNews from "../../components/common/news/google-news/Google.news";
import Sidebar from "../../components/common/sidebar/Sidebar";
import GoogleItem from "./Google.item";
import { StyledSocialDiv, StyledSocialInfoDiv } from "./Social.style";
import YoutubeItem from "./Youtube.item";

export default function SocialPage() {
  return (
    <StyledSocialDiv>
      <Sidebar />
      <StyledSocialInfoDiv>
        <Header />
        <GoogleItem />
        <YoutubeItem />
      </StyledSocialInfoDiv>
    </StyledSocialDiv>
  );
}
