import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout = ({ children }: any) => {
  const [height, setHeight] = useState<any>();
  console.log("height", height);
  return (
    <>
      <Header onHeightChange={(h: any) => setHeight(h)} height={height} />
      <Box
        style={{ transition: "margin-top 1s" }}
        marginTop={{
          base: height ? `${height + 10}px` : "110px",
          lg: "150px",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};
