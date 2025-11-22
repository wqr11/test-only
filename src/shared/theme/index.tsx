import { PropsWithChildren } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";

export const theme = {
  iris: "#5d5fef",
  fuschia: "#ef5da8",
  blue: "#3877ee",
  blackBlue: "#42567a",
  gray: "#42567A",
} as const;

export type Theme = typeof theme;

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>;
};
