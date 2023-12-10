import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {Link} from "react-router-dom";

const CardSkeleton = ({cards}) => {
    return (
        Array(cards).fill(0).map(() => (
            <div className='card'>
                <Link>
                    <Skeleton width={240} height={150}/>
                </Link>
                <h3 className="card__title">
                    <Skeleton/>
                </h3>
                <p className="card__category"><Skeleton/></p>
                <p className="card__price"><Skeleton/></p>
                <div className="card__sizes">
                    <h4 className="card__sizes-title"><Skeleton/></h4>
                    <div className="card__sizes-info">
                        <Skeleton width={240} height={50}/>
                    </div>

                    <div className="card__sizes-count">
                        <button><Skeleton/></button>
                    </div>

                </div>
            </div>
        ))
    );
};

export default CardSkeleton;