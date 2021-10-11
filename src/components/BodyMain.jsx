import React, {Component} from 'react';
import {Carousel} from "react-bootstrap"
import {BsChevronRight} from "react-icons/bs"
import logo from "../assets/logo.png"
import learn from "../assets/learn.svg"
import conn from "../assets/conn.svg"
import css from "../assets/social.svg"
import think from "../assets/think.svg"
import WOW from "wowjs"

class BodyMain extends Component{
  
  componentDidMount(){
    new WOW.WOW({
      live:true
    }).init()
  }

  render(){
  return (
    <>
      
    <Carousel  controls={false}>
      <Carousel.Item className="bg-light text-dark">
          <div className="container">
            <div className="row carousel justify-content-start align-items-center">
              <div className="col-md-6 wow bounceInLeft" data-wow-duration="2s">
              <h3 className="display-6 wow bounceInDown" data-wow-delay="1s">CSS Community</h3>
              <p className="lead">Computer Science Society is a community of developers.</p>
              <p className="lead">A community of developers who tends to solve problems around them with technology.</p>
              <h4 className="wow bounceInRight" data-wow-delay="1.5s">Swipe <BsChevronRight/></h4>
              </div>
              <div className="col-md-6 wow bounceInRight" data-wow-duration="3s">
                <img src={logo} alt="" className="img-fluid w-75 d-block mx-auto"/>
              </div>
            </div>
          </div>
      </Carousel.Item>
      <Carousel.Item className="bg-dark text-light">
          <div className="container">
            <div className="row carousel justify-content-center align-items-center">
              <div className="col-md-6 wow bounceInLeft" data-wow-duration="3s">
                <img src={conn} alt="" className="img-fluid d-block mx-auto w-50 "/>
              </div>
              <div className="col-md-6 wow bounceInRight" data-wow-duration="2s">
              <h3 className="display-6 wow bounceInDown" data-wow-delay="1s">Connect With Friends</h3>
              <p className="lead wow bounceInRight" data-wow-delay="0.5s">We are one community making the world a better place for humanity. Meet fellow developers and engineers and share ideas.</p>
              <a href="/login" className="btn btn-primary mb-5 wow slideInRight" data-wow-delay="1.5s">connect with friends</a>
              </div>
            </div>
          </div>
      </Carousel.Item>
      <Carousel.Item className="bg-primary text-light">
          <div className="container">
            <div className="row carousel justify-content-center align-items-center">
              <div className="col-md-6 wow bounceInLeft" data-wow-duration="3s">
                <img src={learn} alt="" className="img-fluid d-block mx-auto w-50"/>
              </div>
              <div className="col-md-6 wow bounceInRight" data-wow-duration="2s">
              <h3 className="display-6 wow bounceInDown">Access Learning Materials</h3>
              <p className="lead wow slideInRight" data-wow-delay="1s">Get all your course material here. Ranging from academics and non-academics.Do not forget to share and review interesting resources.</p>
              <a href="/login" className="btn btn-outline-light mb-5 wow bounceInRight shadow-lg" data-wow-delay="1.5s">access learning materials</a>
              </div>
            </div>
          </div>
      </Carousel.Item>
      
      <Carousel.Item className="bg-danger text-light">
          <div className="container">
            <div className="row carousel justify-content-center align-items-center">
              <div className="col-md-6 wow bounceInLeft" data-wow-duration="3s">
                <img src={css} alt="" className="img-fluid d-block mx-auto w-50"/>
              </div>
              <div className="col-md-6 wow bounceInRight" data-wow-duration="2s">
              <h3 className="display-6 wow bounceInDown">Solve Weekly Problems</h3>
              <p className="lead wow slideInRight" data-wow-delay="1s">Here you get to solve a little bit challenging problem to help improve your coding and problem solving skills.Try again if you did not do well in the challenge.</p>
              <a href="/login" className="btn btn-outline-light mb-5 wow bounceInRight shadow-lg" data-wow-delay="1.5s">solve weekly problems</a>
              </div>
            </div>
          </div>
      </Carousel.Item>
      
      
    </Carousel>
    </>
  );
  }
}

export default BodyMain;
