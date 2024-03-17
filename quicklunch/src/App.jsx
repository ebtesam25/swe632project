import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/home'
import FoodOptions from './components/foodOptions';
import NavBar from './components/NavBar';
import Crust from './components/crust';
import Sauce from './components/sauce';
import Toppings from './components/toppings';
import Additional from './components/additional';
import OrderComplete from './components/OrderComplete';
import UserProfile from './components/UserProfile';
import HomeV2 from './components/homev2';
import FoodOptionsV2 from './components/foodOptionsv2';
import CrustV2 from './components/crustv2';
import SauceV2 from './components/saucev2';
import ToppingsV2 from './components/toppingsv2';
import OrderCompleteV2 from './components/OrderCompletev2';
import UserProfileV2 from './components/UserProfilev2';


export default function App() {

  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route exact path="/swe632project" element={<Home />} />
        <Route exact path="/start" element={<FoodOptions />} />
        <Route exact path="/crust" element={<Crust />} />
        <Route exact path="/sauce" element={<Sauce />} />
        <Route exact path="/toppings" element={<Toppings />} />
        <Route exact path="/additional" element={<Additional />} />
        <Route exact path="/orderComplete" element={<OrderComplete />} />
        <Route exact path="/userProfile" element={<UserProfile />} />
        <Route exact path="/home" element={<HomeV2 />} />
        <Route exact path="/startv2" element={<FoodOptionsV2 />} />
        <Route exact path="/crustv2" element={<CrustV2 />} />
        <Route exact path="/saucev2" element={<SauceV2 />} />
        <Route exact path="/toppingsv2" element={<ToppingsV2 />} />
        <Route exact path="/additionalv2" element={<Additional />} />
        <Route exact path="/orderCompletev2" element={<OrderCompleteV2 />} />
        <Route exact path="/userProfilev2" element={<UserProfileV2 />} />

    </Routes>
    </BrowserRouter>
    </div>
  )
}
