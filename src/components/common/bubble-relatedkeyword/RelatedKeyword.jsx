import { useState,useEffect,useRef } from "react";
import Bubble from "../bubble/KeywordBubble";
import NaverNews from "../news/naver-news/Naver.news";
import RelatedKeywordChart from "./Compare.related.keyword";
import { StyledNewsContainer, StyledNewsTab, StyledRelatedKeywordContainer, StyledBubbleContainer, StyledCircleContainer, StyledCircleItem, StyledMiniCircleItem, StyledKeyCircleItem } from "./RelatedKeyword.style";

export default function RelatedKeyword(){
    const scrollRef = useRef(null);

    // !! sample data -> 실제 데이터로 추후 변경해주세요.
    const keyword_sample = '불닭';
    const related_big_keywords_sample = ['맛집','카페','삼양','아이스크림','오랜만','인스타그램'];
    const related_sml_keywords_sample = ['불닭','불닭','불닭','불닭','불닭','불닭'];
    
    //data
    const keyword = keyword_sample;
    const related_big_keywords = related_big_keywords_sample;
    const related_sml_keywords = related_sml_keywords_sample;

    //버블 원형 배치를 위한 코드
    const big_radius = 200; // 반지름
    const sml_radius = 130;
    const angleStep = 360 / related_big_keywords.length;

    //버블 사이즈
    const bubble_size = "170px";
    const mini_bubble_size = "60px"
    const key_bubble_size = "80px"

    
    //Click시 버블 줄이기
    const [clickedbubble, setClickedBubble] = useState(false);
    //Click시 버블 투명도 찐하게
    const [currentbubble, setCurrentBubble] = useState(null);
    //Click시 나머지 버블 투명도 조절
    const [opacity, setOpacity] = useState(null);
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
        } else {
            setCurrentBubble(null);
        }
    }

    return(
        <StyledRelatedKeywordContainer>
            <StyledBubbleContainer>
                <StyledCircleContainer id="circle-container"  move={clickedbubble}>
                    <StyledKeyCircleItem >
                        <Bubble content={keyword} width={key_bubble_size} height={key_bubble_size} fontsize={"1.7rem"} nothover={true}></Bubble>
                    </StyledKeyCircleItem>
                {related_big_keywords.map((item, index) => {
                    const angle = index * angleStep;
                    const radian = (angle * Math.PI) / 180;
                    const x = big_radius * Math.cos(radian);
                    const y = big_radius * Math.sin(radian);
                    
                    return (
                    <StyledCircleItem key={index} move={clickedbubble}
                    x={x} y={y} distance={bubble_size} time={"1.3s"} delay={`${index * 0.5}s`}>
                        <Bubble id={`big-bubble-${index}`} clickfunc={(e) => handleClick(e)}
                        iscurrent={currentbubble===`big-bubble-${index}`}
                        opacity={opacity} content={item} width={bubble_size} height={bubble_size} fontsize={"1.7rem"}></Bubble>
                    </StyledCircleItem>
                    );


                })}
                {related_sml_keywords.map((item, index) => {
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
                <StyledNewsContainer className="NewsContainer">
                    {shownewstab && (
                        <StyledNewsTab animate={clickedbubble}>
                        <NaverNews width={"430px"} Hfontsize={"0.8rem"} Cfontsize={"0.7rem"}></NaverNews>
                        <RelatedKeywordChart ></RelatedKeywordChart>
                        </StyledNewsTab> 
                    )}
                </StyledNewsContainer>                              
            </StyledBubbleContainer>            
        </StyledRelatedKeywordContainer>

    )
}