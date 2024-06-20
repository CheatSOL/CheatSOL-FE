import React from "react";
import NormalGraph from "../../graphs/normalGraph/NormalGraph";
export default function NaverGraph() {
  return (
    <div>
      <span>
        <strong>"불닭"</strong>이 이만큼 언급됐어요
      </span>
      <div style={{ marginTop: "20px" }}>
        <NormalGraph
          data={[50, 30, 20, 10, 50]}
          date={["24.06.01", "24.06.02", "24.06.03", "24.06.04", "24.06.05"]}
          color={[44, 178, 74]}
          lineSpeed={0.01}
          barSpeed={0.01}
        ></NormalGraph>
      </div>
    </div>
  );
}
