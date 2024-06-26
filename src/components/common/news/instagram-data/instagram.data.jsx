import React, { useEffect } from "react";
import { StyledNewsKeyword } from "./instagram.data.style";
import { StyledNewsDiv } from "./instagram.data.style";
import {
  StyledNewsItemParentDiv,
  StyledNewsItemDiv,
  StyledImageDiv,
  StyledNewsItemHeaderDiv,
} from "./instagram.data.style";
import { weekTimeAgo } from "~/utils/utils";
import insta from "~/images/instagram.png";
import { StyledBlurDiv } from "./instagram.data.style";
import InstagramIndexes from "../../keywordGraph/instagramGraph/InstagramIndexes";
import { useSelector } from "react-redux";
export default function InstagramData({ tagInfo }) {
  const keyword = useSelector((state) => state.keyword.keyword);
  const darkMode = useSelector((state) => state.theme.darkMode);
  //!! 샘플 데이터입니다.
  useEffect(() => {
    console.log(tagInfo);
  }, []);
  const insta_sample_data = [
    {
      caption:
        "라이스페이퍼 어디까지 먹어봤뉘?? #불닭쌈 쫜득쫜득 쌀종이+핵매운 불닭조합‼️ ",
      hashtag:
        "#불닭쌈 #불닭볶음면요리 #불닭볶음면 #불닭 #라면요리 #리틀식탁 #요리유튜브 #맵부심 #매콤 #라면 #요리레시피 #인싸요리",
      likeN: 12916,
      commentN: 282,
      pubDate: "2022-04-14T06:35:45.000Z",
      channel: "수빈 먹스타ʕ￫ᴥ￩ʔ",
      thumbnail_url: null,
      url: "https://www.instagram.com/p/CcUlW3iLM98",
    },
    {
      caption:
        "요즘 유행하고 있다는 핵인싸 레시피 총정리🧡 집콕하면서 만들기 딱 좋음! @@우리 요깄는거 다 만드러보쟈~ ( ´͈ ॢꇴ `͈ॢ)･*♡",
      hashtag:
        "#다이어트식단 #다이어트스타그램 #레시피공유 #간단한요리 #자취생요리 #집밥레시피 #나혼자산다 #그릭모모 #묵은지참치김밥 #컵누들 #충김볶 #편스토랑",
      likeN: 10658,
      commentN: 727,
      pubDate: "2022-04-04T03:00:31.000Z",
      channel: "꿀언니🍯",
      thumbnail_url: null,
      url: "https://www.instagram.com/p/Cb6cxtVLn82",
    },
    {
      caption:
        "🍜라면 꿀조합 레시피 9 ⠀ 그냥 먹어도 맛있는 라면! 섞어 먹거나 새로운 음식과 함께 먹으면  더 맛있는 데요. 여기 SNS에서 맛있다고 소문",
      hashtag:
        "#라면 #라면꿀조합 #라면레시피 #레시피추천 #오빠게티 #순두부열라면 #불닭볶으면 #불닭 #골빔면 #불닭장칼국수 #신라면투움바 #불닭리조또",
      likeN: 7062,
      commentN: 197,
      pubDate: "2023-01-01T02:00:59.000Z",
      channel: "쿠캣코리아",
      thumbnail_url:
        "https://mediance.s3.ap-northeast-2.amazonaws.com/media/instagram/post/thumbnail/3005792912671700753/instagram-post-3005792912671700753.jpg",
      url: "https://www.instagram.com/p/Cm2uLqMLvcR",
    },
  ];

  const data = insta_sample_data;

  return (
    <StyledNewsDiv>
      <StyledNewsKeyword darkMode={darkMode}>
        <span>"{keyword}"</span>이 이렇게 언급됐어요
      </StyledNewsKeyword>
      <InstagramIndexes tagInfo={tagInfo}></InstagramIndexes>
      <StyledNewsItemParentDiv>
        {data.map((e, index) => (
          <>
            <StyledNewsItemDiv key={index} darkMode={darkMode}>
              <section>
                <StyledNewsItemHeaderDiv darkMode={darkMode}>
                  <img src={insta}></img>
                  <div className="insta-title">
                    <span>{e.channel}</span> |
                    <span>{weekTimeAgo(e.pubDate)}</span>
                  </div>
                </StyledNewsItemHeaderDiv>
                <a
                  href={e.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p
                    style={{ color: darkMode ? "white" : "rgba(0, 0, 0, 0.7)" }}
                  >
                    {e.caption}...
                  </p>
                  <p
                    id="hashtags"
                    style={{ color: darkMode ? "white" : "rgba(0, 0, 0, 0.7)" }}
                  >
                    {e.hashtag}...
                  </p>
                </a>
              </section>
              <StyledImageDiv>
                {e.thumbnail_url && (
                  <img src={e.thumbnail_url} alt="Thumbnail" />
                )}
              </StyledImageDiv>
            </StyledNewsItemDiv>
          </>
        ))}
      </StyledNewsItemParentDiv>
      <StyledBlurDiv darkMode={darkMode} />
    </StyledNewsDiv>
  );
}
