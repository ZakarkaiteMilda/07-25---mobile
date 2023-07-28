import { Link } from 'react-router-dom';
import style from './Features.module.css';
import { Button } from '../../components/Button/Button';
import img from '../../assets/img/2-img.jpg';

export function SecondStep() {
    return (
        <div className={style.feature}>
            <img className={style.img} src={img} alt="2 Img feature" />
            <h1 className={style.title}>Choose a waterway</h1>
            <p className={style.description}>We have an offer in various regions of the country</p>
            <br />
            <Link className={style.link} to='/ThirdStep'><Button text='Continue' /></Link>
        </div>
    );
}