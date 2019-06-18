import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';
import { thisExpression } from '@babel/types';


const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        cart: [],
        productDetail: detailProduct,
        productModel: detailProduct,
        modelOpen: false,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount(){
        this.setProduct();
    }
    handleDetails = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {productDetail: product};
        })
    };

    addToCart = id =>{
        let tempProducts = [...this.state.products];

        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;

        const price = product.price;
        product.total = price;
        

        this.setState(()=>{
            return {
                products: tempProducts,
                cart:[...this.state.cart, product]
            };
        },
        ()=> {
            this.setTotals();
        }
        );
    }
    openModel = id => {
        const product = this.getItem(id);
        this.setState(
            ()=> {
                return {
                    productModel: product,
                    modelOpen: true
                };
            }
        );
    }

    closeModel = () => {
        this.setState(
            () => {
                return {modelOpen: false}
            }
        )
    }
    setProduct = () => {
        let tempProduct = []

        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProduct = [...tempProduct, singleItem];
        });

        this.setState(()=>{
            return {products: tempProduct};
        });
    }

   /* test = () => {
        //statePro:this.state.products[0].inCart;
        // storePro:storeProducts[0].inCart;

         console.log("state prod: ", this.state.products[0].inCart);
         console.log("store Prod: ", storeProducts[0].inCart);

         const tempProd = [...this.state.products];
         tempProd[0].inCart = true;
         this.setState(()=>{
             return {products: tempProd}
         },

         ()=> {
            console.log("state prod: ", this.state.products[0].inCart);
            console.log("storeProd: ", storeProducts[0].inCart);
         }
         );
    }*/
    
    getItem = id => {
        //return  {const:product = this.state.products.find(item => item.id === id)};
        const product = this.state.products.find(item=>item.id === id);
        return product;
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id ==id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(
            ()=>{
                return {
                    cart: [...tempCart]
                }
            },
            ()=>{
            this.setTotals();
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct =tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        
        if (product.count === 0){
            this.removeItem(id)
        }
        else {
            product.total = product.count * product.price;
            this.setState(
                ()=> {
                    return {cart: [...tempCart]}
                },
                ()=> {
                    this.setTotals();
                }
            );
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let deletedProduct = tempProducts[index];

        deletedProduct.total = 0;
        deletedProduct.count = 0;
        deletedProduct.inCart = false;

        this.setState(()=>{
            return {
                products: [...tempProducts],
                cart: [...tempCart]
            }
        },
        ()=>{
            this.setTotals()
        });
    }

    clearCart = () => {
        this.setState(()=>{
            return {cart:[]}
        },
        ()=>{
            this.setProduct();
        }
        )
    }

    setTotals = () => {
        let subTotals = 0
        this.state.cart.map(item =>(subTotals += item.total));
        let tax = 0;
        subTotals = parseFloat(subTotals.toFixed(2));
        tax = subTotals * 0.1;
        tax = parseFloat(tax.toFixed(2));
        let total = tax + subTotals;

        this.setState(()=>{
            return {
                cartSubTotal: subTotals,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
    
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToCart: this.addToCart,    
                openModel: this.openModel,
                closeModel: this.closeModel,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                
                { this.props.children }
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };