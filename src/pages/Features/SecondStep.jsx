import { Link } from 'react-router-dom';
import style from './Features.module.css';
import { Button } from '../../components/Button/Button';

export function SecondStep() {
    return (
        <div>
            SECONDSTEP CONTENT
            <Link className={style.link} to='/ThirdStep'><Button text='Continue' /></Link>
        </div>
    );
}