import { Link } from 'react-router-dom';
import style from './Features.module.css';
import { Button } from '../../components/Button/Button';
import img from '../../assets/img/1-img.jpg';

export function FirstStep() {
    return (
        <div className={style.feature}>
            <img className={style.img} src={img} alt="1 Img feature" />
            <h1 className={style.title}>Find a kayak</h1>
            <p className={style.description}>You can choose from several types of kayaks</p>
            <br />
            <Link className={style.link} to='/SecondStep'><Button text='Continue' /></Link>
        </div>
    );
}