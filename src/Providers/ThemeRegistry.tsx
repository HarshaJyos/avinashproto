//providers/themeregistry.tsx
"use client";
import React, { ReactNode, useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
import createEmotionCache from "../lib/emotionCache";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#3f51b5" },
    secondary: { main: "#f50057" },
  },
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const cache = React.useMemo(() => createEmotionCache(), []);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{ 
        __html: isMounted ? Object.values(cache.inserted).join(" ") : "" 
      }}
    />
  ));

  if (!isMounted) return null;

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}