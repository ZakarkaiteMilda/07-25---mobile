import { Link } from 'react-router-dom';
import style from './Page.module.css';
import { Button } from "../../components/Button/Button";

export function Page() {
    return (
        <div>
            PAGE CONTENT
            <br />
            <Link className={style.link} to='/Burger'><Button text='BurgerIcon' /></Link>
        </div>
    );
}