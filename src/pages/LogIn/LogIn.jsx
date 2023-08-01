import { Link } from 'react-router-dom';
import style from './Login.module.css';
import { Button } from "../../components/Button/Button";

export function LogIn() {
    return (
        <div>
            LOGIN CONTENT
            <br />

            
            <Link className={style.link} to='/Page'><Button text='Log In' /></Link>
            <br />
            <Link className={style.link} to='/Register'><Button text='Register' /></Link>
        </div>
    );
}