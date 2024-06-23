import NaverNews from "../news/naver-news/Naver.news";
import { relatedNewsAPI } from "~/apis/RelatedKeyword.js"
import { useQuery } from "react-query";
import { StyledNewsDiv,
    StyledNewsKeyword,
    StyledNewsItemDiv,
    StyledNewsItemHeaderDiv,
    StyledNewsItemPatentDiv,
    StyledNewsItemContentDiv } from "../news/naver-news/Naver.style";
import { StyledBlurDiv } from "../news/naver-news/Naver.style";
import Skeleton from 'react-loading-skeleton';

function timeAgo(dateString) {
    const now = new Date();
  
    // Parsing date string "YYYYMMDDHHMMSS" into a Date object
    const year = parseInt(dateString.slice(0, 4), 10);
    const month = parseInt(dateString.slice(4, 6), 10) - 1; // Month is zero-based
    const day = parseInt(dateString.slice(6, 8), 10);
    const hour = parseInt(dateString.slice(8, 10), 10);
    const minute = parseInt(dateString.slice(10, 12), 10);
    const second = parseInt(dateString.slice(12, 14), 10);
  
    // console.log(`${year}-${month}-${day}`);
  
    const articleDate = new Date(year, month, day, hour, minute, second);
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
  const highlightColor = "#ff6347";
  
  function highlightedText(text, highlights) {
    let highlighted = text;
    highlights.forEach((highlight) => {
      highlighted = highlighted
        .split(highlight)
        .join(`<span style="color: ${highlightColor}">${highlight}</span>`);
    });
    return <div dangerouslySetInnerHTML={{ __html: highlighted }} />;
  }


export default function RelatedNews(props) {
    const { data: relatedNewsData, isLoading: isLoadingNews, error: errorNews } = useQuery(
      ["relatednewsData", props.params2],
        () => relatedNewsAPI(props.params2),
        {
            staleTime: Infinity,
        }
    );

    // if (isLoadingNews) {
    //     return null;
    // }

    if (errorNews) {
        return <div>Error loading related news: {errorNews.message}</div>;
    }

    else return (
        
    // <NaverNews data={relatedNewsData} width={"680px"} Hfontsize={"0.8rem"} Cfontsize={"0.7rem"}></NaverNews>
    <StyledNewsDiv backgroundcol={props.backgroundcol} width={"680px"} height={props.height}>

        <StyledNewsItemPatentDiv isscroll={props.isscroll} >
        
        {relatedNewsData
          ? 
          relatedNewsData.data.map((e, index) => (
            <StyledNewsItemDiv key={index} Hfontsize={"0.8rem"}>
            <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <StyledNewsItemHeaderDiv>
                <img src="/assets/images/blog.png" />
                <span>{e.writer}</span> | <span>{timeAgo(e.documentDate)}</span>
                </StyledNewsItemHeaderDiv>
                <div>{e.title}</div>
                <StyledNewsItemContentDiv Cfontsize={"0.7rem"}>
                {highlightedText(e.maxSentence, e.highlight)}
                </StyledNewsItemContentDiv>
            </a>
            </StyledNewsItemDiv>
        ))
          :           
          Array.from({ length: 5 }).map((e,i) => (
            <StyledNewsItemDiv key={i}>
                <Skeleton
                  width={580}
                  height={50}
                  style={{ margin: "0.8rem", padding: "10px", 
                    borderRadius: "10px"}}
                />
            </StyledNewsItemDiv>))        
          }          
        </StyledNewsItemPatentDiv>
        <StyledBlurDiv></StyledBlurDiv>
    </StyledNewsDiv>
    )
}