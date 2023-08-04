import { Box } from "@chakra-ui/layout";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Box marginTop="150px">{children}</Box>
      <Footer />
    </>
  );
};
