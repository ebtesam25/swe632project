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

export default function App() {

  return (
    <div>
      <NavBar/>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/start" element={<FoodOptions />} />
        <Route exact path="/crust" element={<Crust />} />
        <Route exact path="/sauce" element={<Sauce />} />
        <Route exact path="/toppings" element={<Toppings />} />
        <Route exact path="/additional" element={<Additional />} />

    </Routes>
    </BrowserRouter>
    </div>
  )
}