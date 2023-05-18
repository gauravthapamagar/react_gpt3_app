import React, {useState } from 'react';
//importing icons
import { RiMenu3line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';
//BEM ->Block Element Modifier
const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);//here toggleMenu is a state variable and setToggleMenu is the settler function 
  //here [] syntax is called array destructing and it lets you to read values from the array.The array returned by useState has exactly two items
  
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src = {logo} alt="logo"/>
          </div>
          <div className="gpt3__navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">library</a></p>
          </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color = "#fff" size = {27} onClick={() => setToggleMenu(false)}/>


        }

      </div>
    </div>
  )
}

export default Navbar
