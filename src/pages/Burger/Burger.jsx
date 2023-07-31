import { Link } from 'react-router-dom';
import style from './Burger.module.css';
import { Button } from "../../components/Button/Button";
import { CloseIcon } from "../../components/CloseIcon/CloseIcon";

import { TbWritingSignOff, TbBrandProducthunt } from 'react-icons/tb';
import { CiSettings } from 'react-icons/ci';
import { RiAccountCircleLine } from 'react-icons/ri';
import { BsShop, BsCreditCard2Back } from 'react-icons/bs';
import { FiCreditCard, FiBook  } from 'react-icons/fi';
import { GiShop  } from 'react-icons/gi';



export function Burger() {
    return (
        <div>
            <Link className={style.link} to='/Page'>< CloseIcon /></Link>

            <div className={style.page}>
                <div className={style.row}>
                    <BsCreditCard2Back className={style.icon}  size='2rem' color='brown'/>
                    <p className={style.title}>Shopping cards</p>    
                </div>
                <div className={style.row}>
                    <FiBook className={style.icon}  size='2rem' color='brown'/>
                    <p className={style.title}>Product catalog</p>    
                </div>
                <div className={style.row}>
                    <GiShop className={style.icon}  size='2rem' color='brown'/>
                    <p className={style.title}>Shops</p>    
                </div>
                <hr className={style.hr}/>
                <div className={style.row}>
                    <FiCreditCard className={style.icon}  size='2rem' color='brown'/>
                    <p className={style.title}>New shopping card</p>    
                </div>
                <div className={style.row}>
                    <TbBrandProducthunt className={style.icon}  size='2rem' color='brown'/>
                    <p className={style.title}>New product</p>    
                </div>
                <div className={style.row}>
                    <BsShop className={style.icon}  size='2rem' color='brown'/>
                    <p className={style.title}>New shop</p>    
                </div>
                <hr className={style.hr}/>
                <div className={style.row}>
                    <RiAccountCircleLine className={style.icon}  size='2rem' color='brown'/>
                    <p className={style.title}>Account</p>    
                </div>
                <div className={style.row}>
                    <CiSettings className={style.icon}  size='2rem' color='brown'/>
                    <p className={style.title}>Settings</p>    
                </div>
                <div className={style.row}>
                    <TbWritingSignOff className={style.icon}  size='2rem' color='brown'/>
                    <p className={style.title}>Sign out</p>    
                </div>
                
            </div>

            <Link className={style.link} to='/'><Button text='Log out' /></Link>
        </div>
    );
}