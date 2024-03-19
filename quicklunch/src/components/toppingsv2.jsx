import Pepperoni from '../assets/Pepperoni.jpg';
import GrilledChicken from '../assets/Grilled Chicken.jpg';
import Mushrooms from '../assets/Mushrooms.jpg';
import Onions from '../assets/Onions.jpg';
import BellPeppers from '../assets/Bell Peppers.jpg';
import BlackOlives from '../assets/Black Olives.jpg';
import Pineapple from '../assets/Pineapple.jpg';
import ItalianSausage from '../assets/Italian Sausage.jpg';
import Spinach from '../assets/Spinach.jpg';
import GoatCheese from '../assets/Goat Cheese.jpg';
import RoastedRedPeppers from '../assets/Roasted Red Peppers.jpg';
import ArtichokeHearts from '../assets/Artichoke Hearts.jpg';
import SundriedTomatoes from '../assets/Sun-dried Tomatoes.jpg';
import PineNuts from '../assets/Pine Nuts.jpg';
import FetaCheese from '../assets/Feta Cheese.jpg';
import Jalapenos from '../assets/Jalapenos.jpg';
import Cilantro from '../assets/Cilantro.jpg';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  addPizza,
  setCrust,
  setSauce,
  addTopping,
  updateToppingQuantity,
  removeTopping,
} from '../redux/menuSlice';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

    

export default function ToppingsV2({food}){
    const [quantity, setQuantity] = useState(1); // Initializes quantity with 1

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); // Prevents quantity from going below 1
    };

    const [toppingsLength, setToppingsLength] = useState(0);

    const [recommendedPairings, setRecommendedPairings] = useState([
        {
        "Marinara":[
            "Mozzarella Cheese",
            "Basil Leaves",
            "Sliced Mushrooms",
            "Italian Sausage"
          ]
        },
        {
          "Alfredo":[
            "Grilled Chicken",
            "Spinach",
            "Bacon Bits",
            "Sun-dried Tomatoes"
          ]
        },
        {
          "Pesto":[
            "Goat Cheese",
            "Pine Nuts",
            "Roasted Red Peppers",
            "Artichoke Hearts"
          ]
        },
        {
          "BBQ":[
            "Smoked Gouda Cheese",
            "Red Onions",
            "Cilantro",
            "Pulled Pork or Grilled Chicken"
          ]
        },
        {
          "Buffalo":[
            "Blue Cheese Crumbles",
            "Diced Celery",
            "Shredded Carrots",
            "Grilled Chicken"
          ]
        }
      ]
    );      
    const [toppingsOps, settoppingsOps] = useState([
        {
          "name": "Pepperoni",
          "img": Pepperoni,
          "description": "Savor the spicy and slightly smoky flavor of our thinly sliced pepperoni. A classic topping that adds a hearty meatiness to any pizza, perfect for those who love a traditional touch.",
          "glutenFree": true,
          "keto": true,
          "new": false
        },
        {
            "name": "Grilled Chicken",
            "img": GrilledChicken,
            "description": "Savor the lean, flavorful profile of our perfectly grilled chicken. Seasoned and grilled to perfection, it offers a protein-rich topping option that's both healthy and hearty, ideal for adding a savory depth to your pizza.",
            "glutenFree": true,
            "keto": true,
            "new": true
        },
        {
          "name": "Mushrooms",
          "img": Mushrooms,
          "description": "Enjoy the earthy, umami-rich taste of our fresh mushrooms. Sliced to perfection, they complement any pizza, adding a layer of depth and flavor that's irresistible to fungi enthusiasts.",
          "glutenFree": true,
          "keto": true,
          "new": false
        },
        {
          "name": "Onions",
          "img": Onions,
          "description": "Our thinly sliced onions add a sweet and sharp bite, enhancing your pizza with their distinctive flavor. Perfect for adding a crunch and a punch of taste.",
          "glutenFree": true,
          "keto": true,
          "new": false
        },
        {
          "name": "Bell Peppers",
          "img": BellPeppers,
          "description": "Brighten your pizza with the sweet and slightly tangy taste of our bell peppers. Available in a variety of colors, they add a crisp texture and a vibrant splash to your meal.",
          "glutenFree": true,
          "keto": true,
          "new": false
        },
        {
          "name": "Black Olives",
          "img": BlackOlives,
          "description": "Dive into the rich, briny flavor of our black olives. A must-have for olive lovers, they add a unique Mediterranean twist to your pizza.",
          "glutenFree": true,
          "keto": true,
          "new": false
        },
        {
          "name": "Pineapple",
          "img": Pineapple,
          "description": "Experience the controversial yet beloved sweetness of pineapple on your pizza. Its juicy freshness offers a tropical contrast to savory flavors, perfect for those who dare to be different.",
          "glutenFree": true,
          "keto": false,
          "new": false
        },
        {
          "name": "Italian Sausage",
          "img": ItalianSausage,
          "description": "Our savory sausage topping is seasoned to perfection, offering a spicy kick to your pizza. It's ideal for those seeking a bold and meaty flavor.",
          "glutenFree": true,
          "keto": true,
          "new": false
        },
        {
          "name": "Spinach",
          "img": Spinach,
          "description": "Add a touch of green with our fresh spinach. Its mild, earthy flavor is a healthful addition, offering a subtle yet tasty way to incorporate more veggies into your pizza.",
          "glutenFree": true,
          "keto": true,
          "new": false
        },
        {
          "name": "Goat Cheese",
          "img": GoatCheese,
          "description": "Savor the tangy and creamy flavor of our goat cheese. It adds a sophisticated twist to any pizza, perfect for those seeking a delicate yet distinctive taste.",
          "glutenFree": true,
          "keto": true,
          "new": true
        },
        {
          "name": "Roasted Red Peppers",
          "img":RoastedRedPeppers,
          "description": "Enjoy the sweet and smoky taste of our roasted red peppers. They bring a soft, succulent texture and a vibrant color to your pizza, enhancing it with a subtle smokiness.",
          "glutenFree": true,
          "keto": true,
          "new": true
        },
        {
          "name": "Artichoke Hearts",
          "img": ArtichokeHearts,
          "description": "Indulge in the uniquely tangy and slightly nutty flavor of our artichoke hearts. A gourmet topping that adds a touch of sophistication to your pizza.",
          "glutenFree": true,
          "keto": true,
          "new": true
        },
        {
          "name": "Sun-dried Tomatoes",
          "img": SundriedTomatoes,
          "description": "Taste the intense, concentrated flavor of our sun-dried tomatoes. Their chewy texture and deep, sweet-tart flavor add a rich dimension to any pizza.",
          "glutenFree": true,
          "keto": true,
          "new": true
        },
        {
          "name": "Pine Nuts",
          "img": PineNuts,
          "description": "Add a touch of crunch and a nutty flavor with our pine nuts. They're a perfect complement to richer flavors, adding texture and depth to your pizza.",
          "glutenFree": true,
          "keto": true,
          "new": true
        },
        {
          "name": "Feta Cheese",
          "img": FetaCheese,
          "description": "Crumble on some feta cheese for a tangy and salty flavor boost. This cheese pairs wonderfully with a variety of toppings, offering a Mediterranean flair.",
          "glutenFree": true,
          "keto": true,
          "new": true
        },
        {
          "name": "Jalapeños",
          "img": Jalapenos,
          "description": "Spice up your pizza with our sliced jalapeños. They add a kick of heat and a burst of flavor, perfect for those who like their pizza with a bit of spice.",
          "glutenFree": true,
          "keto": true,
          "new": true
        },
        {
          "name": "Cilantro",
          "img": Cilantro,
          "description": "Freshen up your pizza with a sprinkle of cilantro. Its bright and citrusy flavor cuts through richer sauces and toppings, adding a fresh layer of taste.",
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
            let rtoppings = recommendedPairings.filter(pairing => pairing[currentSauce]);
            for (let j = 0; j < 4; j++) {
                let select_topping = toppingOps.find(topping => topping.name === rtoppings[0][currentSauce][j]);
                if (select_topping) {
                select_topping.recommended = true;
                updatedOrdr.push(select_topping);
                }
            }

            for (let k = 0; k < toppingOps.length; k++) {
                if (!updatedOrdr.includes(toppingOps[k])) {
                    //Modify this to add a recommended false tag to the topping object when pushing to updatedOrder
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

      const handleAddTopping = (pizzaIndex, topping) => {
        if (pizzaOrder[0].toppings.length <= 3) {
        dispatch(addTopping({ pizzaIndex, topping: topping }));
        setToppingsLength(pizzaOrder[0].toppings.length);
        }
        else{
          setToppingsLength(4);
        }
      };
      
      const handleRemoveTopping = (pizzaIndex, topping) => {
        if (pizzaOrder[0].toppings.length == 4) {
          setToppingsLength(pizzaOrder[0].toppings.length - 1);
        }
        console.log(`Topping ${topping} Removed`)
        dispatch(removeTopping({ pizzaIndex, topping: topping }));
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
            <li className="step">Additional</li>
            </ul>
            <h1 className='font-bold text-xl mb-5'>Toppings</h1>
           <p className='text-xl mb-10'>Choose up to 4 toppings. We offer a variety of options to suit your dietary needs and preferences.</p>
           
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
                <button className="btn btn-primary" onClick={() => {handleNewPizza(0);handleAddTopping(0,item.name)}}>Select</button>
            </div>
            </div>))}
            </div>
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
            {pizzaOrder && (
                <div>
                  <p className="text-lg px-10 py-1 font-bold">Toppings:</p>
                  {pizzaOrder[0].toppings.map((t)=>(
                  <div className='bg-gray-100 px-5 py-2 my-2 ml-10 w-2/3 flex flex-row justify-between align-middle'>
                    <p className='my-2'>{t}</p>
                    <button className='btn btn-warning' onClick={()=>handleRemoveTopping(0,t)}>Remove X</button>
                  </div>
                  ))}
                </div>
                
            )}
            {toppingsLength == 4 && (<div className='bg-red-100 w-2/3 mx-10 border-red-300 border-2 my-10 py-5'><p className='mx-5'>You have reached max topping limit</p></div>)}
            <button className='btn btn-primary w-1/3 self-center mt-5'><Link to="/additionalV2">Next</Link></button>
        </div>
        </div>
    )
}
            
     
