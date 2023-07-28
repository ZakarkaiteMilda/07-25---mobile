import { Link } from 'react-router-dom';
import style from './ThirdStep.module.css';

export function ThirdStep() {
    return (
        <div>
            THIRDSTEP CONTENT
            <Link className={style.link} to='/CreateAccount'>Register</Link>
        </div>
    );
}