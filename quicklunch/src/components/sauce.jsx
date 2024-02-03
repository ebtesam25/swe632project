import Classic from '../assets/classic.jpg';
import Thin from '../assets/thin.jpg';
import Cauliflower from '../assets/cauliflower.jpg';
import Deepdish from '../assets/deepdish.jpg';
import Gluten from '../assets/glutenfree.jpg';
import Wheat from '../assets/wheat.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  addPizza,
  setCrust,
  setSauce,
  addTopping,
  updateToppingQuantity,
} from '../redux/menuSlice';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

    

export default function Sauce({food}){
    const [foodOps, setFoodOps] = useState([
        {"name": "Marinara", "img": Classic, "description": "Embrace tradition with our Classic Hand-Tossed crust. It strikes a delightful balance in thickness, offering a texture that's crispy on the outside yet soft inside. Perfect for those who value classic flavors in every bite", "glutenFree": false, "keto": false, "new":false}, {"name": "Alfredo", "img": Thin, "description": "Our Thin & Crispy crust is a haven for crunch enthusiasts. Rolled to fine thinness, it delivers a satisfyingly crisp texture, making it ideal for those who love a lighter base to highlight their toppings.", "glutenFree": false, "keto": false, "new":false}, {"name": "Deep Dish", "img": Deepdish, "description": "Dive into the richness of our Deep Dish crust. Its thick, buttery texture is akin to biting into a cloud of savory delight. A fantastic choice for anyone seeking a more filling and robust pizza.", "glutenFree": false, "keto": false, "new":false},
        {"name": "Whole Wheat", "img": Wheat, "description": "Choose a healthier route with our Whole Wheat crust. Made from 100% whole grain wheat flour, it offers a nuttier flavor and a denser texture, catering to health-conscious pizza aficionados.", "glutenFree": false, "keto": false, "new":false}, {"name": "Gluten Free", "img": Gluten, "description": "Our Gluten-Free crust ensures everyone gets to relish pizza bliss. Crafted from a fine blend of gluten-free flours, it's light, tasty, and perfect for those with gluten sensitivities.", "glutenFree": true, "keto": false, "new":false}, {"name": "Cauliflower Crust", "img": Cauliflower, "description": "Indulge in the unique and wholesome goodness of our Cauliflower Crust. A delightful alternative, it's lower in carbs and packed with nutrients. Crispy, light, and delicious, this crust caters to both health enthusiasts and those looking for a new flavor experience.", "glutenFree": true, "keto": true, "new":false}
    ]);


    const [selectedFood, setSelectedFood] = useState(null);



    const dispatch = useDispatch();
    const pizzaOrder = useSelector(state => state.order.pizzas);

    const handleNewPizza = () => {
        dispatch(addPizza());
      };
    

    const handleSetSauce = (pizzaIndex, sauceType) => {
        dispatch(setSauce({ pizzaIndex, sauce: sauceType }));
    };


    useEffect(() => {
        console.log(pizzaOrder);
    }, [pizzaOrder]); // This will log the updated state whenever pizzaOrder changes


    return(
        <div className='flex flex-row'>
            <div className='flex basis-2/3'>
            <div className="content-center p-10">
            <ul className="steps w-full font-bold pb-20">
            <li className="step step-secondary">Crust</li>
            <li className="step step-secondary">Sauce</li>
            <li className="step">Toppings</li>
            <li className="step">Additional</li>
            </ul>
            <h1 className='font-bold text-xl mb-5'>Sauce</h1>
           <p className='text-xl mb-10'>Choose your sauce. We offer a variety of options to suit your dietary needs and preferences.</p>
           <div className='grid grid-rows-2 grid-flow-col gap-4'>
           {foodOps.map(item => (
            <div className={`card h-[32rem] bg-base-100 shadow-xl h-96 ${selectedFood === item ? 'selected' : ''}`}>
            <figure className='h-36'><img src={item.img} className='object-cover' alt={item.name} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {item.name}
                {item.new?<div className="badge badge-secondary">NEW</div>:null}
                </h2>
                <div className="card-actions">
                {item.glutenFree?<div className="badge badge-outline">Gluten-Free</div>:null} 
                {item.keto?<div className="badge badge-outline">Keto</div>:null}
                </div>
                <p>{item.description}</p>
                <button className="btn btn-primary" onClick={() => {handleNewPizza(0);handleSetSauce(0,item.name)}}>Select</button>
            </div>
            </div>))}
            </div>
        </div>
        </div>
        <div className='bg-neutral-200 flex flex-col basis-1/3'>
            <h1 className='text-2xl font-bold pl-10 pr-10 pb-5'>Order Selection</h1>
            {pizzaOrder && (
                <p className="text-lg p-10">Crust: {pizzaOrder[0].crust}</p>
            )}
            {pizzaOrder && (
                <p className="text-lg p-10">Sauce: {pizzaOrder[0].sauce}</p>
            )}
            <button className='btn btn-primary w-1/3 self-center'>Next</button>
        </div>
        </div>
    )
}
            
     