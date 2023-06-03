import React, {Fragment, useContext, useEffect, useState} from 'react';
import AsideFilter from "../../components/AsideFilter/AsideFilter";
import Card from "../../components/Card/Card";
import api from "../../config/api/api";
import {CustomContext} from "../../config/context/context";
import {useLocation} from 'react-router-dom'

const Catalog = () => {

    const [product,setProduct] = useState([])
    const {search,setSearch} = useContext(CustomContext)
    const location = useLocation()

    useEffect(() => {
        api(`products?title_like=${search}`).json()
            .then((res) => setProduct(res))
    },[search])

    return (
        <main>
            <section className="catalog">
                <div className="container">
                    <div className="catalog__row">
                        <AsideFilter/>
                        <div className="hitSale__row catalog__content">
                            {
                                product.map((item) => (
                                    <Fragment key={item.id}>
                                        <Card item={item}/>
                                    </Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Catalog;