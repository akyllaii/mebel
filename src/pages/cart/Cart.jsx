import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import {CustomContext} from "../../config/context/context";

const Cart = () => {
    const {user,removeCartsMinus,addCartsPlus} = useContext(CustomContext)
    const navigate = useNavigate()
    if (user.carts.length) {
        return (
            <section className='cart'>
                <div className="container">
                    <div className="cart__top">
                        <h2 className="cart__title">Ваша корзина</h2>
                        <p className="cart__count">{
                            user.carts?.reduce((acc,rec) => acc + rec.count,0)
                        } предмета</p>
                    </div>
                    <div className="cart__row">
                        {
                            user.carts?.map((item) => (
                                <div className="cart__card">
                                    <div className="cart__card-item">
                                        <img src={`${item.images[0]}`} alt=""/>
                                        <div className="cart__card-info">
                                            <h3 className="cart__card-title">{item.title}</h3>
                                            <p className="cart__card-size">Размер(Ш×Д×В): <span>{item.width} СМ X {item.deep} СМ X {item.height} СМ</span></p>
                                            <p className="cart__card-size">Количество:
                                                <div className="card__sizes-count">
                                                    <button type='button' className="card__sizes-minus" onClick={() => removeCartsMinus(item.id)}>-</button>
                                                    <span>
                            {
                                user.carts.find(el => el.id === item.id).count
                            }
                        </span>
                                                    <button type='button' className="card__sizes-plus" onClick={() => addCartsPlus(item.id)}>+</button>
                                                </div>
                                            </p>
                                        </div>
                                        <p className="cart__card-price">Цена за один товар: {item.price}₽ <br/>
                                            Всего: {item.price * item.count}
                                        </p>
                                    </div>
                                    <button className="cart__card-del">X</button>
                                </div>
                            ))
                        }
                    </div>
                    {
                        user.carts?.length ? <div className="cart__bottom">
                            <p className="cart__bottom-count">Итоговая стоимость: <span>{
                                user.carts?.reduce((acc,rec) => acc + rec.price * rec.count,0)
                            }₽</span></p>
                            <button onClick={() => navigate('/checkout')} className="cart__bottom-btn">Оформить заказ</button>
                        </div> : ''
                    }
                </div>
            </section>
        );
    } else {
        return <div className='container'><h2>Ваша корзина пуста</h2></div>
    }
};

export default Cart;