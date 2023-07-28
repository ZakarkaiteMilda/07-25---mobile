import { Link } from 'react-router-dom';
import style from './Burger.module.css';

export function Burger() {
    return (
        <div>
            BURGER CONTENT
            <br />
            <Link className={style.link} to='/Page'>CloseIcon</Link>
            <br />
            <Link className={style.link} to='/'>Log out</Link>
        </div>
    );
}