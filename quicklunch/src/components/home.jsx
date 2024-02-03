import { Link } from 'react-router-dom';
import Bg from '../assets/bg.jpg'
import Logo from '../assets/logo5.png'
export default function Home(){
    return(
        <div>

<div className="hero min-h-screen bg-base-200 p-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={Bg} className="max-w-lg max-h-sm rounded-full aspect-square object-cover shadow-2xl" />
    <div>
        <img src={Logo} className='w-24 mb-2'></img>
      <h1 className="text-5xl font-bold">QuickLunch</h1>
      <p className="py-6 text-lg">Welcome to QuickLunch! Dive into our world of fresh ingredients, endless combinations, and mouth-watering flavors. Whether you're craving a pizza, a hearty bowl, or a sandwich, we've got you covered with our build-your-own menu. Fast, fresh, and exactly how you want it - that's the QuickLunch promise!</p>
      <button className="btn btn-primary"><Link to="/start">Order Now</Link></button>
    </div>
  </div>
</div>
            
        </div>
    )
}