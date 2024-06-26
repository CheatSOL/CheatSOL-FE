import React, { useEffect } from "react";
import { StyledNewsKeyword } from "./Youtube.data.style";
import {
  StyledNewsDiv,
  StyledImageDiv,
  StyledNewsItemParentDiv,
  StyledNewsItemDiv,
  StyledNewsItemHeaderDiv,
  StyledVideoDiv,
  StyledContentsDiv,
} from "./Youtube.data.style";
import { timeAgo } from "~/utils/utils";
import { StyledBlurDiv } from "./Youtube.data.style";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { decode } from "html-entities";

const fetchYoutubeData = async (keyword, props) => {
  props.setLoadError(false);
  const result = await axios.get("/api/news/youtube", {
    params: {
      keyword: keyword,
    },
  });
  return result.data.slice(0, 20);
};
export default function YoutubeData(props) {
  const keyword = useSelector((state) => state.keyword.keyword);
  const {
    data = [],
    error,
    isLoading,
  } = useQuery(
    ["youtubeData", keyword],
    () => fetchYoutubeData(keyword, props),
    {
      enabled: !!keyword,
      staleTime: Infinity,
      retry: false,
    }
  );

  useEffect(() => {
    if (!isLoading && data.length === 0) {
      props.setLoadError(true);
    } else props.setLoadError(false);
  }, [isLoading, data, props.loadError]);

  return (
    <StyledNewsDiv className="Youtube-Box">
      <StyledNewsKeyword>
        <span>{`"${keyword}"`}</span>이 이렇게 언급됐어요
      </StyledNewsKeyword>
      <StyledNewsItemParentDiv>
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
                href={e.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledNewsItemDiv key={index}>
                  <StyledVideoDiv>
                    <StyledNewsItemHeaderDiv>
                      <span>{e.channel}</span> |
                      <span>{timeAgo(e.pubDate)}</span>
                    </StyledNewsItemHeaderDiv>
                    <div className="youtube-title">{decode(e.title)}</div>
                  </StyledVideoDiv>
                  <StyledImageDiv>
                    <img src={e.thumbnail_url}></img>
                  </StyledImageDiv>
                </StyledNewsItemDiv>
              </a>
            ))}
          </>
        )}

        <StyledBlurDiv></StyledBlurDiv>
      </StyledNewsItemParentDiv>
    </StyledNewsDiv>
  );
}
