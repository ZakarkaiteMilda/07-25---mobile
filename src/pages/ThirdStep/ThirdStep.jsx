import { Link } from 'react-router-dom';
import style from './ThirdStep.module.css';
import { Button } from '../../components/Button/Button';

export function ThirdStep() {
    return (
        <div>
            THIRDSTEP CONTENT
            <Link className={style.link} to='/CreateAccount'><Button text='Register' /></Link>
        </div>
    );
}