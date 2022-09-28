import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { clearDb } from '../Utilities/Fakedb';

const Cart = (props) => {
    const { cart, clear, update } = props;

    const clearList = (clear) => {
        clearDb()
        clear(!update)
    }

    return (
        <div className='cart'>
            <h1 style={{ textAlign: 'center' }}>Cart</h1>
            <h4>Selected Items : {cart.length}</h4>
            <ol className='list'>
                {
                    cart.map(product => <li key={product.idMeal}> <small> {product.strMeal}</small></li>)
                }
            </ol>
            <button onClick={() => clearList(clear)}>Clear <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Cart;