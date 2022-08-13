import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/store";
import ThemeManager from "./components/managers/themeManager/ThemeManager";
import AppRouter from "./routers/AppRouter";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/medabots-app">
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
