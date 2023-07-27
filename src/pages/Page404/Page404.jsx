import { Link } from 'react-router-dom';
import style from './Page404.module.css';
import Img404 from '../../assets/img/img404.png';

export function Page404() {
    return (
        <div className={style.Page404}>
            <img className={style.Img404} src={Img404} alt="404 Img" />
            <h1>404</h1>
            <p>Page not found</p>
            <Link className={style.link} to='/' >Go Home</Link>
        </div>
    );
}