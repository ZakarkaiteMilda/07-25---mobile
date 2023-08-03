import style from './Header3.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import img from '../../assets/img/logo.jpg';

import { GiHamburgerMenu } from 'react-icons/gi';
import { CloseIcon } from "../../components/CloseIcon/CloseIcon";

import { TbWritingSignOff, TbBrandProducthunt } from 'react-icons/tb';
import { CiSettings } from 'react-icons/ci';
import { RiAccountCircleLine } from 'react-icons/ri';
import { BsShop, BsCreditCard2Back } from 'react-icons/bs';
import { FiCreditCard, FiBookOpen  } from 'react-icons/fi';
import { GiShop  } from 'react-icons/gi';

export function Header3() {
    const [menuVisibility, setMenuVisibility] = useState(false);

    const menuList1 = [
        {
            type: 'link',
            id: 'm11',
            icon: <BsCreditCard2Back className={style.linkIcon} size='1.5rem' />,
            title: 'Shopping cards',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm12',
            icon: <FiBookOpen className={style.linkIcon} size='1.5rem' />,
            title: 'Product catalog',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm13',
            icon: <GiShop className={style.linkIcon} size='1.5rem' />,
            title: 'Shops',
            url: '/tasks',
        },
        {
            type: 'line',
        },
        {
            type: 'link',
            id: 'm21',
            icon: <FiCreditCard className={style.linkIcon} size='1.5rem' />,
            title: 'New shopping card',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm22',
            icon: <TbBrandProducthunt className={style.linkIcon} size='1.5rem' />,
            title: 'New product',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm23',
            icon: <BsShop className={style.linkIcon} size='1.5rem' />,
            title: 'New shop',
            url: '/tasks',
        },
        {
            type: 'line',
        },
        {
            type: 'link',
            id: 'm31',
            icon: <RiAccountCircleLine  className={style.linkIcon} size='1.5rem' />,
            title: 'Account',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm32',
            icon: <CiSettings className={style.linkIcon} size='1.5rem' />,
            title: 'Settings',
            url: '/tasks',
        },
        {
            type: 'link',
            id: 'm33',
            icon: <TbWritingSignOff className={style.linkIcon} size='1.5rem' />,
            title: 'Sign out',
            url: '/tasks',
        },
    ];

    function updateMenuVisibility() {
        setMenuVisibility(!menuVisibility);
    }

    return (

        <header className={style.header}>
        <img className={style.img} src={img} alt="Logo img" />
        {menuVisibility && (
            <div className={style.menuContent}>
                <Link onClick={updateMenuVisibility} className={style.link} to='/Page'>< CloseIcon /></Link>
                <nav className={style.menu}>
                    {
                        menuList1.map(link => {
                            if (link.type === 'line') {
                                return <hr />;
                            }
                            if (link.type === 'link') {
                                return (
                                    <Link key={link.id} to={link.url}>
                                        {link.icon}{link.title}
                                    </Link>
                                );
                            }

                            return <>ERROR</>;
                        })
                    }
                </nav>
            </div>
        )}
        <GiHamburgerMenu onClick={updateMenuVisibility} className={style.burger}  size='4rem' color='brown'/>
    </header>
    );
}