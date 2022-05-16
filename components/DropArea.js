import Image from "next/image";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
const style = {
  height: "30rem",
  width: "30rem",
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
