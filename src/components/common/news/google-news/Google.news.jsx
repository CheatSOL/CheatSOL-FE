import React from "react";
import {
  StyledNewsDiv,
  StyledNewsKeyword,
  StyledNewsItemDiv,
  StyledNewsItemHeaderDiv,
  StyledNewsItemPatentDiv,
  StyledBlurDiv,
  StyledContentsDiv,
} from "./Google.style";
import axios from "axios";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";

function timeAgo(dateString) {
  const now = new Date();
  const articleDate = new Date(dateString);
  const differenceInMilliseconds = now - articleDate;
  const differenceInMinutes = Math.floor(
    differenceInMilliseconds / (1000 * 60)
  );

  if (differenceInMinutes < 1) {
    return "방금";
  } else if (differenceInMinutes < 60) {
    return `${differenceInMinutes}분 전`;
  } else {
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    if (differenceInHours < 24) {
      return `${differenceInHours}시간 전`;
    } else {
      const differenceInDays = Math.floor(differenceInHours / 24);
      return `${differenceInDays}일 전`;
    }
  }
}

const fetchGoogleNews = async (keyword) => {
  const result = await axios.get("/api/news/google", {
    params: {
      keyword: keyword,
    },
  });
  return result.data.slice(0, 20);
};

export default function GoogleNews() {
  const keyword = useSelector((state) => state.keyword.keyword);

  const {
    data = [],
    error,
    isLoading,
  } = useQuery(["googleNews", keyword], () => fetchGoogleNews(keyword), {
    enabled: !!keyword,
    staleTime: Infinity,
  });

  if (error) {
    return <div>Error fetching Google news</div>;
  }

  return (
    <StyledNewsDiv>
      <StyledNewsKeyword>
        <span>{`"${keyword}"`}</span>이 이렇게 언급됐어요
      </StyledNewsKeyword>
      <StyledNewsItemPatentDiv>
        {isLoading || !data ? (
          Array.from({ length: 20 }).map((_, index) => (
            <StyledContentsDiv key={index}>
              <Skeleton height={20} />
              <Skeleton height={15} />
              <Skeleton height={15} width="75%" />
            </StyledContentsDiv>
          ))
        ) : (
          <>
            {data.map((e, index) => (
              <a
                href={e.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
                key={index}
              >
                <StyledNewsItemDiv>
                  <StyledNewsItemHeaderDiv>
                    <span>{e.source}</span> | <span>{timeAgo(e.pubDate)}</span>
                  </StyledNewsItemHeaderDiv>
                  <div>{e.title}</div>
                </StyledNewsItemDiv>
              </a>
            ))}
          </>
        )}
      </StyledNewsItemPatentDiv>
      <StyledBlurDiv></StyledBlurDiv>
    </StyledNewsDiv>
  );
}
