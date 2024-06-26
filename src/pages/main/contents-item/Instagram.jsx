import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Image, Column, Number, Label } from './Instagram.style';

const BASE_URL = "/api/social";

// Function to fetch Instagram social trend data
export const getInstagramSocialTrend = async function getInstagramSocialInfo(keyword) {
  try {
    const { data } = await axios.get(`${BASE_URL}/instagram`, {
      params: { word: keyword }, // Use 'params' to pass query parameters
    });
    console.log("data:", data);
    return {
      trendData: data.trendData,
      topTags: data.topTags,
      tagInfo: data.tagInfo,
    };
  } catch (error) {
    console.error("Error fetching Instagram social trend:", error);
    return null;
  }
};

export default function Instagram({ keyword }) {
  const [data, setData] = useState([]);
  const [topTags, setTopTags] = useState([]);
  const [tagInfo, setTagInfo] = useState([]);

  useEffect(() => {
    async function fetchData(keyword) {
      try {
        const instagramInfo = await getInstagramSocialTrend(keyword);
        if (!instagramInfo) return;
        console.log("instagram", instagramInfo);
        setData(instagramInfo.trendData);
        setTopTags(instagramInfo.topTags);
        setTagInfo(instagramInfo.tagInfo);
      } catch (error) {
        console.error("Error fetching Instagram data", error);
      }
    }

    fetchData(keyword);
  }, [keyword]);

  return (
    <Container>
      <Image src="/assets/images/instagram.png" alt="Instagram" />
      <Column>
        <Number>{tagInfo[0]}</Number>
        <Label>포스터 수</Label>
      </Column>
      <Column>
        <Number>{tagInfo[1]}</Number>
        <Label>상위 비율</Label>
      </Column>
    </Container>
  );
}
