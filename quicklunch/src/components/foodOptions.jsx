import Pizza from '../assets/pizza2.jpg';
import Sando from '../assets/sando2.jpg';
import Bowl from '../assets/bowl3.jpg';
import Logo from '../assets/logo5.png';


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FoodOptions(){
    const [foodOps, setFoodOps] = useState([
        {"name": "Pizza", "img": Pizza, "description": "Start with our hand-tossed dough, choose from our rich tomato sauce or creamy white sauce, and top it off with your choice of fresh toppings. From classic pepperoni to exotic artichokes, create a pizza that’s uniquely yours", "glutenFree": true, "keto": true, "new":true}, {"name": "Sandwich", "img": Sando, "description": "Select your bread - be it a crusty baguette or a soft brioche. Layer it with premium meats, fresh vegetables, and cheeses. Add a spread of your choice to elevate your sandwich experience. Perfect for a quick lunch that doesn’t compromise on flavor or freshness!", "glutenFree": true, "keto": false, "new":false}, {"name": "Bowl", "img": Bowl, "description": "Pick your base from options like brown rice, quinoa, or mixed greens. Add in protein powerhouses like grilled chicken or tofu, top with a variety of fresh veggies, and finish with a drizzle of our signature sauces. Healthy, hearty, and tailored to your taste!", "glutenFree": true, "keto": true, "new":false}
    ]);

    return(
        <div className="content-center p-10">
            <h1 className='font-bold text-xl mb-5'>Order</h1>
           <p className='text-xl mb-10'>Begin by choosing the perfect foundation for your meal. Are you in the mood for a crispy and flavorful Pizza, a wholesome and hearty Bowl, or a classic, mouth-watering Sandwich?</p>
           <div className='flex flex-row justify-center space-x-10 grid-cols-3'>
           {foodOps.map(item => (
            <div className="card w-1/3 bg-base-100 shadow-xl">
            <figure><img src={item.img} alt={item.name} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                Build Your Own {item.name}
                {item.new?<div className="badge badge-secondary">NEW</div>:null}
                </h2>
                <div className="card-actions">
                {item.glutenFree?<div className="badge badge-outline">Gluten-Free</div>:null} 
                {item.keto?<div className="badge badge-outline">Keto</div>:null}
                </div>
                <p>{item.description}</p>
                <button className={item.name=="Pizza"?"btn btn-primary":"btn btn-disabled"}><Link to="/crust">Select</Link></button>
            </div>
            </div>))}
            </div>

        </div>
    )
}