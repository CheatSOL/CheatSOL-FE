// Bubble.js
import { StyledBubbleDiv } from "./KeywordBubble.style";

export default function Bubble(props) {
  return (
    <StyledBubbleDiv
      width={props.width}
      height={props.height}
      opacity={props.opacity}
      fontsize={props.fontsize}
    >
      {props.content}
    </StyledBubbleDiv>
  );
}
