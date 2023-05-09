import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./themes/default";
import { PublicationContextProvider } from "./contexts/Publication";
import { UserProvider } from "./contexts/User";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <UserProvider>
        <PublicationContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </PublicationContextProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
