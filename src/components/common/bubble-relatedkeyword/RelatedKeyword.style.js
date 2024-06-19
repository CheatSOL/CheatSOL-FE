import styled , {keyframes} from "styled-components";

// @keyframes 애니메이션을 별도로 정의
const animate = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-6px);
  }
`;

export const StyledRelatedKeywordContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const StyledBubbleContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const StyledCircleContainer = styled.div`
    position: relative;
    margin: 50px auto;
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
    animation: ${animate} ${(props) => props.time || '2s'} ${(props) => props.delay || 's'} ease-in-out infinite alternate;
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
    animation: ${animate} ${(props) => props.time || '2s'} ${(props) => props.delay || 's'} ease-in-out infinite alternate;
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