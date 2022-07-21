import Amplify from "aws-amplify";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/store";
import currentConfig from "./aws/AmplifyConfig";
import ThemeManager from "./components/managers/themeManager/ThemeManager";
import AppRouter from "./routers/AppRouter";

Amplify.configure(currentConfig);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/react">
          <ThemeManager>
            <SnackbarProvider>
              <AppRouter />
            </SnackbarProvider>
          </ThemeManager>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
