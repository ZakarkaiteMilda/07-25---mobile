import { Link } from 'react-router-dom';
import style from './LogIn.module.css';

export function LogIn() {
    return (
        <div>
            LOGIN CONTENT
            <br />
            <Link className={style.link} to='/Page'>Log In</Link>
            <br />
            <Link className={style.link} to='/CreateAccount'>Register</Link>

        </div>
    );
}