import React, { Fragment } from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct'

class Product extends React.Component {
    state = {
        order: 1,
        total_price: 1000
    }

    handleCounterChange = (newValue) => {
        this.setState( {
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className="product">
                    <header>
                        <span className="brand"><b>BKDELIVERY</b></span>
                        <span className="cart-head">
                            Cart
                            <span className="countCart">{this.state.order}</span>
                        </span>
                    </header>
                    <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
                </div>
            </Fragment>
        )
    }
}

export default Product;