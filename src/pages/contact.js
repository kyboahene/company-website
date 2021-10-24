import React from 'react'
import Footer from '../components/footer'
import Mobile from '../components/mobile'
import Navbar from '../components/navbar'

const Contact = () => {
  return (
    <>
      <Navbar />
      <Mobile />

      <section className="contact-page">
        <div className="container-fluid text-center text-white">
          <div className="row pt-5">
            <div className="col-lg-12 pt-5 py-5">
              <h3 className="font-weight-bold">Contact Us.</h3>
              <p>Let's Talk</p>
            </div>
          </div>
          <div className="row info">
            <div className="col-lg-12 py-5 text-center">
              <p className="mb-0">Company No: 10537811</p>
              <p className="mb-0">VAT No: 25867066</p>
              <a href="mailto:info@reamc.com" style={{ color: '#ff4444' }}>
                <p className="mb-0">info@reamc.com</p>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 py-5">
              <p className="text-white">
                <a
                  href="https://www.facebook.com/doremi.tv"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook  px-4"></i>
                </a>
                <a
                  href="https://www.twitter.com/TvDoremi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/doremi.tv"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram px-4"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCFfD2HeXZYm7sH5swrlW0MQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  )
}

export default Contact
