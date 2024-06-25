import axios from "axios";

const BASE_URL = "/api/social";

export const getInstagramSocialTrend = async function getInstagramSocialInfo(
  keyword
) {
  try {
    const { data } = await axios.get(`${BASE_URL}/instagram`, {
      params: { word: keyword }, // Use 'params' instead of 'query'
    });
    console.log("data:", data);
    return {
      trendData: data.trendData,
      topTags: data.topTags,
      tagInfo: data.tagInfo,
    };
  } catch (error) {
    console.error("Error fetching Instagram social trend:", error);
  }
};
