import React from "react";
import {
    StyledNewsDiv,
    StyledNewsKeyword,
    StyledNewsItemDiv,
  } from "../google-news/Google.style"; 
import {
    StyledImageDiv,
    StyledNewsItemParentDiv,
} from "./Youtube.data.style"

export default function YoutubeData() {
    const youtube_sample_data = [
        {
          title: `ASMR MUKBANG  SPICY OCTOPUS 🐙 MUSHROOM FIRE NOODLE SEAFOOD`,
          url: "https://www.youtube.com/watch?v=UxOe-w4lXQs",
          thumbnail_url : "https://img.youtube.com/vi/UxOe-w4lXQs/0.jpg"
        },
        {
          title: "🔥 AI는 불닭쌈 맛있다고 추천합니다. / 쫄깃하고 매콤한 불닭쌈 만들어 먹기 / 먹방 mukbang #몬스터맘TV #몬스터맘",
          url: "https://www.youtube.com/watch?v=nV3YFzKOXNE_Y29udGlkPTIwMjQwNjEzMDE1MjHSAQA?oc=5",
          thumbnail_url : "https://img.youtube.com/vi/nV3YFzKOXNE/0.jpg"
        },
        {
        title: "불닭쌈🔥 다이어트식으로 요리해서 먹방!#2 베이컨 + 고구마 불닭쌈 FIRE NOODLE WARPS + DIET BACON #shorts REAL MUKBANG ASMR",
        url: "https://www.youtube.com/watch?v=qOsV-lvJitk",
        thumbnail_url : "https://img.youtube.com/vi/qOsV-lvJitk/0.jpg"
        },
        {
        title: `ASMR MUKBANG  SPICY OCTOPUS 🐙 MUSHROOM FIRE NOODLE SEAFOOD`,
        url: "https://www.youtube.com/watch?v=UxOe-w4lXQs",
        thumbnail_url : "https://img.youtube.com/vi/UxOe-w4lXQs/0.jpg"
        },
        {
        title: "🔥 AI는 불닭쌈 맛있다고 추천합니다. / 쫄깃하고 매콤한 불닭쌈 만들어 먹기 / 먹방 mukbang #몬스터맘TV #몬스터맘",
        url: "https://www.youtube.com/watch?v=nV3YFzKOXNE_Y29udGlkPTIwMjQwNjEzMDE1MjHSAQA?oc=5",
        thumbnail_url : "https://img.youtube.com/vi/nV3YFzKOXNE/0.jpg"
        },
        {
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
                <div className="youtube-title">{e.title}</div>
                <StyledImageDiv>
                    <img src={e.thumbnail_url}></img>
                </StyledImageDiv>
            </StyledNewsItemDiv>
            ))}
        </StyledNewsItemParentDiv>
      </StyledNewsDiv>
    )
}