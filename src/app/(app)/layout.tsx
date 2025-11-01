import type { ReactNode } from "react";
import AppLayout from "@/components/layouts/app-layout";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <AppLayout>{children}</AppLayout>;
};

export default Layout;
