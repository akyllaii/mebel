import React from 'react';
import {Link} from 'react-router-dom'
import {FiPhone} from 'react-icons/fi'
import {SlSocialInstagram} from 'react-icons/sl'
import {HiOutlineMail} from 'react-icons/hi'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <div className="footer__row">
                    <nav className="footer__nav">
                        <h2 className="footer__nav-title">НАВИГАЦИЯ</h2>
                        <div className="footer__nav-row">
                            <div className="footer__nav-links">
                                <Link className="footer__nav-link">Кухни</Link>
                                <Link className="footer__nav-link">Спальни</Link>
                                <Link className="footer__nav-link">Гостинные</Link>
                            </div>
                            <div className="footer__nav-links">
                                <Link className="footer__nav-link">Прихожие</Link>
                                <Link className="footer__nav-link">Офисная мебель</Link>
                                <Link className="footer__nav-link">Детская</Link>
                            </div>
                            <div className="footer__nav-links">
                                <Link className="footer__nav-link">Шкафы</Link>
                                <Link className="footer__nav-link">Матрасы</Link>
                                <Link className="footer__nav-link">Мягкая мебель</Link>
                            </div>
                        </div>
                    </nav>
                    <div className="footer__right">
                        <h2 className="footer__right-title">LM</h2>
                        <p className="footer__right-address">г. Анапа, Анапское шоссе, <br/>
                            30 Ж/К Черное море
                        </p>
                    </div>
                </div>
                <div className="footer__row">
                    <div className="footer__links">
                        <Link className="footer__link">Акция</Link>
                        <Link className="footer__link">Новинки</Link>
                    </div>
                    <div className="footer__links">
                        <a href="" className="footer__link">
                            <span><FiPhone/></span>
                            8 (964) 89 99 119</a>
                        <a href="" className="footer__link">
                            <span><SlSocialInstagram/></span>
                            INSTAGRAM</a>
                        <a href="" className="footer__link">
                            <span><HiOutlineMail/></span>
                            mebel_loft_anapa@mail.ru</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;