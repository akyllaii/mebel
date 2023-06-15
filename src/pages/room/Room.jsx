import React, {useContext} from 'react';
import {TbMoodDollar,TbCurrencyRubel} from 'react-icons/tb'
import {BsGift} from 'react-icons/bs'
import product from '../../assets/products/product1.png'
import {CustomContext} from "../../config/context/context";

const Room = () => {
    const {user} = useContext(CustomContext)
    return (
        <section className="room">
            <div className="container">
                <div className="room__top">
                    <h2 className="cart__title">
                        Бонусная программа
                    </h2>
                    <div className="room__top-bonus">
                        <p>У вас {user.point} бонусных баллов</p>
                        <p>Правила бонусной программы</p>
                    </div>
                </div>
                <div className="room__bonus">
                    <p className="room__bonus-text">
                        <TbMoodDollar/>
                        Возвращаем до 7% на бонусный счет
                    </p>
                    <p className="room__bonus-text">
                        <TbCurrencyRubel/>
                        1 бонус = 1 рубль
                    </p>
                    <p className="room__bonus-text">
                        <BsGift/>
                        Оплачивайте бонусами до 20% от покупки
                    </p>
                </div>
                <div className="room__row">
                    <form className="room__form">
                        <h2 className="cart__title">
                            Личные данные
                        </h2>
                        <div className="room__form-top">
                            <label className="room__form-label">
                                Имя
                                <input defaultValue={user.name} type="text" placeholder="Дмитрий"/>
                            </label>
                            <label className="room__form-label">
                                E-mail
                                <input readOnly value={user.email} type="email" placeholder="morlibae@gmail.com"/>
                            </label>
                            <label className="room__form-label">
                                Фамилия
                                <input defaultValue={user.surname} type="text" placeholder="Галькевич"/>
                            </label>
                            <label className="room__form-label">
                                Номер телефона
                                <input defaultValue={user.phone} type="tel" placeholder="+7 (901) 784-65-45"/>
                            </label>
                        </div>
                        <div className="room__form-address room__form-top">
                            <label className="room__form-label">
                                Город
                                <input defaultValue={user.city} type="text" placeholder="Москва"/>
                            </label>
                            <label className="room__form-label room__form-label_street">
                                Улица
                                <input defaultValue={user.street} type="text" placeholder="Москва"/>
                            </label>
                            <label className="room__form-label">
                                Дом/Корпус
                                <input type="text" placeholder="16/1"/>
                            </label>
                            <label className="room__form-label">
                                Квартира
                                <input type="text" placeholder="29"/>
                            </label>
                        </div>
                        <button className="room__form-btn">
                            Изменить
                        </button>
                    </form>
                    <table className="room__table">
                        <h2 className="cart__title">
                            Мои заказы
                        </h2>
                        <tr className="room__table-top">
                            <td className="room__table-title">Товар</td>
                            <td className="room__table-title">Цена</td>
                            <td className="room__table-title">Дата</td>
                            <td className="room__table-title">Статус</td>
                        </tr>
                        <tr className="room__table-info">
                            <td className="room__table-product">
                                <img src={product} alt=""/>
                                Кускен Navy Blue
                            </td>
                            <td>
                                16990
                            </td>
                            <td>
                                01.05.2020
                            </td>
                            <td>
                                Ожидается
                            </td>
                        </tr>
                        <p className="room__all">
                            Смотреть все
                        </p>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Room;