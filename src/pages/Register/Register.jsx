import { Link } from 'react-router-dom';
import style from './Register.module.css';
import { Button } from "../../components/Button/Button";

export function Register() {
    return (
        <div>
                <div>
                    <label>
                        <input type="checkbox" />
                        <Link className={style.link} to='/TermsService'>Agree to our TOS (read)</Link>
                    </label>
                </div>

            <Link className={style.link} to='/TermsService'><Button text='ChekBox' /></Link>
            <Link className={style.link} to='/LogIn'><Button text='Register' /></Link>
            <p>or</p>
            <Link className={style.link} to='/LogIn'><Button text='Log In' /></Link>
        </div>
    );
}