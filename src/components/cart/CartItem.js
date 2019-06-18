import React from 'react';

export default function CartItem({item, value}){
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;

    return (
        <div className="row my-2 text-center text-capitalize">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} className="img-fluid" style={{width:"5rem", height:"5rem"}} alt="Product"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="col-lg-none">
                    {title}
                </span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="col-lg-none">
                    Price: {price}
                </span>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>
                            -
                        </span>
                    </div>
                    <div>
                        <span className="btn btn-count mx-1">{count}</span>
                    </div>
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span>
                    Item total: ${total}
                </span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash"/>
                </span>
            </div>
        </div>
    );
}