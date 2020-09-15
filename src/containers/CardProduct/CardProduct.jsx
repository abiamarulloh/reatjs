import React, { Fragment } from 'react';
import '../Product/Product.css';

class CardProduct extends React.Component {
    state = {
        order: 1,
        total_price: 1000
    }

    handleCounterChange = (value) => {
        this.props.onCounterChange(value)
    }

    handlePlus = () => {
        this.setState((state) => {
           return {
               order: state.order + 1,
            }
        }, () => {
            this.handleCounterChange(this.state.order)
        })

    }

    handleMinus = () => {
       if(this.state.order > 1) {
            this.setState({
                order: this.state.order - 1,
            }, () => {
                this.handleCounterChange(this.state.order)
            })
       }
    }

    render(){
        return(
            <Fragment>
                    <div className="card">
                        <h1>Burger King Mozarella</h1>
                        {/* eslint-disable-next-line */}
                        <img src="https://i.pinimg.com/originals/30/dc/20/30dc20978c49920cae498aadcc33415c.jpg"/>
                    </div>

                    <div className="cart">
                        <div className="cart-total">
                           <p><b>Rp {this.state.total_price}</b></p>
                        </div>
                        <div className="cart-action">
                            <button className="btn_card" onClick={this.handleMinus}>-</button>
                            <input type="text" className="input_card" value={this.state.order} disabled/>
                            <button className="btn_card" onClick={this.handlePlus}>+</button>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default CardProduct;