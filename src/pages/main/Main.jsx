import Header from "../../components/common/header/Header";
import GoogleNews from "../../components/common/news/google-news/Google.news";
import Sidebar from "../../components/common/sidebar/Sidebar";
import { StyledMainDiv } from "./Main.style";

export default function MainPage() {
  return (
    <StyledMainDiv>
      <Sidebar />
      <div>
        <Header />
        <GoogleNews />
      </div>
    </StyledMainDiv>
  );
}
