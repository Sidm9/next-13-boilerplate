"use client";

import { useAppSelector } from "@/lib/redux/hooks";
import { darkThemeWeb, lightThemeWeb } from "@/styled/theme";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";

const StyleProvider = (props: React.PropsWithChildren) => {
  const theme = useAppSelector((store) => store.theme.value);

  useEffect(() => {
    if (theme === "DARK") {
      document.body.style.backgroundColor = "black"
    } else {
      document.body.style.backgroundColor = "white"
    }
  }, [theme])
  
  return (
    <ThemeProvider
      theme={theme === "DARK" ? darkThemeWeb : lightThemeWeb}
    >
      {props.children}
    </ThemeProvider>
  );
};
export default StyleProvider;
