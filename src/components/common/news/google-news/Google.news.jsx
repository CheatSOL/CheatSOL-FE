import React from "react";
import {
  StyledNewsDiv,
  StyledNewsKeyword,
  StyledNewsItemDiv,
  StyledNewsItemHeaderDiv,
  StyledNewsItemPatentDiv,
} from "./Google.style";

function timeAgo(dateString) {
  const now = new Date();
  const articleDate = new Date(dateString);
  const differenceInMilliseconds = now - articleDate;
  const differenceInHours = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60)
  );

  if (differenceInHours < 24) {
    return `${differenceInHours}시간 전`;
  } else {
    const differenceInDays = Math.floor(differenceInHours / 24);
    return `${differenceInDays}일 전`;
  }
}

const data = [
  {
    title: `[자막뉴스] "급성 중독 위험"…덴마크서 'K-불닭' 폐기 권고한 이유 - SBS 뉴스`,
    link: "https://news.google.com/rss/articles/CBMiOmh0dHBzOi8vbmV3cy5zYnMuY28ua3IvbmV3cy9lbmRQYWdlLmRvP25ld3NfaWQ9TjEwMDc2ODIzMzHSATdodHRwczovL25ld3Muc2JzLmNvLmtyL2FtcC9uZXdzLmFtcD9uZXdzX2lkPU4xMDA3NjgyMzMx?oc=5",
    pubDate: "Thu, 13 Jun 2024 04:54:00 GMT",
    source: "SBS 뉴스",
  },
  {
    title: "덴마크서 '핵불닭볶음면' 리콜… 이유 두고 갑론을박 - 헬스조선",
    link: "https://news.google.com/rss/articles/CBMiQ2h0dHBzOi8vbS5oZWFsdGguY2hvc3VuLmNvbS9zdmMvbmV3c192aWV3Lmh0bWw_Y29udGlkPTIwMjQwNjEzMDE1MjHSAQA?oc=5",
    pubDate: "Thu, 13 Jun 2024 04:50:00 GMT",
    source: "헬스조선",
  },
  {
    title: '"8만전자 찍나"…상위 1% 투자자 삼성전자 집중 매수 - 한국경제',
    link: "https://news.google.com/rss/articles/CBMiLmh0dHBzOi8vd3d3Lmhhbmt5dW5nLmNvbS9hcnRpY2xlLzIwMjQwNjEzMzM0NWnSASpodHRwczovL3d3dy5oYW5reXVuZy5jb20vYW1wLzIwMjQwNjEzMzM0NWk?oc=5",
    pubDate: "Thu, 13 Jun 2024 02:08:43 GMT",
    source: "한국경제",
  },
  {
    title: "잠실·삼성·대치·청담 일대 다시 거래제한 묶였다 - 머니S",
    link: "https://news.google.com/rss/articles/CBMiNGh0dHBzOi8vd3d3Lm1vbmV5cy5jby5rci9hcnRpY2xlLzIwMjQwNjEzMTEwNjExNTc0ODjSAQA?oc=5",
    pubDate: "Thu, 13 Jun 2024 02:07:42 GMT",
    source: "머니S",
  },
  {
    title:
      "삼성디스플레이, 미니(MINI) 신차 5종에 9.4형 원형 OLED 공급 - 비즈니스포스트",
    link: "https://news.google.com/rss/articles/CBMiQWh0dHBzOi8vd3d3LmJ1c2luZXNzcG9zdC5jby5rci9CUD9jb21tYW5kPWFydGljbGVfdmlldyZudW09MzU1MzU10gEA?oc=5",
    pubDate: "Thu, 13 Jun 2024 01:53:40 GMT",
    source: "비즈니스포스트",
  },
  {
    title: '"삼성전자 2030년 RE100 달성하면 14조원 절감한다" - 뉴스트리',
    link: "https://news.google.com/rss/articles/CBMiMGh0dHBzOi8vd3d3Lm5ld3N0cmVlLmtyL25ld3NWaWV3L250cjIwMjQwNjEzMDAwMdIBAA?oc=5",
    pubDate: "Thu, 13 Jun 2024 01:52:00 GMT",
    source: "뉴스트리",
  },
  {
    title:
      '그린피스 "국내 기업 2030년 RE100 달성 편익 커, 삼성전자 14조 원 아껴" - 비즈니스포스트',
    link: "https://news.google.com/rss/articles/CBMiQGh0dHBzOi8vd3d3LmJ1c2luZXNzcG9zdC5jby5rci9CUD9jb21tYW5kPW1vYmlsZV92aWV3Jm51bT0zNTUzNTTSAQA?oc=5",
    pubDate: "Thu, 13 Jun 2024 01:46:01 GMT",
    source: "비즈니스포스트",
  },
];

export default function GoogleNews() {
  return (
    <StyledNewsDiv>
      <StyledNewsKeyword>
        <span>"불닭"</span>이 이렇게 언급됐어요
      </StyledNewsKeyword>
      <StyledNewsItemPatentDiv>
        {data.map((e, index) => (
          <StyledNewsItemDiv key={index}>
            <StyledNewsItemHeaderDiv>
              <span>{e.source}</span> |<span>{timeAgo(e.pubDate)}</span>
            </StyledNewsItemHeaderDiv>
            <div>{e.title}</div>
          </StyledNewsItemDiv>
        ))}
      </StyledNewsItemPatentDiv>
    </StyledNewsDiv>
  );
}
