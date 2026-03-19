import React from 'react';


    const NavLinks = [
  {
    "id": 1,
    "name": "Home",
    "path": "/"
  },
  {
    "id": 2,
    "name": "About",
    "path": "/about"
  },
  {
    "id": 3,
    "name": "Services",
    "path": "/services"
  },
  {
    "id": 4,
    "name": "Pricing",
    "path": "/pricing"
  },
  {
    "id": 5,
    "name": "Contact",
    "path": "/contact"
  },
  {
    "id": 6,
    "name": "Blog",
    "path": "/blog"
  }
]
const Navbar = () => {

    const linksNav = NavLinks.map(links=> <li key={links.id}><a  href={links.path}>{links.name}</a></li>)

    return (
        <div className="navbar bg-base-200 shadow-sm lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content font-semibold hover:text-red-500 bg-base-200 rounded-box z-1 mt-4 w-30 p-2 shadow">
                     {linksNav}
                    </ul>
                </div>
                <span className='ml-2'><img className='w-15 h-15 hover:border-green-500 border-2 border-red-500 rounded-[50%]' src={'fav.png'} alt="" /></span>
                <a className="btn btn-ghost text-2xl font-extrabold hidden lg:flex">Meal<span className='text-red-600'>Hub</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-red-500">
                   {linksNav}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-error btn-outline">Contact Us</a>
            </div>
        </div>
    );
};

export default Navbar;