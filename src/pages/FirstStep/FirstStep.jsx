import { Link } from 'react-router-dom';
import style from './FirstStep.module.css';

export function FirstStep() {
    return (
        <div>
            Home first step
            <br />
            <Link className={style.link} to='/SecondStep'>Continue</Link>
        </div>
    );
}