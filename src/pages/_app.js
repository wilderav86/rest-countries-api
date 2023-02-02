// import "@/styles/globals.scss";

import { ThemeContextProvider } from "@/contexts/themeContext";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}
