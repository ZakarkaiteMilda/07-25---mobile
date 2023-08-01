import { Link } from 'react-router-dom';
import style from './Page404.module.css';
import Img404 from '../../assets/img/img404.png';
import { Button } from "../../components/Button/Button";

export function Page404() {
    return (
        <div className={style.Page404}>
            <img className={style.Img404} src={Img404} alt="404 Img" />
            <p className={style.title}>Page not found</p>
            <Link className={style.link} to='/FirstStep'><Button text='Go home' /></Link>
        </div>
    );
}