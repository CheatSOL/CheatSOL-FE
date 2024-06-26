import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import {
  SliderContainer,
  Slide,
  CenteredSlideWrapper,
  CenteredSlideImage,
  CenteredSlideContent,
  Title,
  Channel,
  CustomArrow,
} from "./YoutubeVideo.style";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ClipLoader } from "react-spinners";

const defaultImage = "/assets/images/bubbleimg.png";
const defaultUrl = "#";
const defaultTitle = "<제목>";
const defaultChannel = "채널";

export default function YoutubeVideo({ keyword }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [centerSlideIndex, setCenterSlideIndex] = useState(1);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/api/youtube', {
          params: { word: keyword }
        });
        
        // 영상 데이터를 가져온 후 thumbnail이나 url이 없는 항목을 기본 데이터로 채움
        let videoData = response.data.slice(0, 5).map(video => {
          const videoRenderer = video.videoRenderer || {};
          const thumbnail = videoRenderer.thumbnail?.thumbnails?.[0]?.url || defaultImage;
          const videoUrl = videoRenderer.inlinePlaybackEndpoint?.commandMetadata?.webCommandMetadata?.url ? 
            `https://www.youtube.com${videoRenderer.inlinePlaybackEndpoint.commandMetadata.webCommandMetadata.url}` : 
            defaultUrl;
          const title = videoRenderer.title?.accessibility?.accessibilityData?.label || defaultTitle;
          const channel = videoRenderer.longBylineText?.runs?.[0]?.text || defaultChannel;

          return {
            videoRenderer: {
              ...videoRenderer,
              thumbnail: { thumbnails: [{ url: thumbnail }] },
              inlinePlaybackEndpoint: {
                commandMetadata: {
                  webCommandMetadata: {
                    url: videoUrl
                  }
                }
              },
              title: {
                accessibility: {
                  accessibilityData: {
                    label: title
                  }
                }
              },
              longBylineText: {
                runs: [{ text: channel }]
              }
            }
          };
        });

        // Ensure we always have 5 items
        while (videoData.length < 5) {
          videoData.push({
            videoRenderer: {
              videoId: `default-${Math.random()}`,
              thumbnail: { thumbnails: [{ url: defaultImage }] },
              inlinePlaybackEndpoint: {
                commandMetadata: {
                  webCommandMetadata: {
                    url: defaultUrl
                  }
                }
              },
              title: {
                accessibility: {
                  accessibilityData: {
                    label: defaultTitle
                  }
                }
              },
              longBylineText: {
                runs: [{ text: defaultChannel }]
              }
            }
          });
        }

        setVideos(videoData);
        console.log('Fetched Videos:', videoData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchVideos();
  }, [keyword]);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    arrows: true,
    prevArrow: <CustomArrow className="slick-prev">Previous</CustomArrow>,
    nextArrow: <CustomArrow className="slick-next">Next</CustomArrow>,
    beforeChange: (current, next) => {
      setCenterSlideIndex((next + 1) % 5);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) return <ClipLoader color="#43d2ff" />;
  if (error || videos.length === 0) 
    return (
      <img
        style={{ marginLeft: "2rem", width: "100%", height: "100%" }}
        src="/assets/images/undefined-error.svg"
      />
    );

  return (
    <SliderContainer>
      <Slider {...settings}>
        {videos.map((videoData, index) => {
          const video = videoData.videoRenderer;
          const videoUrl = video.inlinePlaybackEndpoint?.commandMetadata?.webCommandMetadata?.url ? 
            `https://www.youtube.com${video.inlinePlaybackEndpoint.commandMetadata.webCommandMetadata.url}` : 
            defaultUrl;
          const thumbnail = video.thumbnail?.thumbnails?.[0]?.url || defaultImage;
          const title = video.title?.accessibility?.accessibilityData?.label || defaultTitle;
          const channel = video.longBylineText?.runs?.[0]?.text || defaultChannel;
          const isDefaultImage = thumbnail === defaultImage;
          return (
            <Slide key={video.videoId}>
              <CenteredSlideWrapper>
                <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                  <CenteredSlideImage
                    src={thumbnail}
                    alt="썸네일"
                    isCenter={index === centerSlideIndex}
                    style={isDefaultImage ? { width: '130px', height: '90px' } : {}}
                  />
                </a>
                <CenteredSlideContent isCenter={index === centerSlideIndex}>
                  <Title>{title}</Title>
                  <Channel>| {channel} |</Channel>
                </CenteredSlideContent>
              </CenteredSlideWrapper>
            </Slide>
          );
        })}
      </Slider>
    </SliderContainer>
  );
}
