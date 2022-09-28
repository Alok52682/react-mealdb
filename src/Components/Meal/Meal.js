import React from 'react';
import './Meal.css'

const Meal = (props) => {
    // console.log(props.meal)
    const { strMeal, strMealThumb, strCategory, strArea } = props.meal;

    return (
        <div className='Meal'>
            <img src={strMealThumb} alt="" />
            <div className='mealInfo'>
                <h4>Name : {strMeal}</h4>
                <p><small>Origine: {strArea}</small></p>
                <p><small>Category: {strCategory}</small></p>
            </div>
            <button onClick={() => props.handel(props.meal)}>Add to cart</button>
        </div>
    );
};

export default Meal;