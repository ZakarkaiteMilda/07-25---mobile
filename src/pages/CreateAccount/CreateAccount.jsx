import { Link } from 'react-router-dom';
import style from './CreateAccount.module.css';

export function CreateAccount() {
    return (
        <div>
            CREATEACCOUNT CONTENT
            <br />
            <Link className={style.link} to='/TermsService'>ChekBox</Link>
            <br />
            <Link className={style.link} to='/LogIn'>Register</Link>
            <p>or</p>
            <br />
            <Link className={style.link} to='/LogIn'>Log In</Link>
        </div>
    );
}