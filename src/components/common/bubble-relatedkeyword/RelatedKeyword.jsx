import { useState,useRef,useEffect } from "react";
import Bubble from "../bubble/KeywordBubble";
import NaverNews from "../news/naver-news/Naver.news";
import RelatedKeywordChart from "./RelatedKeyword.chart";
import { StyledHeadTitleBox, StyledTitleBox, StyledRelatedKeyword, StyledGraphBox, StyledNaverbox, StyledNewsContainer, StyledNewsTab, StyledRelatedKeywordContainer, StyledBubbleContainer, StyledCircleContainer, StyledCircleItem, StyledMiniCircleItem, StyledKeyCircleItem, StyledGraphKeyword } from "./RelatedKeyword.style";
import sns from "~/images/sns_mark.png"
import { relatedKeywordAPI, relatedNewsAPI } from "~/apis/RelatedKeyword.js"
import { useQuery } from "react-query";

export default function RelatedKeyword() {
    const scrollRef = useRef(null);

    const params1 = {
        keyword:"HBM",
    };   
        
  // !! sample data -> 실제 데이터로 추후 변경해주세요.
  const keyword_sample = "불닭";
  const related_big_keywords_sample = [
    "맛집",
    "카페",
    "삼양",
    "아이스크림",
    "오랜만",
    "인스타그램",
  ];
  const related_sml_keywords_sample = [
    "불닭",
    "불닭",
    "불닭",
    "불닭",
    "불닭",
    "불닭",
  ];

  //data
  const keyword = params1.keyword;

  //버블 원형 배치를 위한 코드
  const big_radius = 200; // 반지름
  const sml_radius = 130;
  const angleStep = 360 / 6;

  //버블 사이즈
  const bubble_size = "170px";
  const mini_bubble_size = "60px";
  const key_bubble_size = "80px";

    //Click한 키워드명
     const [currentword,setCurrentword] = useState(null);
    //Click시 버블 줄이기
    const [clickedbubble, setClickedBubble] = useState(false);
    //Click시 버블 투명도 찐하게
    const [currentbubble, setCurrentBubble] = useState(null);
    //Click시 나머지 버블 투명도 조절
    const [opacity, setOpacity] = useState("0.5");
    const [miniopacity, setMiniOpacity] = useState(null);
    //Click시 그래프&뉴스탭 보이기
    const [shownewstab, setShowNewsTab] = useState(false);
    //Click하면 수행되는 함수
    const handleClick = (e) => {
        setClickedBubble(true);
        setShowNewsTab(true); 
        setOpacity("0.3");        

        if (currentbubble !== e.target.id) {
            setCurrentBubble(e.target.id);
            setCurrentword(e.target.innerText);

        } else {
            setCurrentBubble(null);
        }
    }

    const handleMiniClick = (e) => {
        setClickedBubble(true);
        setShowNewsTab(true); 
        setOpacity("0.3");
        if (currentbubble !== e.target.id) {
            setCurrentBubble(e.target.id);
            setCurrentword(e.target.innerText);
        } else {
            setCurrentBubble(null);
        }
        
    }


    // !! googletrends sample data => 추후 api 요청해서 받아오는 걸로 변경
    const keyword_data = [
        [
          '2024-04-20', '2024-04-21', '2024-04-22', '2024-04-23',
          '2024-04-24', '2024-04-25', '2024-04-26', '2024-04-27',
          '2024-04-28', '2024-04-29', '2024-04-30', '2024-05-01',
          '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05',
          '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09',
          '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13',
          '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17',
          '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21',
          '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25',
          '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29',
          '2024-05-30', '2024-05-31', '2024-06-01', '2024-06-02',
          '2024-06-03', '2024-06-04', '2024-06-05', '2024-06-06',
          '2024-06-07', '2024-06-08', '2024-06-09', '2024-06-10',
          '2024-06-11', '2024-06-12', '2024-06-13', '2024-06-14',
          '2024-06-15', '2024-06-16', '2024-06-17', '2024-06-18',
          '2024-06-19', '2024-06-20'
        ],
        [
           56, 54, 67, 71, 67, 65, 61, 64, 62, 72, 62, 60,
           65, 68, 66, 78, 68, 69, 61, 63, 67, 74, 76, 74,
          100, 87, 70, 85, 87, 84, 96, 81, 64, 77, 75, 77,
           79, 66, 68, 60, 71, 64, 77, 70, 87, 71, 76, 68,
           75, 72, 76, 75, 72, 78, 76, 74, 87, 78, 82, 80,
           73, 32
        ]
      ]

      const relatedkeyword_data = [
        [
          '2024-04-20', '2024-04-21', '2024-04-22', '2024-04-23',
          '2024-04-24', '2024-04-25', '2024-04-26', '2024-04-27',
          '2024-04-28', '2024-04-29', '2024-04-30', '2024-05-01',
          '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05',
          '2024-05-06', '2024-05-07', '2024-05-08', '2024-05-09',
          '2024-05-10', '2024-05-11', '2024-05-12', '2024-05-13',
          '2024-05-14', '2024-05-15', '2024-05-16', '2024-05-17',
          '2024-05-18', '2024-05-19', '2024-05-20', '2024-05-21',
          '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25',
          '2024-05-26', '2024-05-27', '2024-05-28', '2024-05-29',
          '2024-05-30', '2024-05-31', '2024-06-01', '2024-06-02',
          '2024-06-03', '2024-06-04', '2024-06-05', '2024-06-06',
          '2024-06-07', '2024-06-08', '2024-06-09', '2024-06-10',
          '2024-06-11', '2024-06-12', '2024-06-13', '2024-06-14',
          '2024-06-15', '2024-06-16', '2024-06-17', '2024-06-18',
          '2024-06-19', '2024-06-20'
        ],
        [
          81,  85, 70, 71, 70, 75, 76, 74, 75, 76, 76, 78,
          68,  73, 84, 89, 75, 72, 61, 72, 74, 82, 79, 73,
          76,  78, 71, 76, 70, 69, 79, 85, 66, 69, 72, 70,
          80,  68, 71, 72, 63, 74, 76, 66, 70, 76, 72, 79,
          74,  81, 79, 74, 78, 63, 69, 69, 80, 78, 72, 74,
          74, 100
        ]
      ]

      
    const params2 = {        
        keyword: params1.keyword,
        exWord: currentword,
    };

    const { data: relatedKeywordData, isLoading: isLoadingKeyword, error: errorKeyword } = useQuery(
    "relatedkeywordData",
    () => relatedKeywordAPI(params1),
    {
        staleTime: Infinity,            
    }        
    );

    const { data: relatedNewsData, isLoading: isLoadingNews, error: errorNews } = useQuery(
        "relatednewsData",
        () => relatedNewsAPI(params2),
        {
            staleTime: Infinity,
            enabled: !!currentword // Only run the query if relatedNewsParams is set
        }
    );

    if (isLoadingKeyword || isLoadingNews) {
        return <div>Loading related keywords...</div>;
    }

    if (errorKeyword || errorNews) {
        return <div>Error loading related keywords: {errorKeyword.message}</div>;
    }
    
    else return(
        <StyledRelatedKeywordContainer>  
        <StyledHeadTitleBox className="related-text-box" animate={clickedbubble}>
                            <img src={sns} width={"50px"} height={"auto"}></img>                                 
                                <span>{keyword}과 같이 언급되는 단어들이에요. </span>
            </StyledHeadTitleBox>                      
            <StyledBubbleContainer>
            
                <StyledCircleContainer id="circle-container"  move={clickedbubble}>
                    <StyledKeyCircleItem >
                        <Bubble content={keyword} width={key_bubble_size} height={key_bubble_size} fontsize={"1.7rem"} nothover={true}></Bubble>
                    </StyledKeyCircleItem>
                    
                {relatedKeywordData.data.slice(0,6).map((item, index) => {
                    const angle = index * angleStep;
                    const radian = (angle * Math.PI) / 180;
                    const x = big_radius * Math.cos(radian);
                    const y = big_radius * Math.sin(radian);
                    
                    return (
                    <StyledCircleItem key={index} move={clickedbubble}
                    x={x} y={y} distance={bubble_size} time={"1.3s"} delay={`${index * 0.5}s`}>
                        <Bubble id={`big-bubble-${index}`} clickfunc={(e) => handleClick(e)}
                        iscurrent={currentbubble===`big-bubble-${index}`}
                        opacity={opacity} content={item.label} width={bubble_size} height={bubble_size} fontsize={"1.7rem"}></Bubble>
                    </StyledCircleItem>
                    );


                })}
                {related_sml_keywords_sample.map((item, index) => {
                    const angle = index * angleStep;
                    const radian = (angle * Math.PI) / 180;
                    const x = sml_radius * Math.cos(radian+Math.PI/6);
                    const y = sml_radius * Math.sin(radian+Math.PI/6);
                    
                    return (                        
                    <StyledMiniCircleItem key={index}
                     x={x} y={y} distance={mini_bubble_size} time={"1s"} delay={`${index * 0.5}s`}>
                        <Bubble id={`sml-bubble-${index}`} clickfunc={(e) => handleMiniClick(e)}
                        iscurrent={currentbubble===`sml-bubble-${index}`}
                        opacity={opacity} content={item} width={mini_bubble_size} height={mini_bubble_size} fontsize={"1.3rem"}></Bubble>
                    </StyledMiniCircleItem>
                    );
                })}        
                </StyledCircleContainer>
                                             
            </StyledBubbleContainer>   
            <StyledNewsContainer className="NewsContainer">

                    {shownewstab && (

                        <StyledNewsTab >
                            <StyledTitleBox className="related-text-box" animate={clickedbubble}>
                            <img src={sns} width={"50px"} height={"auto"}></img>                                 
                                <span>{keyword}과 {currentword}의 검색량을 비교해보세요. </span>
                            </StyledTitleBox>
                                <StyledGraphBox animate={clickedbubble}>                                
                                <RelatedKeywordChart data1={keyword_data} data2={relatedkeyword_data}></RelatedKeywordChart>
                             </StyledGraphBox>
                        <StyledNaverbox animate={clickedbubble}>
                                <StyledGraphKeyword>
                                <span>연관 기사들{relatedNewsData.data.length}</span>                           
                                </StyledGraphKeyword>   
                            <NaverNews data={relatedNewsData} width={"680px"} Hfontsize={"0.8rem"} Cfontsize={"0.7rem"}></NaverNews>
                        </StyledNaverbox>
                        </StyledNewsTab> 
                    )}
                </StyledNewsContainer>          
        </StyledRelatedKeywordContainer>

  );
}