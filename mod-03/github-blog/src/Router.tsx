import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Publication } from "./pages/Publication";
import { Login } from "./pages/Login";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/publication" element={<Publication />} />
            </Route>
        </Routes>
    );
}