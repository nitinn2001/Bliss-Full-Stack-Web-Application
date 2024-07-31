import React from 'react'
import "./Sidebar.css"
import add_icon from "/Users/nitinjeyakumar/Desktop/bliss.com/admin/src/assets/add_icon.png"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="add-items">
        <img src={add_icon} alt="" />
        <Link to="/add"><p>Add items</p></Link>
      </div>
      <div className="add-items">
        <img src={add_icon} alt="" />
        <Link to="/list"><p>List items</p></Link>
      </div>
    </div>
  )
}

export default Sidebar