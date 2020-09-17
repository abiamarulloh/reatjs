import React, { Fragment } from 'react';
import './Product.css';
import CardProduct from './CardProduct/CardProduct'
import {connect} from 'react-redux'

class Product extends React.Component {
    render(){
        return(
            <Fragment>
                <div className="product">
                    <header>
                        <span className="brand"><b>BKDELIVERY</b></span>
                        <span className="cart-head">
                            Cart
                            <span className="countCart">{this.props.order}</span>
                        </span>
                    </header>
                    <CardProduct />
                </div>
            </Fragment>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStatetoProps)(Product);