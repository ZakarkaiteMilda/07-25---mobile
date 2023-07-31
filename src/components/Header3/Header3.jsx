import style from './Header3.module.css';
import img from '../../assets/img/logo.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';

export function Header3() {
    return (
            <header>
                 <img className={style.img} src={img} alt="Logo img" />
                 <GiHamburgerMenu className={style.burger}  size='4rem' color='brown'/>
            </header>
    );
}