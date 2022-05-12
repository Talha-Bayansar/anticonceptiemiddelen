import { memo } from "react";
import { Box } from "./Box.js";
import { Dustbin } from "./Dustbin.js";
export const Container = memo(function Container() {
  const data = [
    {
      name: "Condoom",
      imgUrl: "/condom.svg",
      safetyPercentage: 95,
    },
    {
      name: "Tampon",
      imgUrl: "/tampon.svg",
      safetyPercentage: 85,
    },
  ];
  return (
    <div className="container">
      <div style={{ overflow: "hidden", clear: "both" }}>
        <Dustbin />
      </div>
      <div
        style={{
          overflow: "hidden",
          clear: "both",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data.map((item, i) => (
          <Box key={i} safetyItem={item} />
        ))}
      </div>
    </div>
  );
});
