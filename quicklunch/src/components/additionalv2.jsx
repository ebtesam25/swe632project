import GarlicParamesanDrizzle from '../assets/GarlicParmesanDrizzle.jpg';
import Balsamic from '../assets/BalsamicGlaze.jpg';
import BBQSauceDrizzle from '../assets/BBQSauceDrizzle.jpg';
import HotBuffaloSauce from '../assets/HotBuffaloSauce.jpg';
import RanchDressingDrizzle from '../assets/RanchDressingDrizzle.jpg';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  addPizza,
  setCrust,
  setSauce,
  addTopping,
  updateToppingQuantity,
  addDrizzle,
  removeDrizzle,
} from '../redux/menuSlice';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderComplete from './OrderComplete';

    

export default function AdditionalV2({food}){
  const [selectPizza, setSelectPizza] = useState(0);
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [quantity, setQuantity] = useState(1); // Initializes quantity with 1

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); // Prevents quantity from going below 1
    };

    const [toppingsLength, setToppingsLength] = useState(0);


    const [recommendedPairings, setRecommendedPairings] = useState({
        "Marinara": ["Balsamic Glaze", "Garlic Parmesan Drizzle"],
        "Alfredo": ["Ranch Dressing Drizzle", "Garlic Parmesan Drizzle"],
        "Pesto": ["Balsamic Glaze", "Garlic Parmesan Drizzle"],
        "BBQ": ["Ranch Dressing Drizzle", "Hot Buffalo Sauce"],
        "Buffalo": ["Ranch Dressing Drizzle", "Garlic Parmesan Drizzle"]
      }
      
      
    );      
    const [toppingsOps, settoppingsOps] = useState([
        {
          "name": "Garlic Parmesan Drizzle",
          "img": GarlicParamesanDrizzle,
          "description": "A creamy and savory finish that's irresistible to garlic lovers. Perfect for adding a rich, flavorful layer to your pizza.",
          "glutenFree": true,
          "keto": false,
          "new": true
        },
        {
          "name": "Balsamic Glaze",
          "img": Balsamic,
          "description": "A sweet and tangy balsamic reduction for a gourmet touch. Adds a sophisticated flair to any pizza with its unique flavor.",
          "glutenFree": true,
          "keto": false,
          "new": true
        },
        {
          "name": "BBQ Sauce Drizzle",
          "img": BBQSauceDrizzle,
          "description": "Smoky and sweet, ideal for a bold flavor kick. This drizzle adds a deliciously tangy twist to your favorite pizza.",
          "glutenFree": true,
          "keto": false,
          "new": true
        },
        {
          "name": "Hot Buffalo Sauce",
          "img":HotBuffaloSauce,
          "description": "Spice things up with a fiery buffalo drizzle. Perfect for adding a spicy kick to any pizza, this sauce is for those who love heat.",
          "glutenFree": true,
          "keto": false,
          "new": true
        },
        {
          "name": "Ranch Dressing Drizzle",
          "img": RanchDressingDrizzle,
          "description": "Cool and creamy, perfect for dipping or drizzling. Adds a smooth, tangy layer to your pizza that complements any topping.",
          "glutenFree": true,
          "keto": true,
          "new": true
        }
      ]
      
      );

      const [updatedOrder, setUpdatedOrder] = useState([]);

      const updateToppingOrder = (toppingOps, recommendedPairings) => {
        let updatedOrdr = []
      
          //Select recommended pairings for current sauce and find the topping in toppingOps
            let currentSauce = pizzaOrder[0].sauce;
            let rtoppings = recommendedPairings[currentSauce];
            console.log(rtoppings)
            for (let j = 0; j < 4; j++) {
                let select_topping = toppingOps.find(topping => topping.name === rtoppings[j]);
                if (select_topping){
                select_topping.recommended = true;
                updatedOrdr.push(select_topping);
                }
            }

            for (let k = 0; k < toppingOps.length; k++) {
                if (!updatedOrdr.includes(toppingOps[k])) {
                    let topping = toppingOps[k];
                    topping.recommended = false;
                    updatedOrdr.push(topping);
                }
            }
    
        console.log(updatedOrdr);
        setUpdatedOrder(updatedOrdr);
        return updatedOrdr;
      }


    const [selectedFood, setSelectedFood] = useState(null);



    const dispatch = useDispatch();
    const pizzaOrder = useSelector(state => state.order.pizzas);

    const handleNewPizza = () => {
        dispatch(addPizza());
      };

    const handleAddDrizzle = (pizzaIndex, drizzle) => {
      if (pizzaOrder[0].drizzles.length <= 3) {
        dispatch(addDrizzle({ pizzaIndex, drizzle: drizzle }));
        setToppingsLength(pizzaOrder[selectPizza].drizzles.length);
      }
      else{
        setToppingsLength(4);
      }
    };
    const handleRemoveDrizzle = (pizzaIndex, drizzle) => {
      if (pizzaOrder[0].drizzles.length == 4) {
        setToppingsLength(pizzaOrder[selectPizza].drizzles.length - 1);
      }
      dispatch(removeDrizzle({ pizzaIndex, drizzle: drizzle }));
    };

    
  


    useEffect(() => {
        console.log(pizzaOrder);
        updateToppingOrder(toppingsOps, recommendedPairings);
    }, [pizzaOrder]); // This will log the updated state whenever pizzaOrder changes


    return(
        <div className='flex flex-row'>
            <div className='flex basis-2/3'>
            <div className="content-center p-10">
            <ul className="steps w-full font-bold pb-20">
            <li className="step step-primary">Crust</li>
            <li className="step step-primary">Sauce</li>
            <li className="step step-primary">Toppings</li>
            <li className="step step-primary">Additional</li>
            </ul>
            <h1 className='font-bold text-xl mb-5'>Drizzle</h1>
           <p className='text-xl mb-10'><span className='font-bold'>Choose up to 4 toppings.</span> We offer a variety of options to suit your dietary needs and preferences.</p>
           
           <div className=''>
           <div className='grid grid-cols-3 grid-flow-rows gap-4'>
           {updatedOrder.map(item => (
            <div className={`card h-[32rem] bg-base-100 shadow-xl h-96 ${selectedFood === item ? 'selected' : ''}`}>
            <figure className='h-36'><img src={item.img} className='object-cover' alt={item.name} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {item.name}
                </h2>
                {item.recommended?<div className="badge badge-secondary">Recommended</div>:null}
                <div className="card-actions">
                {item.glutenFree?<div className="badge badge-outline">Gluten-Free</div>:null} 
                {item.keto?<div className="badge badge-outline">Keto</div>:null}
                </div>
                <p>{item.description}</p>
                {/* <div className="quantity-selector flex flex-row gap-2 my-5">
                <button className='btn btn-primary rounded-full text-2xl text-white' onClick={decreaseQuantity} disabled={quantity === 1}>-</button>
                <input className='input input-bordered w-full max-w-xs' type="number" value={quantity} readOnly />
                <button className='btn btn-primary rounded-full text-2xl text-white' onClick={increaseQuantity}>+</button>
                </div> */}
                <button className={isOrderComplete?"btn disabled":"btn btn-primary"} onClick={() => handleAddDrizzle(selectPizza,item.name)}>Select</button>
            </div>
            </div>))}
            </div>
            </div>
        </div>
        </div>
        <div className='bg-neutral-200 flex flex-col basis-1/3 pt-10 content-center'>
            
            <h1 className='text-2xl font-bold pl-10 pr-10 pb-10'>Order Selection</h1>

            <div role="tablist" className="tabs tabs-boxed mx-10">
            {pizzaOrder.map((pizza, index)=><a onClick={()=>setSelectPizza(index)} role="tab" className={selectPizza == index ?"tab tab-active":"tab"}>Pizza {index}</a>)}
            </div>


            {pizzaOrder && (
                <div>
                <p className="text-lg px-10 py-1 font-bold">Crust: </p>
                <div className='bg-gray-100 px-5 py-2 my-2 ml-10 w-2/3 flex flex-row justify-between align-middle'>
                    <p className='my-2'>{pizzaOrder[selectPizza].crust}</p>
                  </div>
              </div>
            )}
            {pizzaOrder && (
              <div>
                <p className="text-lg px-10 py-1 font-bold">Sauce: </p>
                <div className='bg-gray-100 px-5 py-2 my-2 ml-10 w-2/3 flex flex-row justify-between align-middle'>
                    <p className='my-2'>{pizzaOrder[selectPizza].sauce}</p>
                  </div>
              </div>
            )}
            {pizzaOrder && (
              <div>
                <p className="text-lg px-10 py-1 font-bold">Toppings:</p>
                {pizzaOrder[selectPizza].toppings.map((t)=>(
                  <div className='bg-gray-100 px-5 py-2 my-2 ml-10 w-2/3 flex flex-row justify-between align-middle'>
                    <p className='my-2'>{t}</p>
                  </div>
                  ))}
                </div>
            )}
            {pizzaOrder && (
              <div>
                <p className="text-lg px-10 pt-1 font-bold">Drizzle:</p>
                {pizzaOrder[selectPizza].drizzles.map((t)=>(
                  <div className='bg-gray-100 px-5 py-2 my-2 ml-10 w-2/3 flex flex-row justify-between align-middle'>
                    <p className='my-2'>{t}</p>
                    {!isOrderComplete &&<button className='btn btn-warning' onClick={()=>handleRemoveDrizzle(selectPizza,t)}>Remove X</button>}
                  </div>
                  ))}
              </div>
            )}
            {toppingsLength == 4 && (<div className='bg-red-100 w-2/3 mx-10 border-red-300 border-2 my-10 py-5'><p className='mx-5'>You have reached max drizzle limit</p></div>)}
            {!isOrderComplete &&<div>
            <Link to="/crustV2"><button className='btn btn-secondary w-2/3 self-center mt-5 justify-center mx-10'>Add More Pizza</button></Link>
            <button onClick={()=>setIsOrderComplete(true)} className='btn btn-primary w-2/3 self-center mt-5 justify-center mx-10'>Place Order</button>
            </div>}
              {isOrderComplete && <OrderComplete/>}
        </div>
        </div>
    )
}
            
     
