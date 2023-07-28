import { Link } from 'react-router-dom';
import style from './TermsService.module.css';

export function TermsService() {
    return (
        <div>
            TERMSSERVICE CONTENT
            <br />
            <Link className={style.link} to='/CreateAccount'>Back</Link>
        </div>
    );
}