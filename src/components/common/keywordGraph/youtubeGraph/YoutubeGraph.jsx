import React, { useEffect } from "react";
import NormalGraph from "../../graphs/normalGraph/NormalGraph";
export default function YoutubeGraph() {
  useEffect(() => {
    window.noLoop = false;
    return () => {
      window.noLoop = true;
    };
  }, []);
  return (
    <div style={{ marginTop: "20px" }}>
      <NormalGraph
        data={[50, 30, 20, 10, 50]}
        date={["24.06.01", "24.06.02", "24.06.03", "24.06.04", "24.06.05"]}
        color={[255, 0, 0]}
      ></NormalGraph>
    </div>
  );
}
