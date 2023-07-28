import { Link } from 'react-router-dom';
import style from './Features.module.css';
import { Button } from '../../components/Button/Button';

export function FirstStep() {
    return (
        <div>
            Home first step
            <br />
            <Link className={style.link} to='/SecondStep'><Button text='Continue' /></Link>
        </div>
    );
}