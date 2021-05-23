import React from 'react';
import Rating from './Rating';

export default function Product(props)
{
    const {prod} = props;
    return (
        <div key={prod._id} className="product">
        <a href={`/product/${prod._id}`}>
            <img className="medium" src={prod.image} alt={prod.name}/>
        </a>
        <div className="card-body">
            <a href={`/product/${prod._id}`}>
                <h2> {prod.name} </h2>
                <h3>{prod.desc}</h3>
            </a>
            <Rating key={prod._id} rating={prod.rating} num_rev={prod.num_rev}></Rating>
            <div className="price">${prod.price}</div>
        </div>
    </div>
    );
};