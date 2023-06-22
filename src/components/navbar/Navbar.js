import React from 'react'
import "./Navbar.css"
import { MdLocationOn } from "react-icons/md"
import { GrLanguage } from "react-icons/gr"
import { FiSearch } from "react-icons/fi"
import { AiOutlineUser } from "react-icons/ai"
import { Link, Routes, Route } from "react-router-dom"


function Navbar() {
  return (
    <div className=' container'>
        <div className="navbar">
          <div className="navbar__logo"></div>
          <div className="navbar__big">
          <div className="navbar__links">
            <div className="navbar__link">
            <Link to={"/"}>Menyu</Link>
            <Link to={"/about"}>Biz haqimizda</Link>
            <Link to={"/"}>Filiallar</Link>
            <Link to={"/contact"}>Kontaktlar</Link> 
            </div>
            <div className="navbar__local">
                <MdLocationOn/>
                <span>Yetkazib berish yoki...</span>
            </div>
            <div className="navbar__hudud">
                <GrLanguage/>
                <span>Namangan</span>
            </div>
            <select className='navbar__select' name="" id="">
                <option  value="uz">UZ</option>
                <option  value="ru">RU</option>
                <option  value="en">EN</option>
            </select>
            <div className="navbar__login">
                <AiOutlineUser/>
            </div>
          </div>
          <div className="navbar__inputs">
            <div className="navbar__input">
                <div className="navbar__search">
                    <FiSearch/>
                </div>
                <div className="navbar__inp">
                <input type="text" placeholder='Pishloqli tandir lavash' />
                </div>
            </div>
                <button className='navbar__batton'>Buyurtma</button>
          </div>
            
          </div>
        </div>
    </div>
  )
}

export default Navbar