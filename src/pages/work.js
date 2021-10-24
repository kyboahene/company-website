import React, { useEffect } from 'react'
import $ from 'jquery'

import Mobile from '../components/mobile'
import Navbar from '../components/navbar'
import '../pagepiling/jquery.work'
import '../pagepiling/work.css'

const Work = () => {
  useEffect(() => {
    $(document).ready(function () {
      $('#pagePiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: ['#EB996E', '#ee005a', '#2C3E50', '#39C', '#35A'],
        navigation: {
          position: 'right',
        },
        afterRender: function () {
          $('#pp-nav').addClass('custom')
        },
        afterLoad: function (anchorLink, index) {
          if (index > 1) {
            $('#pp-nav').removeClass('custom')
          } else {
            $('#pp-nav').addClass('custom')
          }
        },
      })

      $('#showExamples').click(function (e) {
        e.stopPropagation()
        e.preventDefault()
        $('#examplesList').toggle()
      })

      $('html').click(function () {
        $('#examplesList').hide()
      })
    })
  }, [])

  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <Mobile />
      <div id="pagePiling">
        <div className="section" id="section1">
          <div className="container details">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://reamc.com/wp-content/uploads/2018/01/alstom2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-6 description">
                <h1 className="text-white">Transport For London (TFL), UK.</h1>
                <ol className="mt-3 lead">
                  <li>Jubilee Line Smart Maintenance Optimization Project.</li>
                  <li>Safety and reliability analyses.</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="event-overlay"></div>
          <p
            className="animated bounce infinite"
            style={{
              marginTop: '10%',
              color: '#fff',
            }}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </p>
        </div>
        <div className="section" id="section2">
          <div className="container details h-40" s>
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://www.cityam.com/wp-content/uploads/2020/11/investment-fund-glil-infrastructure-today-announced-that-it-will-buy-a-30-per-cent-equity-stake-in-rolling-stock-firm-agility-trains-east-ate-from-hitachi-rail-628726686-scaled.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-6 description">
                <h1>Hitachi Rail Europe, UK.</h1>
                <ol>
                  <li className="lead">
                    {' '}
                    Delivered HS2 RAMS Pre-Qualification Questionnaire on behalf
                    of Hitachi Rail Europe.
                  </li>
                  <li className="lead">
                    {' '}
                    Delivered FMECA & RAMS awareness training for RAMS and
                    System Engineers at Hitachi Rail.
                  </li>
                  <li className="lead">
                    RAMS LCC Approvals and Evaluation for className 800/801
                    Bi-mode trains for Hitachi Rail Europe.
                  </li>
                  <li className="lead">
                    Nexus Bid RAMS & Performance support on behalf of Hitachi
                    Rail Europe.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="event-overlay"></div>
        </div>
        <div className="section" id="section3">
          <div className="container details">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://images.pexels.com/photos/2169286/pexels-photo-2169286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-6 description">
                <h1 className="text-white">Alstom Transportation UK.</h1>
                <ol className="mt-3 lead">
                  <li>
                    Northern Line reliability and safety analyses to support the
                    maintenance extensions for the 95 tube stocks..
                  </li>
                  <li>
                    Northern Line Smart Maintenance Extension projects for A, A2
                    and A6 inspection tasks.
                  </li>
                  <li>
                    Northern Line Smart Maintenance Extension projects for B
                    minor and B major inspection tasks.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="event-overlay"></div>
        </div>
        <div className="section" id="section4">
          <div className="container details">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://social-innovation.hitachi/-/media/project/hitachi/sib/en/case_studies/mobility_iep/image/img_branding.jpg?la=en-US&upd=20181115102642Z&hash=4E37D02667B44BE6726EA6A503126A81"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-6 description">
                <h1 className="text-white">Hitachi Rail Japan.</h1>
                <ol className="mt-3 lead">
                  <li>
                    Northern Line reliability and safety analyses to support the
                    maintenance extensions for the 95 tube stocks..
                  </li>
                  <li>
                    Northern Line Smart Maintenance Extension projects for A, A2
                    and A6 inspection tasks.
                  </li>
                  <li>
                    Northern Line Smart Maintenance Extension projects for B
                    minor and B major inspection tasks.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="event-overlay"></div>
        </div>
        <div className="row pt-5 pb-5">
          <div className="col-lg-12 text-center">
            <p className="text-white">
              <i className="fab fa-facebook  px-4"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram px-4"></i>
              <i className="fab fa-youtube"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
