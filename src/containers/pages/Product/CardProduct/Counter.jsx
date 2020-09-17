import React, { Fragment } from 'react';
import './CardProduct.css';
import {connect} from 'react-redux'
import ActionType from '../../../../redux/reducer/globalActionType'

class Counter extends React.Component {
    state = {
        order: 1,
        total_price: 1000
    }

    render(){
        return(
            <Fragment>
                    <div className="cart">
                        <div className="cart-total">
                           <p><b>Rp {this.state.total_price}</b></p>
                        </div>
                        <div className="cart-action">
                            <button className="btn_card" onClick={this.props.handleMinus}>-</button>
                            <input type="text" className="input_card" value={this.props.order} disabled/>
                            <button className="btn_card" onClick={this.props.handlePlus}>+</button>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
        handleMinus: () => dispatch({type: ActionType.MINUS_ORDER}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);