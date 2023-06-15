import React, {useContext} from 'react';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import {CustomContext} from "../../config/context/context";

const Card = ({item}) => {
    const {favorites, favoritesHandler,addCarts,user,addCartsPlus,removeCartsMinus} = useContext(CustomContext)
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div className='card'>
            <span className="card__fav" onClick={() => favoritesHandler(item)}>
                {
                    favorites.some(el => el.id === item.id) ? <AiFillHeart color={'red'}/> : <AiOutlineHeart/>
                }
            </span>
            <Link to={`/product/${item.id}`}>
                <img src={location.pathname === '/' ? item.images[0] : `${item.images[0]}`} alt="" className="card__img"/>
            </Link>
            <h3 className="card__title">{item.title}</h3>
            <p className="card__category">{item.category}</p>
            <p className="card__price">{item.price}₽</p>
            <div className="card__sizes">
                <h4 className="card__sizes-title">Размеры</h4>
                <div className="card__sizes-info">
                    <div className="card__sizes-size">
                        <span>ШИРИНА</span>
                        {item.width} СМ
                    </div>
                    x
                    <div className="card__sizes-size">
                        <span>ГЛУБИНА</span>
                        {item.deep} СМ
                    </div>
                    x
                    <div className="card__sizes-size">
                        <span>ВЫСОТА</span>
                        {item.height} СМ
                    </div>
                </div>
                {
                    user.carts?.some(el => el.id === item.id) ?
                        <div className="card__sizes-count">
                        <button type='button' className="card__sizes-minus" onClick={() => removeCartsMinus(item.id)}>-</button>
                        <span>
                            {
                                user.carts.find(el => el.id === item.id).count
                            }
                        </span>
                        <button type='button' className="card__sizes-plus" onClick={() => addCartsPlus(item.id)}>+</button>
                    </div>
                        : <button type='button' onClick={() => {
                        if ('id' in user) {
                            addCarts(item)
                        } else {
                            navigate('/login')
                        }
                    }} className="card__sizes-btn">Добавить в корзину</button>
                }

            </div>
        </div>
    );
};

export default Card;