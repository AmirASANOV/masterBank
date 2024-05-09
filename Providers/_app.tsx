import { Provider } from "react-redux";

import "../styles/globals.css";
import { store } from "@/ReduxStore";
import ProviderWrapper from "./Provider";
import ConfigProvider from "./ConfigProvider/ConfigProvider";
import Application from "@/app/App";

function MyApp({ Component, pageProps }: any) {
  return (
    <ProviderWrapper state={store}>
      <ConfigProvider>
        <Component {...pageProps} />
        <Application />
      </ConfigProvider>
    </ProviderWrapper>
  );
}

export default MyApp;
