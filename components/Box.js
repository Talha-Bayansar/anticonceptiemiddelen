import Image from "next/image";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
};
export const Box = function Box({ safetyItem }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: safetyItem,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item.gender === dropResult.name) {
        alert(safetyItem.description);
      } else {
        alert("Fout! Probeer het opnieuw.");
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
      <p>{safetyItem.name}</p>
      <Image
        alt="Voorbehoedsmiddel"
        src={safetyItem.imgUrl}
        height={100}
        width={100}
      />
    </div>
  );
};
