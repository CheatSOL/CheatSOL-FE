import React from "react";
import NormalGraph from "../../graphs/normalGraph/NormalGraph";
export default function GoogleGraph() {
  return (
    <div>
      <span>
        <strong>"불닭"</strong>이 이만큼 언급됐어요
      </span>

      <div style={{ marginTop: "20px" }}>
        <NormalGraph
          data={[50, 30, 20, 10, 50]}
          date={["24.06.01", "24.06.02", "24.06.03", "24.06.04", "24.06.05"]}
          color={[66, 133, 244]}
          lineSpeed={0.05}
          barSpeed={0.05}
        ></NormalGraph>
      </div>
    </div>
  );
}
