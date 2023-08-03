import { Box } from "@chakra-ui/layout";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Box marginTop="100px">{children}</Box>
      <Footer />
    </>
  );
};
