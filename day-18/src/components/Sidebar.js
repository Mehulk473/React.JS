import React from 'react';
import '../styles/Sidebar.css'
import {useState} from 'react'

const Sidebar = () => {
  const [sidebar,setsidebar]=useState(false)
    const togglesidebar=()=>{
      setsidebar(!sidebar)
  return (
    <>    <button className='hamburger' onClick={togglesidebar}>&#9776;</button>
      <div className={sidebar?'sidebar active':'sidebar'}>
      <button className='close-btn' onClick={togglesidebar}>&times;</button>
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
      </div>
      <div className='content'>
        <h1>Welcome to App! </h1>
        <p>Click on Hamburger ICON</p>
      </div>
      </>

  );
};
}

export default Sidebar;
