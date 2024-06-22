import React, { useEffect } from "react";
import NormalGraph from "../../graphs/normalGraph/NormalGraph";
export default function NaverGraph() {
  useEffect(() => {
    window.noLoop = false;
    return () => {
      window.noLoop = true;
    };
  }, []);
  return (
    <div style={{ marginTop: "20px", width: "600px", height: "400px" }}>
      <NormalGraph
        data={[50, 30, 20, 10, 50]}
        date={["24.06.01", "24.06.02", "24.06.03", "24.06.04", "24.06.05"]}
        color={[44, 178, 74]}
        lineSpeed={0.1}
        barSpeed={0.1}
      ></NormalGraph>
    </div>
  );
}
