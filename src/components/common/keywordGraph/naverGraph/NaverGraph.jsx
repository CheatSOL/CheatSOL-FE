import React, { useEffect } from "react";
import NormalGraph from "../../graphs/normalGraph/NormalGraph";
export default function NaverGraph(props) {
  /* const count = props.data.keywordData.map((e = e.ratio)); */
  const count = props.data.map((e) => e.ratio);
  const date = props.data.map((e) => e.period);
  useEffect(() => {
    window.noLoop = false;
    return () => {
      window.noLoop = true;
    };
  }, []);
  return (
    <div style={{ marginTop: "20px" }}>
      <NormalGraph
        data={[...count]}
        date={[...date]}
        color={[44, 178, 74]}
        lineSpeed={0.1}
        barSpeed={0.1}
      ></NormalGraph>
    </div>
  );
}
