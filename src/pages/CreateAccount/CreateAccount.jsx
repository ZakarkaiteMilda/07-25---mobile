import { Link } from 'react-router-dom';
import style from './CreateAccount.module.css';
import { Button } from "../../components/Button/Button";

export function CreateAccount() {
    return (
        <div>
            CREATEACCOUNT CONTENT
            <br />
            <Link className={style.link} to='/TermsService'><Button text='ChekBox' /></Link>
            <br />
            <Link className={style.link} to='/LogIn'><Button text='Register' /></Link>
            <p>or</p>
            <br />
            <Link className={style.link} to='/LogIn'><Button text='Log In' /></Link>
        </div>
    );
}