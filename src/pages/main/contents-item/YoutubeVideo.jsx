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

export default function YoutubeVideo({ keyword }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [centerSlideIndex, setCenterSlideIndex] = useState(1);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/api/youtube', {
          params: { word: keyword}
        });
        const videoData = response.data.slice(0, 5);
        setVideos(videoData);
        console.log(videos);
        console.log('Fetched Videos:', videoData);
        
        if (videoData.length > 0) {
          console.log('Video ID:', videoData[0].videoRenderer.videoId);
          console.log('URL:', `https://www.youtube.com${videoData[0].videoRenderer.inlinePlaybackEndpoint.commandMetadata.webCommandMetadata.url}`);
          console.log('Thumbnail:', videoData[0].videoRenderer.thumbnail.thumbnails[0].url);
          console.log('Title:', videoData[0].videoRenderer.title.accessibility.accessibilityData.label);
          console.log('Channel:', videoData[0].videoRenderer.longBylineText.runs[0].text);
        }
  
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

  if (loading) return <ClipLoader color="#43d2ff"></ClipLoader>;
  if (!loading && (error || videos.length !== 0))
    return (
      <img
        style={{ marginLeft: "2rem", width: "100%", height: "100%" }}
        src="/assets/images/undefined-error.svg"
      />
    );

  return (
    <SliderContainer>
      <Slider {...settings}
        {videos.map((video, index) => (
          <Slide key={video.videoRenderer.videoId}>
            
              <CenteredSlideWrapper>
              <a href={`https://www.youtube.com${video.videoRenderer.inlinePlaybackEndpoint.commandMetadata.webCommandMetadata.url}`} target="_blank" rel="noopener noreferrer">
                <CenteredSlideImage
                  src={video.videoRenderer.thumbnail.thumbnails[0].url}
                  alt="썸네일"
                  isCenter={index === centerSlideIndex}
                />
              </a>
                <CenteredSlideContent isCenter={index === centerSlideIndex}>

                    <Title>{video.videoRenderer.title.accessibility.accessibilityData.label}</Title>
                    <Channel>| {video.videoRenderer.longBylineText.runs[0].text} |</Channel>

                </CenteredSlideContent>
              </CenteredSlideWrapper>
            </Slide>
          ))}
      </Slider>
    </SliderContainer>
  );
}
