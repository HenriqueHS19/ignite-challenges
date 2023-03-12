import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "./context/Cart";
import { FinishedPurchaseProvider } from "./context/FinishedPurchase";

import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CartContextProvider>
                <FinishedPurchaseProvider>
                    <BrowserRouter>
                        <Router />
                    </BrowserRouter>
                </FinishedPurchaseProvider>
            </CartContextProvider>

            <GlobalStyle />
        </ThemeProvider>
    )
}
