import React from 'react'
import {Link} from "react-router-dom";
import {FiPhone} from 'react-icons/fi'
import {TbTruckDelivery} from 'react-icons/tb'

const HeaderTop = () => {
    return (
        <div className="header__top">
                <div className="header__top-menu">
                    <Link to={'/'} className="header__top-link">Главная</Link>
                    <Link to={'/about'} className="header__top-link">О нас</Link>
                    <Link to={'/catalog'} className="header__top-link">Каталог</Link>
                </div>
                <div className="header__top-menu">
                    <a href='tel:8 (964) 89 99 119' className="header__top-tel">
                        <span><FiPhone/></span>
                        8 (964) 89 99 119</a>
                    <a href="#" className="header__top-del">
                        <span><TbTruckDelivery/></span>
                        Доставка</a>
                </div>
        </div>
    );
};

export default HeaderTop;