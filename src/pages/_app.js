// import "@/styles/globals.scss";
import { AllCountryContextProvider } from "@/contexts/AllCountryContext";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <AllCountryContextProvider>
      <Component {...pageProps} />
    </AllCountryContextProvider>
  );
}
