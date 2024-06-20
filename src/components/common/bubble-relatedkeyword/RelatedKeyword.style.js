import styled , {keyframes, css} from "styled-components";

// @keyframes 애니메이션을 별도로 정의
const animate = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-6px);
  }
`;

const animate_click = keyframes`
  0% {
    transform: translateX(0) scale(1);
  }
  100% {
    transform: translateX(-380px) scale(0.5);
  }
`;

const animate_tab = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
     opacity: 1;
  }
`;

const animate_fadeout = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(50px);
     opacity: 0;
  }
`;

export const StyledHeadTitleBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  margin-left: 50px;

${(props) =>
  props.animate &&
  css`
    animation: ${animate_fadeout} 0.6s ease-in-out forwards;
    animation-fill-mode: forwards; /* 애니메이션 후 상태 유지 */
  `}  

`

export const StyledRelatedKeywordContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    position: relative;
`

export const StyledBubbleContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
`

export const StyledCircleContainer = styled.div`
    position: relative;
    top: 20px;
    margin: 50px auto;
    ${props => props.move &&
    css`animation: ${animate_click} 1s ease-in-out forwards;
    `}
`

export const StyledCircleItem = styled.div`
    width: ${(props) => props.width};
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    left: ${( props ) => `calc(50% + ${props.x}px - ${parseInt(props.distance)*0.5}px)`};
    top: ${( props ) => `calc(50% + ${props.y}px - ${parseInt(props.distance)*0.5}px)`};
    animation: ${animate} ${(props) => props.time || '2s'} ${(props) => props.delay || '2s'} ease-in-out infinite alternate;
  cursor: pointer;
`

export const StyledMiniCircleItem = styled.div`
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    left: ${(props) => `calc(50% + ${props.x}px - ${parseInt(props.distance)*0.5}px)`};
    top: ${(props) => `calc(50% + ${props.y}px - ${parseInt(props.distance)*0.5}px)`};
    animation: ${animate} ${(props) => props.time || '2s'} ${(props) => props.delay || '2s'} ease-in-out infinite alternate;
  cursor: pointer;
    
`

export const StyledKeyCircleItem = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;    
`

export const StyledNewsContainer = styled.div`
    position: absolute;
    right: 5vw;
    margin-right: 3vw;
    border: 1px;
`

export const StyledNewsTab = styled.div`
    /* position: absolute;
    right: 0; */    
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const StyledTitleBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  opacity: 0;

${(props) =>
  props.animate &&
  css`
    animation: ${animate_tab} 0.6s ease-in-out forwards;
    animation-delay: 0.8s;
    animation-fill-mode: forwards; /* 애니메이션 후 상태 유지 */
  `}  

`

export const StyledNaverbox = styled.div`
    opacity: 0; /* 처음에 숨김 */
    
    border-radius: 20px;
    box-shadow: 8px 20px 30px 0px rgb(0, 0, 0, 0.04);
    margin-bottom: 10vh;
    padding: 5px;
    background-color: white;

    ${(props) =>
      props.animate &&
      css`
        animation: ${animate_tab} 0.6s ease-in-out forwards;
        animation-delay: 0.4s;
        animation-fill-mode: forwards; /* 애니메이션 후 상태 유지 */
      `}  
    
`

export const StyledGraphBox = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 8px 20px 30px 0px rgb(0, 0, 0, 0.04);
    opacity: 0;

    ${(props) =>
      props.animate &&
      css`
        animation: ${animate_tab} 0.6s ease-in-out forwards;
        animation-delay: 0.5s;
        animation-fill-mode: forwards; /* 애니메이션 후 상태 유지 */
      `}  
`

export const StyledGraphKeyword = styled.div`
    background-color: rgb(67,210,255,1);
    text-align: center;
    font-size: 1.1rem;
    color: white;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 8px 20px 30px 0px rgb(0, 0, 0, 0.04);
`

export const StyledRelatedKeyword = styled.div`
  width: 100%;
  font-size: 23px;
  & span {
    font-weight: bold;
  }
`;