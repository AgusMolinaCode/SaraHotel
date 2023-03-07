import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineCalendar} from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className="navbar z-10 bg-neutral-50 opacity-80 brightness-95 fixed">

        <div className="navbar-start lg:pl-[8rem]">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                
                <Link to={'/rooms'}>
                    <li><a>Rooms</a></li>
                </Link>
                
                <Link to={'/activities'}>
                    <li><a>Activities</a></li>
                </Link>

                <Link to={'/contact'}>
                    <li><a>Contact</a></li>
                </Link>

                <Link to={'/#reserve'}>
                    <li><a>RESERVE</a></li>
                </Link>
            </ul>
            </div>

            <Link to={'/'}>
                <a className="cursor-pointer normal-case font-principal text-5xl">Sara.</a>
            </Link>
            
        </div>

        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            
            <Link to={'/rooms'}>
                <li tabIndex={0}>
                    <a className='font-secundario pb-1 text-xl font-bold'>
                    ROOMS
                    </a>
                </li>
            </Link>

            <Link to={'/activities'}>
                <li tabIndex={0}>
                    <a className='font-secundario pb-1 text-xl font-bold'>
                    ACTIVITIES
                    </a>
                </li>
            </Link>

            {/* <li tabIndex={0}>
                <a className='font-secundario pb-1 text-xl font-bold'>
                SERVICES
                </a>
            </li> */}
            
            <Link to={'/contact'}>
                <li tabIndex={0}>
                    <a className='font-secundario pb-1 text-xl font-bold'>
                    CONTACT US
                    </a>
                </li>
            </Link>    
            
            </ul>
        </div>

        <div className="navbar-end lg:pr-[8rem]">
            <NavLink to={'/#reserve'}>
                <a  className="md:flex hidden btn bg-principal border-neutral-700 border-2 text-black font-bold text-lg pt-1 font-secundario hover:bg-hover shadow-2xl"><AiOutlineCalendar className='pb-2' size={25}/> RESERVE</a>
            </NavLink>
        </div>

    </div>
  )
}

export default Navbar