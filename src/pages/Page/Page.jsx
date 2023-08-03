import { Link } from 'react-router-dom';
import style from './Page.module.css';
import { Button } from "../../components/Button/Button";


export function Page() {
    return (
        <div>

            <br />
            <Link className={style.link} to='/'><Button text='Log out' /></Link>
        </div>
    );
}