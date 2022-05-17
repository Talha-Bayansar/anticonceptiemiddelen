import Head from "next/head";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "../components";
import { TouchBackend } from "react-dnd-touch-backend";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      <Head>
        <title>Anticonceptiemiddelen</title>
        <meta
          name="description"
          content="Website om te leren over anticonceptiemiddelen."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DndProvider backend={isTabletOrMobile ? TouchBackend : HTML5Backend}>
        <Container />
      </DndProvider>
    </div>
  );
}
