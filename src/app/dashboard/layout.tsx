import type { ReactNode } from "react";
import DashboardLayout from "@/components/layouts/dashboard-layout";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
