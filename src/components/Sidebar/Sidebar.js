import React from 'react'
import "./Sidebar.css"
import { useNavigate } from 'react-router-dom'
export default function Sidebar() {
    const navigate=useNavigate()
  return (
    <div className="sidebar-menu">
      <ul>
        <li onClick={()=>{navigate("/")}}>Dashboard</li>
        <hr/>
        <li onClick={()=>{navigate("/students")}} className="student">STUDENT</li>
        <li onClick={()=>{navigate("/mentors")}} className="mentor">Mentors</li>
      </ul>
    </div>
  )
}
