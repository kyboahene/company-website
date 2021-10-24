import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'

const Mobile = () => {
  useEffect(() => {
    $(document).ready(function () {
      // mobile sidebar
      $('.sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
      })
    })
  }, [])

  return (
    <div>
      <nav id="sidebar">
        <ul className="navbar-nav mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link text-white mx-3" to="/">
              <i className="fa fa-home"></i>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white mx-3" to="/about">
              <i className="fa fa-address-card"></i>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white mx-3" to="/our-work">
              <i className="fa fa-calendar-alt"></i>
              Work
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link text-white mx-3" to="/contact">
              <i className="fa fa-phone"></i>
              Contact
            </NavLink>
          </li>
        </ul>
        <hr style={{ backgroundColor: '#fff' }} />
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0"></ul>
      </nav>
    </div>
  )
}

export default Mobile
