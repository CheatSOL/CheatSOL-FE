import Header from "../../components/common/header/Header";
import Sidebar from "../../components/common/sidebar/Sidebar";
import GoogleItem from "./Google.item";
import InstagramItem from "./Instagram.item";
import NaverItem from "./NaverItem";
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
        <InstagramItem />
        <NaverItem />
      </StyledSocialInfoDiv>
    </StyledSocialDiv>
  );
}
