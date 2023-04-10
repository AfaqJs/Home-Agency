import React, {useState} from 'react'
import { logo, search, menu, close }from '../assets'
import {navLinks} from '../constants'
import { Link } from 'react-scroll'



const Header = () => {
  const [toggle, setToggle] = useState(true)

  const handelToggle = ()=>{
    if(toggle === false) {
      setToggle(true)
    }else{
      setToggle(false)
    }
  }
  return (
    <>
    <div className="flex flex-1 justify-between items-center font-poppins sm:py-[20px] w-full">
      <img className='md:w-[100px]h-[24px] w-[124px] h-[32px] sm:block hidden  main-logo' src={logo} alt="logo" />
        <ul className="sm:flex hidden flex-row md:text-[14px] text-[10px]">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`${index === navLinks.length-1  ? "mr-0" : "mr-10"} hover:text-[#00bc9c] cursor-pointer font-medium text-[12px] `}>{nav.title} 
            </li>
          ))}
        </ul>
        <img src={search} alt="search-icon" className="w-[20px] h-[20px] sm:block hidden"/>
    </div>

    <div className="sm:hidden flex flex-1 justify-between items-center py-[20px]">
      <img className='w-[100px] h-[24px] sm:hidden block  main-logo' src={logo} alt="logo" />
      <img src={toggle ? menu : close} alt="menu" className="w-[28px] h-[28px] object-contain menu-icon" onClick={handelToggle}/>
    </div>
    <ul className={`sm:hidden flex justify-end flex-col  text-[13px] items-center  absolute z-10 right-[1.6rem] top-[5rem] p-6 bg-black-gradient text-white rounded-[10px] ${toggle ? "hidden" : "block"} sidebar`}>
      {navLinks.map((nav, index) => (
        <li className={`${index === navLinks.length -1 ? "pb-[0px]" : "pb-[10px]"} cursor-pointer hover:bg-red hover:text-[#2febcb] `} key={nav.id}>{nav.title}</li>
      ))}
    </ul>

    </>
  )
}

export default Header
