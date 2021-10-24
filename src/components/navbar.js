import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'

const Navbar = () => {
  useEffect(() => {
    $(function () {
      $('.menu-icon').click(function () {
        $(this).toggleClass('hover')
        $('.nav-lists').toggleClass('is-active-now')
        $('.drawer').toggleClass('open-drawer')
      })
    })
  }, [])

  return (
    <div style={{ fontFamily: 'Raleway' }}>
      <NavLink to="/" className="logo-holder">
        <img
          src="https://reamc.com/wp-content/uploads/2018/01/logo.png"
          alt=""
          className="img-fluid"
        />
      </NavLink>

      <div className="nav-section text-dark">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-1 col-5"></div>

            <div className="col-lg-9 col-md-11 col-7 d-flex align-items-center pr-md-5">
              <ul className="nav-lists mr-3 ml-auto d-none d-md-block">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink to="/about">About</NavLink>
                </li>

                <li>
                  <NavLink to="/our-work">Our Work</NavLink>
                </li>

                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>

              <div className="menu-icon ml-auto ml-md-0 sidebarCollapse">
                <span></span>
                <p id="menu-hover"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
