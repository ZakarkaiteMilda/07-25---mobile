import { Link } from 'react-router-dom';
import style from './Home.module.css';
import logo from '../../assets/img/logo.jpg';

export function Home() {
    return (
        <div className={style.home}>
            <img className={style.logo} src={logo} alt="Img logo" />
            <h1>KAYAK shopping platform</h1>
            <Link className={style.link} to='/' >Get started</Link>
        </div>
    );
}