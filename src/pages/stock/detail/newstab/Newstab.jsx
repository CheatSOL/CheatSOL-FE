import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { 
  NewsListContainer, 
  NewsItem, 
  NewsImage, 
  NewsDetails, 
  NewsDateOffice, 
  NewsTitle,
  NewsContent,
  StyledLink
} from './Newstab.style';

export default function Newstab({id}) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/stocknews?symbol=${id}`); 
        const flattenedNews = response.data.flat(); 
        setNews(flattenedNews);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };
    fetchData();
  }, []);

  // Function to decode HTML entities (e.g., &quot; to ")
  const decodeHtmlEntities = (html) => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  const formatDateTime = (datetimeString) => {
    try {
      const year = datetimeString.substring(0, 4);
      const month = datetimeString.substring(4, 6);
      const day = datetimeString.substring(6, 8);
      const hour = datetimeString.substring(8, 10);
      const minute = datetimeString.substring(10, 12);
      const date = new Date(`${year}-${month}-${day}T${hour}:${minute}`);
      const monthName = date.toLocaleString('en-US', { month: 'short' });

      return `${monthName} ${day} ${hour}:${minute}`;
    } catch (error) {
      console.error('Error formatting datetime:', error);
      return ''; // Return empty string or handle error as needed
    }
  };
  return (
    <NewsListContainer>
      {news.map((item, key) => (
        <StyledLink key={key} to={`https://n.news.naver.com/article/${item.officeId}/${item.articleId}`}>
          <NewsItem key={key}>
            <NewsImage src={item.imageOriginLink} alt="No image." />
            <NewsDetails>
              <NewsTitle>{decodeHtmlEntities(item.title)}</NewsTitle>
              <NewsContent>{decodeHtmlEntities(item.body)}</NewsContent>
              <NewsDateOffice>{item.officeName}    |    {formatDateTime(item.datetime)} </NewsDateOffice>
            </NewsDetails>
          </NewsItem>
        </StyledLink>
      ))}
    </NewsListContainer>
  );
}
