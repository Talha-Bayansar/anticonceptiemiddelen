import Image from "next/image";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import { useMediaQuery } from "react-responsive";

const style = {
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
};

export const DropArea = ({ label, imgUrl, name }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: name }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  return (
    <div
      ref={drop}
      style={{
        ...style,
        height: isTabletOrMobile ? "16rem" : "30rem",
        width: isTabletOrMobile ? "16rem" : "30rem",
      }}
      data-testid="dustbin"
    >
      <p style={{ color: "black" }}>
        {isActive ? "Loslaten om te gebruiken" : label}
      </p>
      <Image
        src={imgUrl}
        alt="Menselijk lichaam"
        layout="responsive"
        width={500}
        height={500}
      />
    </div>
  );
};
