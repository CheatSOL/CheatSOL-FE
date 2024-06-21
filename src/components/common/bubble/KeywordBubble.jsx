// Bubble.js
import { StyledBubbleDiv } from "./KeywordBubble.style";

export default function Bubble(props) {
  return (
    <StyledBubbleDiv
      width={props.width}
      height={props.height}
      opacity={props.opacity}
      fontsize={props.fontsize}
      onClick={(e)=>props.clickfunc(e)}
      iscurrent={props.iscurrent}
      id={props.id}
    >
      {props.content}
    </StyledBubbleDiv>
  );
}
