import { memo } from "react";
import { Box } from "./Box.js";
import { DropArea } from "./DropArea.js";
export const Container = memo(function Container() {
  const data = [
    {
      name: "Condoom (mannelijk)",
      imgUrl: "/condom.svg",
      gender: "male",
      description:
        "De betrouwbaarheid van een condoom als anticonceptiemiddel is sterk afhankelijk van het juiste gebruik. Bij juist gebruik is de kans op een zwangerschap tussen de 2 en 5%. De kans dat een SOA wordt overgedragen is klein.",
    },
    {
      name: "Vrouwelijke condoom",
      imgUrl: "/female-condom.svg",
      gender: "female",
      description:
        "Het vrouwencondoom ziet eruit als een zakje met twee buigzame ringen van rubber aan de uiteindes en wordt in de vagina geplaatst. Het voorbehoedmiddel vangt sperma op en beschermt zo tegen zowel zwangerschap als soa's. Bij juist gebruik is een vrouwencondoom voor 98% betrouwbaar.",
    },
    {
      name: "Anticonceptiepil",
      imgUrl: "/pill.svg",
      gender: "female",
      description:
        "De pil beschermt niet tegen seksueel overdraagbare aandoeningen (soa's). Gebruik dus ook een condoom als je met een nieuwe partner vrijt. Doe een soa-test bij je huisarts voor je zonder condoom vrijt. De eenfasepil is 99,5 tot 99,9% betrouwbaar.",
    },
    {
      name: "Spiraal",
      imgUrl: "/intrauterine.svg",
      gender: "female",
      description:
        "Het hormoonspiraaltje is zeer betrouwbaar. De kans op zwangerschap is ongeveer 0.2%.",
    },
  ];
  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <DropArea
            name="male"
            label="Sleep een mannelijke anticonceptiemiddel"
            imgUrl="/male-body.svg"
          />
        </div>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <DropArea
            name="female"
            label="Sleep een vrouwelijke anticonceptiemiddel"
            imgUrl="/female-body.svg"
          />
        </div>
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
