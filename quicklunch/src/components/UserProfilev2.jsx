import { useState } from "react";

import { useSelector, useDispatch } from 'react-redux';
import {
  addUser,
} from '../redux/userSlice';
import { Link } from "react-router-dom";


export default function UserProfileV2() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [vegan, setVegan] = useState(false);
  const [paleo, setPaleo] = useState(false);
  const [keto, setKeto] = useState(false);
  const [peanuts, setPeanuts] = useState(false);
  const [shellfish, setShellfish] = useState(false);
  const [gluten, setGluten] = useState(false);

  const [uCreate, setucreate] = useState(false);




  const handleChange = (option) => {
    if(option === "vegan"){ setVegan(!vegan) }
    if(option === "paleo"){ setPaleo(!paleo) }
    if(option === "keto"){ setKeto(!keto) }
    if(option === "peanuts"){ setPeanuts(!peanuts) }
    if(option === "shellfish"){ setShellfish(!shellfish) }
    if(option === "gluten"){ setGluten(!gluten) }
  }

  const dispatch = useDispatch();
    const userSelector = useSelector(state => state.user.users);

    const handleNewUser = (userIndex, name, phone, password, vegan, paleo, keto, peanuts, shellfish, gluten) => {
      setucreate(true);
      dispatch(addUser({ userIndex, name, phone, password, vegan, paleo, keto, peanuts, shellfish, gluten}));
      };

  return(
    <div className="hero min-h-screen bg-base-200">   
    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
      {!uCreate &&<div>
      <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up</h1>
      <p className="py-6">Please setup your profile for a better ordering experience</p>
    </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone number</span>
          </label>
          <input type="phone" placeholder="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <h2 className="font-bold">Dietary Preferences</h2>
        <div className="form-control mb-6 flex flex-row">
          <input type="checkbox" className="checkbox" checked={vegan} onChange={()=>handleChange("vegan")}/>
          <p>Vegan</p>
          <input type="checkbox" className="checkbox" checked={paleo} onChange={()=>handleChange("paleo")} />
          <p>Paleo</p>
          <input type="checkbox" className="checkbox" checked={keto} onChange={()=>handleChange("keto")}/>
          <p>Keto</p>
        </div>
        <h2 className="font-bold">Allergies</h2>
        <div className="form-control mb-6 flex flex-row">
          <input type="checkbox" className="checkbox"  checked={peanuts} onChange={()=>handleChange("peanuts")} />
          <p>Peanuts</p>
          <input type="checkbox" className="checkbox"  checked={shellfish} onChange={()=>handleChange("shellfish")}/>
          <p>Shellfish</p>
          <input type="checkbox" className="checkbox"  checked={gluten} onChange={()=>handleChange("gluten")}/>
          <p>Gluten</p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={()=>{handleNewUser(0,name, phone, password, vegan, paleo, keto, peanuts, shellfish, gluten)}}>Sign up</button>
        </div>
      </div>}
      </div>



      {/* User profile begins here */}
      {uCreate &&<div className="self-center">
        <h1 className="font-bold text-3xl mb-10">Welcome, {userSelector[0].name.toString()}!</h1>
        <p>Phone: {userSelector[0].phone.toString()}</p>        
        <p>Dietary Preferences: <span className="italic">{userSelector[0].keto ?"Keto": ""} {userSelector[0].paleo?"Paleo":""} {userSelector[0].vegan?"Vegan":""}</span></p>
        <p>Allegeies: <span className="italic">{userSelector[0].peanuts ?"Peanuts ":""}{userSelector[0].shellfish?"Shellfish ":""}{userSelector[0].gluten?"Gluten":""}</span> </p>
        <button className="w-full btn btn-primary my-20"><Link to="/start">Order Now</Link></button>
      </div>}
    </div>
  
  </div>
  )

  // return (
  //   <div>
  //     <h1>User Profile</h1>
  //     <div>
  //       <h2>Name: {user.name}</h2>
  //       <p>Email: {user.email}</p>
  //       <p>Address: {user.address}</p>
  //       <p>Phone: {user.phone}</p>
  //       <h3>Order History:</h3>
  //       <ul>
  //         {user.orders.map(order => (
  //           <li key={order.id}>
  //             Order ID: {order.id} - Date: {order.date} - Total: ${order.total}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );
}