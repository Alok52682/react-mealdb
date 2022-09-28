import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import { addToDb, getCart } from '../Utilities/Fakedb';
import './main.css'

const Main = () => {
    const [meals, setMeals] = useState([])
    const [inCart, setInCart] = useState([])
    const [search, setSearch] = useState('')
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [search])

    useEffect(() => {
        const cart = getCart();

        const savedCart = [];
        for (const id in cart) {
            const addedMeal = meals.find(meal => meal.idMeal === id);
            if (addedMeal) {
                const quantity = cart[id];
                cart.quantity = quantity;
                savedCart.push(addedMeal);
            }

        }
        setInCart(savedCart);

    }, [meals, update])

    const clickHandel = (id) => {
        const getData = getCart();
        // console.log(getData, id);
        if (getData[id.idMeal]) {
            alert('Already Exist');
        }
        else {
            addToDb(id.idMeal);
            setUpdate(!update)
        }


    }
    return (
        <div className='main'>
            <div className='meals'>
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search food' />
                <h1 style={{ textAlign: 'center' }}>Total Meal : {meals?.length}</h1>
                <div className="allMeals">
                    {
                        !meals ? <div>meal not found</div> : meals.map(meal => <Meal handel={clickHandel} key={meal.idMeal} meal={meal}></Meal>)
                    }
                </div>
            </div>
            <div className="cartSection">
                <Cart clear={setUpdate} update={update} cart={inCart}></Cart>
            </div>
        </div>
    );
};

export default Main;