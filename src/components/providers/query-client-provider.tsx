"use client";

import * as TanstackQuery from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";
import { queryConfig } from "@/lib/react-query";

interface Props {
  children: ReactNode;
}

const QueryClientProvider = ({ children }: Props) => {
  const queryClient = new TanstackQuery.QueryClient({
    defaultOptions: queryConfig,
  });
  return (
    <TanstackQuery.QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </TanstackQuery.QueryClientProvider>
  );
};

export default QueryClientProvider;
