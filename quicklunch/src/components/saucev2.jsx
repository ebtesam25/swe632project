import Marinara from '../assets/Marinara.jpg';
import Alfredo from '../assets/Alfredo.jpg';
import Pesto from '../assets/Pesto.jpg';
import BBQ from '../assets/BBQ.jpg';
import Buffalo from '../assets/Buffalo.jpg';

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

    

export default function SauceV2({food}){
    const [sauceOps, setSauceOps] = useState([
        {
            "name": "Marinara",
            "img": Marinara,
            "description": "Our Marinara sauce is a classic, rich tomato-based sauce seasoned with garlic, oregano, and fresh basil. It's the perfect choice for those who love traditional Italian flavors, offering a simple yet robust taste that complements any pizza.",
            "glutenFree": true,
            "keto": false,
            "new": false
          },
          {
            "name": "Alfredo",
            "img": Alfredo,
            "description": "Indulge in the creamy richness of our Alfredo sauce. Made with heavy cream, butter, and parmesan cheese, this sauce offers a luxuriously smooth texture and decadent flavor. Ideal for adding a touch of elegance to your pizza.",
            "glutenFree": true,
            "keto": true,
            "new": false
          },
          {
            "name": "Pesto",
            "img": Pesto,
            "description": "Enjoy the fresh, aromatic flavors of our Pesto sauce. A blend of basil, garlic, pine nuts, olive oil, and Parmesan cheese, it's a vibrant and herbaceous choice that brings a burst of Italian countryside to your pizza.",
            "glutenFree": true,
            "keto": true,
            "new": false
          },
          {
            "name": "BBQ",
            "img": BBQ,
            "description": "Savor the smoky sweetness of our BBQ sauce. With a perfect balance of tangy and sweet, this sauce is a great way to add a bold, American twist to your pizza. Ideal for those who enjoy a bit of zest and depth in their toppings.",
            "glutenFree": true,
            "keto": false,
            "new": false
          },
          {
            "name": "Buffalo",
            "img": Buffalo,
            "description": "Experience the spicy kick of our Buffalo sauce. This sauce combines the tangy flavor of vinegar-based cayenne pepper sauce with a buttery finish, perfect for those who like their pizza with a bit of heat.",
            "glutenFree": true,
            "keto": false,
            "new": false
          }
          
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
           <p className='text-xl mb-10'>Choose your sauce. We offer a variety of options to suit your dietary needs and preferences. Select only one option below.</p>
           <div className='grid grid-rows-2 grid-flow-col gap-4'>
           {sauceOps.map(item => (
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
        <div className='bg-neutral-200 flex flex-col basis-1/3 pt-10'>
            <h1 className='text-2xl font-bold pl-10 pr-10 pb-5'>Order Selection</h1>
            {pizzaOrder && (
                <div>
                <p className="text-lg px-10 py-1 font-bold">Crust: </p>
                <div className='bg-gray-100 px-5 py-2 my-2 ml-10 w-2/3 flex flex-row justify-between align-middle'>
                    <p className='my-2'>{pizzaOrder[0].crust}</p>
                  </div>
              </div>
            )}
            {pizzaOrder && (
              <div>
                <p className="text-lg px-10 py-1 font-bold">Sauce: </p>
                <div className='bg-gray-100 px-5 py-2 my-2 ml-10 w-2/3 flex flex-row justify-between align-middle'>
                    <p className='my-2'>{pizzaOrder[0].sauce}</p>
                  </div>
              </div>
            )}
            <button className='btn btn-primary w-1/3 self-center mt-5'><Link to='/toppingsV2'>Next</Link></button>
        </div>
        </div>
    )
}
            
     
