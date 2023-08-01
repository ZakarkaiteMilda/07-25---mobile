import { Link } from 'react-router-dom';
import style from './TermsService.module.css';
import { Button } from "../../components/Button/Button";

export function TermsService() {
    return (
        <div>
            TERMSSERVICE CONTENT
            <br />
            <Link className={style.link} to='/Register'><Button text='Back' /></Link>
        </div>
    );
}