import React from "react";
import {
    StyledNewsKeyword,
  } from "../google-news/Google.style"; 
import {
    StyledNewsDiv,
    StyledImageDiv,
    StyledNewsItemParentDiv,
    StyledNewsItemDiv,
    StyledNewsItemHeaderDiv,
    StyledVideoDiv
} from "./Youtube.data.style"

export default function YoutubeData() {

    // 영상 날짜 timeAgo 정제 함수 (ex. '4시간 전', '3일 전', '2주 전', '2개월 전', '1년 전')
    function timeAgo(dateString) {
        const now = new Date();
        const articleDate = new Date(dateString);
        const differenceInMilliseconds = now - articleDate;
        
        const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
        const differenceInMinutes = Math.floor(differenceInSeconds / 60);
        const differenceInHours = Math.floor(differenceInMinutes / 60);
        const differenceInDays = Math.floor(differenceInHours / 24);
        const differenceInWeeks = Math.floor(differenceInDays / 7);
        const differenceInMonths = Math.floor(differenceInDays / 30);
        const differenceInYears = Math.floor(differenceInDays / 365);
    
        switch (true) {
        case (differenceInYears > 0):
            return `${differenceInYears}년 전`;
        case (differenceInMonths > 0):
            return `${differenceInMonths}개월 전`;
        case (differenceInWeeks > 0):
            return `${differenceInWeeks}주 전`;
        case (differenceInDays > 0):
            return `${differenceInDays}일 전`;
        case (differenceInHours > 0):
            return `${differenceInHours}시간 전`;
        default:
            return '방금 전';
        }
    }

    //!! 샘플 데이터입니다.
    const youtube_sample_data = [
        {
        pubDate : "2024-06-12T10:45:02Z",
        channel : "남편요리_Husband'sCooking",
          title: `ASMR MUKBANG  SPICY OCTOPUS 🐙 MUSHROOM FIRE NOODLE SEAFOOD`,
          url: "https://www.youtube.com/watch?v=UxOe-w4lXQs",
          thumbnail_url : "https://img.youtube.com/vi/UxOe-w4lXQs/0.jpg"
        },
        {
        pubDate : "2024-03-13T07:00:10Z",
        channel : "FOOD MUKBANG",
          title: "🔥 AI는 불닭쌈 맛있다고 추천합니다. / 쫄깃하고 매콤한 불닭쌈 만들어 먹기 / 먹방 mukbang #몬스터맘TV #몬스터맘",
          url: "https://www.youtube.com/watch?v=nV3YFzKOXNE_Y29udGlkPTIwMjQwNjEzMDE1MjHSAQA?oc=5",
          thumbnail_url : "https://img.youtube.com/vi/nV3YFzKOXNE/0.jpg"
        },
        {
        pubDate : "2022-06-10T12:15:07Z",
        channel : "제리얌 Jelly Yum shorts",
        title: "불닭쌈🔥 다이어트식으로 요리해서 먹방!#2 베이컨 + 고구마 불닭쌈 FIRE NOODLE WARPS + DIET BACON #shorts REAL MUKBANG ASMR",
        url: "https://www.youtube.com/watch?v=qOsV-lvJitk",
        thumbnail_url : "https://img.youtube.com/vi/qOsV-lvJitk/0.jpg"
        },
        {
        pubDate : "2021-08-29T13:17:00Z",
        channel : "남편요리_Husband'sCooking",
        title: `ASMR MUKBANG  SPICY OCTOPUS 🐙 MUSHROOM FIRE NOODLE SEAFOOD`,
        url: "https://www.youtube.com/watch?v=UxOe-w4lXQs",
        thumbnail_url : "https://img.youtube.com/vi/UxOe-w4lXQs/0.jpg"
        },
        {
        pubDate : "2024-03-13T07:00:10Z",
        channel : "FOOD MUKBANG",
        title: "🔥 AI는 불닭쌈 맛있다고 추천합니다. / 쫄깃하고 매콤한 불닭쌈 만들어 먹기 / 먹방 mukbang #몬스터맘TV #몬스터맘",
        url: "https://www.youtube.com/watch?v=nV3YFzKOXNE_Y29udGlkPTIwMjQwNjEzMDE1MjHSAQA?oc=5",
        thumbnail_url : "https://img.youtube.com/vi/nV3YFzKOXNE/0.jpg"
        },
        {
        pubDate : "2022-06-10T12:15:07Z",
        channel : "제리얌 Jelly Yum shorts",
            title: "불닭쌈🔥 다이어트식으로 요리해서 먹방!#2 베이컨 + 고구마 불닭쌈 FIRE NOODLE WARPS + DIET BACON #shorts REAL MUKBANG ASMR",
            url: "https://www.youtube.com/watch?v=qOsV-lvJitk",
            thumbnail_url : "https://img.youtube.com/vi/qOsV-lvJitk/0.jpg"
        },        
    ]
    const youtube_data = youtube_sample_data;
    
  
    
    return (
        <StyledNewsDiv className="Youtube-Box">
            <StyledNewsKeyword>
            <span>"불닭"</span>이 이렇게 언급됐어요
            </StyledNewsKeyword>
        <StyledNewsItemParentDiv >
            {youtube_data.map((e, index) => (
            <StyledNewsItemDiv key={index}>
                <StyledVideoDiv>
                <StyledNewsItemHeaderDiv>
                <span>{e.channel}</span> |<span>{timeAgo(e.pubDate)}</span>
                </StyledNewsItemHeaderDiv>
                <div className="youtube-title">{e.title}</div>
                </StyledVideoDiv>
                <StyledImageDiv>
                    <img src={e.thumbnail_url}></img>
                </StyledImageDiv>
            </StyledNewsItemDiv>
            ))}
        </StyledNewsItemParentDiv>
      </StyledNewsDiv>
    )
}