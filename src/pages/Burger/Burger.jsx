import { Link } from 'react-router-dom';
import style from './Burger.module.css';
import { Button } from "../../components/Button/Button";

export function Burger() {
    return (
        <div>
            BURGER CONTENT
            <br />
            <Link className={style.link} to='/Page'><Button text='CloseIcon' /></Link>
            <br />
            <Link className={style.link} to='/'><Button text='Log out' /></Link>
        </div>
    );
}