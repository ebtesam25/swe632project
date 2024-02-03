export default function NavBar(){
    return(
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
    </div>
    <a className="btn btn-ghost text-xl">quick.lunch</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Menu</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Sign Up</a>
  </div>
</div>
        </div>
    )
}