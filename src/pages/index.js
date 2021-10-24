import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import Mobile from '../components/mobile'
import Navbar from '../components/navbar'

const Index = () => {
  return (
    <div>
      <Navbar />
      <Mobile />
      <section className="index-page">
        <header id="video-header">
          <div className="container-fluid">
            <div className="row text-center">
              <img
                src="https://images.pexels.com/photos/28614/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="img-fluid z-depth-1  index_video"
                alt="company"
              />
              <div id="video-writings" className="col-lg-12 col-sm-12">
                <h1 className="display-3 font-weight-bold text-white">
                  <span
                    className="txt-rotate"
                    data-period="2000"
                    data-rotate='[ "Welcome To", "RAMS Engineering &", "Asset Management.", "Limited." ]'
                  ></span>
                </h1>
              </div>
            </div>
          </div>

          <div className="dark-overlay"></div>
        </header>

        <div className="container-fluid text-white">
          <div className="row">
            <div className="col-lg-8 pb-5 pt-3" id="indexContainer1">
              <div className="row">
                <div
                  className="col-lg-6 workText"
                  style={{ color: '#fff', zIndex: 15 }}
                >
                  <hr
                    style={{
                      width: '50px',
                      backgroundColor: '#fff',
                      left: 0,
                      marginLeft: '0',
                    }}
                  />
                  <h5 className="font-weight-bold">Our work</h5>
                  <p
                    className="font-weight-bold"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    At RAMS Engineering & Asset Management Consultancy Limited,
                    we are committed to producing high-quality consultation
                    services to exceed customer expectations. Our top-end
                    clients include Transport for London, Hitachi Rail Europe,
                    Hitachi Rail Japan, Alstom Transportation, UK Ministry of
                    Defence (MOD) and Siemens. Our services include direct
                    consultancy services and training..
                  </p>
                </div>
              </div>
              <div className="dark-overlay"></div>
            </div>
            <div className="col-lg-4 view overlay zoom" id="indexContainer2">
              <Link to="/about" className="text-white">
                <img
                  src="https://ibi-global.com/userfiles/image/engineering-team-ibi-9838.jpg"
                  width="100%"
                  className="img-fluid index-image"
                  alt=""
                />
                <h2 className="font-weight-bold indexContainerText">About</h2>
                <div className="dark-overlay"></div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 view overlay zoom" id="indexContainer3">
              <Link to="/our-work" className="text-white">
                <img
                  src="https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/24021908.jpg?itok=EH1QNKjj"
                  className="img-fluid index-image"
                  alt=""
                />
                <h2 className="font-weight-bold indexContainerText">
                  Services
                </h2>
                <div className="dark-overlay"></div>
              </Link>
            </div>
            <div className="col-lg-4 view overlay zoom" id="indexContainer4">
              <Link className="text-white" to="/courses">
                <img
                  src="https://images.theconversation.com/files/120143/original/image-20160426-1359-1b45phm.jpg"
                  className="img-fluid index-image"
                  alt=""
                />
                <h2 className="font-weight-bold indexContainerText">
                  In-House Training Courses
                </h2>
                <div className="dark-overlay"></div>
              </Link>
            </div>
            <div className="col-lg-4 view overlay zoom" id="indexContainer5">
              <Link className="text-white" to="/shop">
                <img
                  src="https://cdn.rit.edu/images/facility/MachineShop.jpg"
                  className="img-fluid index-image"
                  alt=""
                />
                <h2 className="font-weight-bold indexContainerText">Shop</h2>
                <div className="dark-overlay"></div>
              </Link>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-12 pt-5 pb-5 pl-5"
              style={{ backgroundColor: 'rgb(26, 23, 23)' }}
            >
              <h1 className="text-white font-weight-bold">
                Have an inquiry or want to make an appointment?
              </h1>
              <Link to="/contact" className="contactlink text-white">
                Let Talk <i className="fa fa-angle-right"></i>
                <hr
                  className="mb-5"
                  style={{ background: '#fff', width: '70px' }}
                />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  )
}

export default Index
