
import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";

export function Layout2() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}