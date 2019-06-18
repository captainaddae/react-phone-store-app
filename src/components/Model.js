import React, {Component} from 'react';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';


export default class Model extends Component {
    render(){
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modelOpen, closeModel} = value;
                    const {img, title, price} = value.productModel;

                    if (!modelOpen){
                        return null;
                    }
                    else {
                        return (
                        <ModelWrapper>
                            <div className="container">
                                <div className="row">
                                    <div id="model" className="col-9 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5">
                                        <h5>Item added to cart</h5>
                                        <img src={img} className="img-fluid" alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">Price: ${price}</h5>
                                        <Link to="/">
                                            <ButtonContainer onClick={()=>closeModel()}>
                                                Cont. Shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={()=>closeModel()}>
                                                Go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModelWrapper>
                        );
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModelWrapper = styled.div `
position: fixed;
display: flex;
top: 0;
right: 0;
bottom: 0;
left: 0;
justify-content: center;
background: rgba(0,0,0,0.3);
align-items: center;
#model{
    background: var(--mainWhite);
}
`;