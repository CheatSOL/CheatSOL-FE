import React from "react";

const InstagramIndex = ({ index, info, isFirst, isLast }) => {
  return (
    <div
      style={{
        width: "50%",
        height: "80px",
        justifyContent: "center",
        boxSizing: "content-box",
        borderLeft: !isFirst ? "none" : "1px solid black",
        borderRight: "1px solid black",
        alignContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "bold",
          background: "linear-gradient(to right, #FF049A, #2F0DFF)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {index}
      </div>
      <div style={{ textAlign: "center", fontSize: "14px", marginTop: "5px" }}>
        {info}
      </div>
    </div>
  );
};

export default function InstagramIndexes() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "10px",
      }}
    >
      <InstagramIndex index="75.2K" info="포스트 수" isFirst />
      <InstagramIndex index="37%" info="상위 비율" isLast />
    </div>
  );
}
