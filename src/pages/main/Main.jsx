import Header from "../../components/common/header/Header";
import Sidebar from "../../components/common/sidebar/Sidebar";
import { StyledMainDiv } from "./Main.style";

export default function MainPage() {
  return (
    <StyledMainDiv>
      <Header />
      <Sidebar />
    </StyledMainDiv>
  );
}
