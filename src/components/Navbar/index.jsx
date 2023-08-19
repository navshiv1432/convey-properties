import React, { useState } from 'react'
import './index.css'


const navbarData = [
    {
        id:1,
        tabName:"RENT/SALE",
    },
    {
        id:2,
        tabName:"POST PROPERTY",
    },
    {
        id:3,
        tabName:"SIGN IN",
    },
    {
        id:4,
        tabName:"SIGN UP",
    },
    {
        id:5,
        tabName:"MENU",
    },
]

const Navbar = () => {
    const [activeTab , setActiveTabId] = useState(navbarData[0].id)

    const getActiveTab = (id) =>{
        setActiveTabId(id)
        console.log(activeTab)
    }

  return (
    <nav className='navbar-container'>
        <div className='logo'>
           <img src="https://bhrproperties.in/static/media/logo.0269970798b767c8cbad.png" alt="website-logo" className='logo-img' />
        </div>
        <ul className='navbar-tab-container'>
           {navbarData.map(eachTab =>(
            <li key={eachTab.id}>
                <button onClick={() =>getActiveTab(eachTab.id)} className={eachTab.id === activeTab ? "nav-button active":"nav-button"}> {eachTab.tabName}</button>
            </li>
           ))}
        </ul>
    </nav> 
  )
}

export default Navbar