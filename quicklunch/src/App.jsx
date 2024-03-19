import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
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
import AdditionalV2 from './components/additionalv2';
import OrderCompleteV2 from './components/OrderCompletev2';
import UserProfileV2 from './components/UserProfilev2';

export default function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/start" element={<FoodOptions />} />
          <Route path="/crust" element={<Crust />} />
          <Route path="/sauce" element={<Sauce />} />
          <Route path="/toppings" element={<Toppings />} />
          <Route path="/additional" element={<Additional />} />
          <Route path="/orderComplete" element={<OrderComplete />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/homev2" element={<HomeV2 />} />
          <Route path="/startv2" element={<FoodOptionsV2 />} />
          <Route path="/crustv2" element={<CrustV2 />} />
          <Route path="/saucev2" element={<SauceV2 />} />
          <Route path="/toppingsv2" element={<ToppingsV2 />} />
          <Route path="/additionalv2" element={<AdditionalV2 />} />
          <Route path="/orderCompletev2" element={<OrderCompleteV2 />} />
          <Route path="/userProfilev2" element={<UserProfileV2 />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
