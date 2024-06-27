import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Image, Column, Number, Label } from "./Instagram.style";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";

const BASE_URL = "/api/social";

// Function to fetch Instagram social trend data
export const getInstagramSocialTrend = async function getInstagramSocialInfo(
  keyword
) {
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const darkMode = useSelector((state) => state.theme.darkMode);
  useEffect(() => {
    async function fetchData(keyword) {
      try {
        const instagramInfo = await getInstagramSocialTrend(keyword);
        if (!instagramInfo) return;
        console.log("instagram", instagramInfo);
        setData(instagramInfo.trendData);
        setTopTags(instagramInfo.topTags);
        setTagInfo(instagramInfo.tagInfo);

        setLoading(false);
      } catch (error) {
        setError(true);
        console.error("Error fetching Instagram data", error);
      }
    }

    fetchData(keyword);
  }, [keyword]);

  if (loading) return <ClipLoader color="#43d2ff"></ClipLoader>;
  if (
    !loading &&
    (error ||
      data === undefined ||
      topTags === undefined ||
      tagInfo === undefined)
  )
    return darkMode ? (
      <img
        style={{ marginLeft: "2rem", width: "100%", height: "100%" }}
        src="/assets/images/undefined-error-darkmode.svg"
      />
    ) : (
      <img
        style={{ marginLeft: "2rem", width: "100%", height: "100%" }}
        src="/assets/images/undefined-error.svg"
      />
    );

  return (
    <Container>
      <Image src="/assets/images/instagram.png" alt="Instagram" />
      <Column>
        <Number>
          {!error &&
            data !== undefined &&
            topTags !== undefined &&
            tagInfo !== undefined &&
            tagInfo[0]}
        </Number>
        <Label darkMode={darkMode}>포스터 수</Label>
      </Column>
      <Column>
        <Number>
          {!error &&
            data !== undefined &&
            topTags !== undefined &&
            tagInfo !== undefined &&
            tagInfo[1]}
        </Number>
        <Label darkMode={darkMode}>상위 비율</Label>
      </Column>
    </Container>
  );
}
