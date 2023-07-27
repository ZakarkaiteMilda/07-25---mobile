
import style from './Layout3.module.css';
import { Header } from "../../components/Header3/Header3";
import { Outlet } from "react-router-dom";

export function Layout3() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}