import type { ReactNode } from "react";
import Footer from "./footer";
import NavigationHeader from "./navigation-header";

type Props = {
  children: ReactNode;
};

const AppLayout = async ({ children }: Props) => {
  return (
    <>
      <NavigationHeader />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
