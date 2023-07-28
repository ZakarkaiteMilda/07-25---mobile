import { Link } from 'react-router-dom';
import style from './SecondStep.module.css';

export function SecondStep() {
    return (
        <div>
            SECONDSTEP CONTENT
            <Link className={style.link} to='/ThirdStep'>Continue</Link>
        </div>
    );
}