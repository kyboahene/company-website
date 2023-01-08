import React from 'react'
import Footer from '../components/footer'
import Mobile from '../components/mobile'
import Navbar from '../components/navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <Mobile />
      <header id="about-header" style={{ overflow: 'auto' }}>
        <div className="container-fluid">
          <div className="row text-center">
            <div id="about-writings" className="col-lg-12 col-md-12 col-sm-12">
              <h1 className="display-3 font-weight-bold text-white">
                About Us
              </h1>
            </div>
          </div>
        </div>

        <div className="dark-overlay"></div>
      </header>

      <section className="about-page">
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-lg-6 pt-5">
              <hr
                style={{
                  width: '50%',
                  backgroundColor: '#fff',
                  left: 0,
                  marginLeft: '0',
                }}
              />
              <h5 className="font-weight-bold">
                RAMS Engineering & Asset Management Consultancy Limited.{' '}
              </h5>
              <p className="lead">
                RAMS Engineering & Asset Management Consultancy Limited is a
                passionate, committed and a professional reliability, safety and
                asset management firm that provides direct technical
                consultancies services and training in the following fields;
                reliability, safety and asset management to many industries.
                RAMS Engineering & Asset Management Consultancy Limited
                objectives include practical solutions that maximises
                performance and optimises cost for clients.
              </p>
            </div>
            <div className="col-lg-6 pt-5">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="row pt-5 pb-5">
            <div className="col-lg-6 pt-5">
              <hr
                style={{
                  width: '100px',
                  backgroundColor: '#fff',
                  left: 0,
                  marginLeft: '0',
                }}
              />
              <h5 className="font-weight-bold">
                Who Are RAMS Engineering & Asset Management Consultancy Limited?{' '}
              </h5>
            </div>
            <div className="col-lg-6 pt-5">
              <div>
                <h5 className="font-weight-bold">Our Vision</h5>
                <p>
                  To be the ultimate centre for reliability and safety
                  engineering excellence.
                </p>
              </div>
              <div>
                <h5 className="font-weight-bold">Our Mission</h5>
                <p>
                  Our mission is to make reliability and safety engineering the
                  forefront of system development.
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-5 pb-5">
            <div className="col-lg-6">
              <hr
                style={{
                  width: '50px',
                  backgroundColor: '#fff',
                  left: 0,
                  marginLeft: '0',
                }}
              />
              <h5 className="font-weight-bold">The brain behind </h5>
              <p className="lead">
                Yaw Kyei Boahene is an experienced Principal RAMS and Asset
                Management Consultant and has worked for several rolling stock
                manufacturing organizations including; Bombardier
                Transportation, Alstom Transport and Hitachi Rail Europe and UK
                Ministry of Defence. He served in various engineering and
                leadership positions: System, Project, Reliability, Performance,
                Maintenance development, and RAMS LCC across Western Europe, the
                Middle East and Africa. He holds an MSc in Reliability
                engineering and asset management from the University of
                Manchester and a bachelor’s degree in Mechanical engineering
                from the University of Science and Technology , and Higher
                National Certificate in electrical and electronic engineering
                from the University of Teesside.
                <br />
                <br />
                He is a Chartered Engineer (CEng), a member of the Institution
                of Engineering and Technology, Certified Maintenance and
                Reliability Professional (CMRP) and Certified Reliability
                Engineer (CRE) of the American Society for Quality. He has three
                research publication relating to RAMS LCC and Maintenance
                Engineering.
              </p>
            </div>
            <div className="col-lg-6 pt-4">
              <img
                src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/2-construction-manager-sakkmesterkescience-photo-library.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>

          <div className="row pt-5 pb-5">
            <div className="col-xl-6 col-md-4 col-12">
              <hr
                style={{
                  alignSelf: 'left',
                  width: '120px',
                  backgroundColor: '#fff',
                  left: 0,
                  marginLeft: '0',
                }}
              />
              <h5 className="font-weight-bold">Our Partners</h5>
            </div>
            <div className="col-xl-6 col-md-8 col-12 ml-auto">
              <div className="row">
                <div className="col-md-3 col-4">
                  <a
                    href="https://www.eduardocalixto.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://image.jimcdn.com/app/cms/image/transf/none/path/s4bc92d6ca03a7d55/image/ib1b750e9831a5e66/version/1580223672/image.png"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-5 pb-5">
            <div className="col-lg-12 text-center">
              <p className="text-white">
                <a href="https://www.facebook.com/doremi.tv">
                  <i className="fab fa-facebook  px-4"></i>
                </a>
                <a href="https://www.twitter.com/TvDoremi">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/doremi.tv">
                  <i className="fab fa-instagram px-4"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCFfD2HeXZYm7sH5swrlW0MQ">
                  <i className="fab fa-youtube"></i>
                </a>
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </div>
  )
}

export default About
