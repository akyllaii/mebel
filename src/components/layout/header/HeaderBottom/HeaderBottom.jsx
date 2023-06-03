import React from 'react';
import {Link} from 'react-router-dom'
import {GiChickenOven} from 'react-icons/gi'
import {GiPersonInBed} from 'react-icons/gi'
import {MdChildCare} from 'react-icons/md'
import {ImOffice} from 'react-icons/im'
import {BsBookshelf} from 'react-icons/bs'
import {MdMeetingRoom} from 'react-icons/md'
import {CiMenuKebab} from 'react-icons/ci'

const HeaderBottom = () => {
    return (
        <nav className="header__bottom">
            <Link to='/' className="header__bottom-item">
                <span><GiChickenOven/></span>
                Кухни</Link>
            <Link to='/' className="header__bottom-item">
                <span><GiPersonInBed/></span>
                Спальни</Link>
            <Link to='/' className="header__bottom-item">
                <span><MdMeetingRoom/></span>
                Гостинные</Link>
            <Link to='/' className="header__bottom-item">
                <span><BsBookshelf/></span>
                Прихожие</Link>
            <Link to='/' className="header__bottom-item">
                <span><ImOffice/></span>
                Офисная мебель</Link>
            <Link to='/' className="header__bottom-item">
                <span><MdChildCare/></span>
                Детская</Link>
            <Link to='/' className="header__bottom-item">Акция</Link>
            <Link to='/' className="header__bottom-item">
                <span><CiMenuKebab/></span>
            </Link>
        </nav>
    );
};

export default HeaderBottom;