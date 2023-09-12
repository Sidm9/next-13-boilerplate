"use client";

// style registry
import StyledComponentsRegistry from "./registery";

// style-components theme
import { persistor, store } from "@/lib/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import StyleProvider from "./StyleProvider";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledComponentsRegistry>
          <StyleProvider>{props.children}</StyleProvider>
        </StyledComponentsRegistry>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
