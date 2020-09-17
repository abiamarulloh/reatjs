import React, { Fragment } from 'react';
import './CardProduct.css';
import Counter from './Counter'

class CardProduct extends React.Component {
    render(){
        return(
            <Fragment>
                    <div className="card">
                        <h1>Burger King Mozarella</h1>
                        {/* eslint-disable-next-line */}
                        <img src="https://i.pinimg.com/originals/30/dc/20/30dc20978c49920cae498aadcc33415c.jpg"/>
                    </div>
                    <Counter />
            </Fragment>
        )
    }
}

export default CardProduct;