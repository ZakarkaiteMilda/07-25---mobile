
import style from './Layout2.module.css';
import { Header2 } from "../../components/Header2/Header2";
import { Outlet } from "react-router-dom";

export function Layout2() {
    return (
        <>
            <Header2 />
            <Outlet />
        </>
    );
}
