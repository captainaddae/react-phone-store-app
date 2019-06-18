import React from 'react';

export default function CartColums(){
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row text-uppercase">
                <div className="col-10 mx-auto col-lg-2">
                    <p>
                        Product
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>
                        name of product
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>
                        price
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>
                        quantity
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>
                        total
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>
                        remove
                    </p>
                </div>
            </div>
        </div>
    )
}