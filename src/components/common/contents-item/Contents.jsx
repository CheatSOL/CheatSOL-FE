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
import { formatCurrency } from "../../../lib/utils/utils";

const fetchDailyPrice = async (symbol) => {
  const result = await axios.get("/api/daily-price", {
    params: {
      symbol: symbol,
      period: 'D'
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
      props.currentCompany(allData, props.item.name, props.id, props.item.code);
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
            {formatCurrency(Number(currentData.stck_oprc) + Number(currentData.prdy_vrss))} krw
          </StyledContentsSubTitle>
        </div>
        <StyledContentsMiniTitle isPriceIncrease={isPriceIncrease}>
          <span>
            {isPriceIncrease ? "+" : ""}
            {formatCurrency(currentData.prdy_vrss)}원
          </span>
          <span>({currentData.prdy_ctrt}%) 오늘</span>
          {priceChangeIcon}
        </StyledContentsMiniTitle>
      </StyledContentsTitleGroup>
      <StyledContentsTag>
        <div style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.04)",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "3px",
        }}>
          시가 <span style={{marginLeft:"5px"}}>{currentData.stck_oprc}</span>
        </div>
      </StyledContentsTag>
    </StyledContentsDiv>
  );
}
