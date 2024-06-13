import styled from "styled-components";

export const StyledContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "377px"};
  height: ${(props) => props.height || "196px"};
  padding: 30px;
  
  border: 1px solid #D3D3D3;
  border-radius: 50px;
  background-color: white;
`;

// TitleGroup
export const StyledContentsTitleGroup =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  font-weight: 800;
  font-size: 1.5rem;
`
// Title & SubTitle & MiniTitle
export const StyledContentsTitle =styled.div`
`
export const StyledContentsSubTitle =styled.div`
`
export const StyledContentsMiniTitle =styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;

  & p{
    font-size: 0.9rem !important;
    font-weight: 500;
    color: orangered;
  }

  & img{
    height: 10px;
  }
`

// Tag
export const StyledContentsTag =styled.div`
  display: flex;
  gap: 10px;
  font-size: 0.7rem !important;
  margin-top: 10px;

  & .price-box{
    display: flex;
    gap: 5px;
    padding: 5px;
    background-color: rgb(211,211,211,0.3);
    border: 1px solid rgb(211,211,211,0.3);
    border-radius: 8px;
  }

  & p{
    color: orangered;
  }
`
