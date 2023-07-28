import { Link } from 'react-router-dom';
import style from './Page.module.css';

export function Page() {
    return (
        <div>
            PAGE CONTENT
            <br />
            <Link className={style.link} to='/Burger'>BurgerIcon</Link>
        </div>
    );
}