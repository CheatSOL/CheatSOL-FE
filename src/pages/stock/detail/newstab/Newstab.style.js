import styled from "styled-components";
import {Link} from 'react-router-dom';
export const NewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top:20px;
`;

export const NewsItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #ddd;
`;

export const NewsImage = styled.img`
  width: 103px;
  min-width:103px;
  height: 75px;
  object-fit: cover;
  margin-left:10px;
  border-radius: 5px;
  margin-bottom:10px;

`;

export const NewsDetails = styled.div`
  display: flex;
  margin-left:20px;
  flex-direction: column;
`;

export const NewsTitle = styled.h2`
  font-size: 16px;
  margin: 0;
`;

export const NewsDateOffice = styled.div`
  margin-top:5px;
  font-size: 13px;
  color: #9FA4A6;

`;

export const NewsContent=styled.div`
    font-size:14px;
    color:#555;
`

export const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit; 
  &:hover {
    text-decoration: none; 
    color:#43D2FF;
    opacity: 0.8; 
  }
`;
