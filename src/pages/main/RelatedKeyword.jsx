import React from 'react';
import ContentHeader from './contents-item/ContentHeader';
import { relatedKeywordAPI } from "../../lib/apis/RelatedKeyword";
import { StyledCircleContainer, StyledKeyCircleItem, StyledCircleItem, StyledMiniCircleItem } from '../../components/common/bubble-relatedkeyword/RelatedKeyword.style';
import Bubble from '../../components/common/bubble/KeywordBubble';
import { useQuery } from "react-query";
import { StyledMainContentDiv, StyledBubbleContainer } from "./RelatedKeyword.style";
export default function RelatedKeyword({ keyword }) {
    const big_radius = 120; // 반지름
    const sml_radius = 130;
    const angleStep = 360 / 6;
    const key_bubble_size = "90px";
    const bubble_size = "110px";
    const mini_bubble_size = "60px";
    const { data: relatedKeywordData, isLoading: isLoadingKeyword, error: errorKeyword } = useQuery(
        ["relatedkeywordData", keyword],
        () => relatedKeywordAPI({ keyword }),
        {
            staleTime: Infinity,
        }
    );

    if (isLoadingKeyword) return <div>Loading...</div>;
    if (errorKeyword) return <div>Error loading data</div>;

    return (
        <>
            <StyledMainContentDiv>
                <ContentHeader
                    imgUrl="/assets/images/bell.svg"
                    keyword={keyword}
                    description="과 함께 언급되는 단어에요"
                />
                <StyledBubbleContainer>
                    <StyledCircleContainer id="circle-container">
                        <StyledKeyCircleItem>
                            <Bubble content={keyword} width={key_bubble_size} height={key_bubble_size} fontsize={"1.7rem"} nothover={true} />
                        </StyledKeyCircleItem>

                        {relatedKeywordData.data.slice(0, 6).map((item, index) => {
                            const angle = index * angleStep;
                            const radian = (angle * Math.PI) / 180;
                            const x = big_radius * Math.cos(radian);
                            const y = big_radius * Math.sin(radian);

                            return (
                                <StyledCircleItem key={index} x={x} y={y} distance={bubble_size} time={"1.3s"} delay={`${index * 0.5}s`}>
                                    <Bubble 
                                        id={`big-bubble-${index}`} 
                                        content={item.label} 
                                        width={bubble_size} 
                                        height={bubble_size} 
                                        fontsize={"1.7rem"} 
                                    />
                                </StyledCircleItem>
                            );
                        })}
                        {relatedKeywordData.data.slice(6, 12).map((item, index) => {
                            const angle = index * angleStep;
                            const radian = (angle * Math.PI) / 180;
                            const x = sml_radius * Math.cos(radian + Math.PI / 6);
                            const y = sml_radius * Math.sin(radian + Math.PI / 6);

                            return (
                                <StyledMiniCircleItem key={index} x={x} y={y} distance={mini_bubble_size} time={"1s"} delay={`${index * 0.5}s`}>
                                    <Bubble 
                                        id={`sml-bubble-${index}`} 
                                        content={item.label} 
                                        width={mini_bubble_size} 
                                        height={mini_bubble_size} 
                                        fontsize={"1.3rem"} 
                                    />
                                </StyledMiniCircleItem>
                            );
                        })}
                    </StyledCircleContainer>
                </StyledBubbleContainer>
            </StyledMainContentDiv>
        </>
    );
}
