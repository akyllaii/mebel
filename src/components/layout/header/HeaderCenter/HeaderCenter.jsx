import {Link, useLocation, useNavigate} from 'react-router-dom'
import logo from '../../../../assets/logo.svg'
import {CiSearch} from 'react-icons/ci'
import {CiHeart} from 'react-icons/ci'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {CiUser} from 'react-icons/ci'
import {useContext, useEffect} from "react";
import {CustomContext} from "../../../../config/context/context";

const HeaderCenter = () => {

    const {user,logOutUser,search, setSearch} = useContext(CustomContext)
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (location.pathname !== '/catalog') {
            setSearch('')
        }
    },[location.pathname])


    return (
            <nav className="header__center">
                <Link to='/'>
                    <img src={logo} alt="" className="header__center-logo"/>
                </Link>
                    <div className="header__center-row">
                        <span className="header__center-search"><CiSearch/></span>
                        <input
                            value={search}
                            placeholder='Поиск'
                            type="search"
                            className="header__center-inp"
                        onChange={(e) => {
                            if (location.pathname !== '/catalog') {
                               navigate('/catalog')
                            }
                            setSearch(e.target.value)
                        }}
                        />
                    </div>
                    <div className="header__center-icons">
                        <Link to={'/favorites'} className="header__center-fav"><span><CiHeart/></span></Link>
                        <Link to={user.email?.length ? '/cart' : '/login'} className="header__center-cart"><span><HiOutlineShoppingBag/></span></Link>
                        {
                            location.pathname === '/room' ? <span onClick={logOutUser}>Выйти</span> : <Link to={user.email?.length ? '/room' : '/login'} className="header__center-user"><span><CiUser/></span></Link>
                        }
                    </div>
            </nav>
    );
};

export default HeaderCenter;