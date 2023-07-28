import { Link } from 'react-router-dom';
import style from './Features.module.css';
import { Button } from '../../components/Button/Button';
import img from '../../assets/img/3-img.jpg';

export function ThirdStep() {
    return (
        <div className={style.feature}>
            <img className={style.img} src={img} alt="3 Img feature" />
            <h1 className={style.title}>And go kayaking</h1>
            <p className={style.description}>Many unique adventures await you!</p>
            <Link className={style.link} to='/CreateAccount'><Button text='Register' /></Link>
        </div>
    );
}