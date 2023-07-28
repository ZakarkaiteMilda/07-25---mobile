import { Skip } from "../Skip/Skip";
import style from './Header.module.css';

export function Header() {
    return (
            <header>
                <Skip />
                <img className={style.img} src="" alt="" />
            </header>
    );
}