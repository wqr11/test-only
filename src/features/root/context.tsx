import { createContext, useContext } from "react";

export const RootPageContext = createContext<{
  page: number;
  setPage: (x: number) => unknown;
}>({
  page: 0,
  setPage: () => undefined,
});

export const useRootPageContext = () => useContext(RootPageContext);
