import Card from "../../../components/Card/Card";
import {useContext, useEffect, Fragment} from "react";
import {CustomContext} from "../../../config/context/context";
import CardSkeleton from "../../../components/CardSkeleton/CardSkeleton";


const HitSale = () => {
    const {hitSale,getHitSale,isLoading} = useContext(CustomContext)

    useEffect(() => {
        getHitSale()
    },[])

    return (
        <section className='hitSale'>
            <div className="container">
                <h2 className="hitSale__title">
                    Хиты продаж
                </h2>
                <div className="hitSale__row">
                    {
                        isLoading ? <CardSkeleton cards={12}/> :
                        hitSale.map((item) => (
                            <Fragment key={item.id}>
                                <Card item={item}/>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HitSale;