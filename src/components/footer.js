import React from 'react'

const Footer = () => {
  return (
    <div
      className="div container-fluid text-white"
      style={{ backgroundColor: '#000' }}
    >
      <div className="row">
        <div className="footer container">
          <div className="row py-4">
            <div className="col-lg-4 text-center">
              <img
                src="https://reamc.com/wp-content/uploads/2018/01/logo.png"
                alt=""
                className="img-fluid"
                style={{ height: '50px' }}
              />
              |
              <span className="font-weight-bold">
                &nbsp;&nbsp; Enjoy yourself.
              </span>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4 text-center">
              <p className="mb-0 font-weight-bold">Privacy Policy</p>
              <p className="text-muted">
                &copy; 2021 RAMS Engineering & Asset Management Consultancy
                Limited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
