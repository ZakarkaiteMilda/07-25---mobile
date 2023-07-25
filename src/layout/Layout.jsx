import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Main />
        </>
    );
}