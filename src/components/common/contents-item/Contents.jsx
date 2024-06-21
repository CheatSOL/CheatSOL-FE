import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

import {
  StyledContentsDiv,
  StyledContentsTitle,
  StyledContentsTitleGroup,
  StyledContentsSubTitle,
  StyledContentsMiniTitle,
  StyledContentsTag,
} from "./Contents.style";

const fetchDailyPrice = async (symbol) => {
  const result = await axios.get("/api/daily-price", {
    params: {
      symbol: symbol,
    },
  });
  return result.data;
};

export default function Contents(props) {
  const { data, isLoading, error } = useQuery(
    ["dailyPrice", props.item.code],
    () => fetchDailyPrice(props.item.code),
    {
      refetchInterval: 10000,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const allData = data;
  const currentData = data.output[0];
  const isPriceIncrease = currentData.prdy_vrss_sign === "2";
  const priceChangeIcon = isPriceIncrease ? (
    <img src="/assets/images/up-icon.png" alt="Increase" />
  ) : (
    <img src="/assets/images/down-icon.png" alt="Decrease" />
  );

  const onClickItem = (e) => {
    if (!isLoading) {
      props.currentCompany(allData, props.item.name, props.id);
    }
  };

  return (
    <StyledContentsDiv
      width={props.width}
      height={props.height}
      isCheck={props.curCompanyId === props.id}
      onClick={onClickItem}
    >
      <StyledContentsTitleGroup>
        <div>
          <StyledContentsTitle>{props.item.name}</StyledContentsTitle>
          <StyledContentsSubTitle>
            {Number(currentData.stck_oprc) + Number(currentData.prdy_vrss)} krw
          </StyledContentsSubTitle>
        </div>
        <StyledContentsMiniTitle isPriceIncrease={isPriceIncrease}>
          <p>
            {isPriceIncrease ? "+" : ""}
            {currentData.prdy_vrss}원
          </p>
          <p>({currentData.prdy_ctrt}%) 오늘</p>
          {priceChangeIcon}
        </StyledContentsMiniTitle>
      </StyledContentsTitleGroup>
      <StyledContentsTag>
        <div className="price-box">
          시가 <p>{currentData.stck_oprc}</p>
        </div>
      </StyledContentsTag>
    </StyledContentsDiv>
  );
}
