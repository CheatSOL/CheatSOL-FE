import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [tagInfo, setTagInfo] = useState({});

  useEffect(() => {
    async function fetchData(keyword) {
      try {
        const instagramInfo = await getInstagramSocialTrend(keyword);
        if (!instagramInfo) return;
        console.log("instagram", instagramInfo);
        setData(instagramInfo.trendData);
        setTopTags(instagramInfo.topTags);
        setTagInfo(instagramInfo.tagInfo);

        const labels = instagramInfo.trendData.map((item) => item.date);
        const counts = instagramInfo.trendData.map((item) => item.posts);
        const changes = instagramInfo.trendData.map((item, index) => {
          if (index === 0) return 0;
          return item.posts - instagramInfo.trendData[index - 1].posts;
        });
        // Do something with labels, counts, and changes if needed
      } catch (error) {
        console.error("Error fetching Instagram data", error);
      }
    }

    fetchData(keyword);
  }, [keyword]);

  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
    <img src="/assets/images/instagram.png"/>
    <div style={{display:"flex", flexDirection:"column"}}>
        <span>
            97K
        </span>
        <span>
            포스터 수
        </span>
    </div>
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center"}}>
        <span>
            52%
        </span>
        <span>
            상위 비율
        </span>
    
    </div>
    </div>
  );
}
