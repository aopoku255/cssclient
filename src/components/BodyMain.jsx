import React, {Component} from 'react';
import {Carousel} from "react-bootstrap"
import logo from "../assets/logo.png"
import learn from "../assets/learn.svg"
import conn from "../assets/conn.svg"
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
            <div className="row carousel justify-content-center align-items-center">
              <div className="col-md-6 wow bounceInLeft">
              <h3 className="display-4 wow bounceInDown" data-wow-delay="1s">CSS Community</h3>
              <p className="lead">Computer Science Society is a community of developers.</p>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque ab molestias, nam inventore sit incidunt ad sunt eius nobis voluptatibus delectus cupiditate, aperiam repellendus, dolorum possimus fugit quibusdam facilis.</p>
              </div>
              <div className="col-md-6 wow bounceInRight">
                <img src={logo} alt="" className="img-fluid w-75 d-block mx-auto"/>
              </div>
            </div>
          </div>
      </Carousel.Item>
      <Carousel.Item className="bg-dark text-light">
          <div className="container mx-3">
            <div className="row carousel justify-content-center align-items-center">
              <div className="col-md-6 wow slideInLeft">
                <img src={conn} alt="" className="img-fluid w-50 d-block mx-auto "/>
              </div>
              <div className="col-md-6">
              <h3 className="display-4 wow bounceInDown" data-wow-delay="1s">Connect With Friends</h3>
              <p className="lead wow bounceInRight" data-wow-delay="0.5s">Computer Science Society is a community of developers.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati recusandae ut, labore nobis consequuntur dolores nemo ullam laborum assumenda esse molestiae delectus voluptates inventore. Tempora laborum quasi placeat voluptatum.</p>
              <a href="/login" className="btn btn-primary mb-5 wow slideInRight" data-wow-delay="1.5s">connect with friends</a>
              </div>
            </div>
          </div>
      </Carousel.Item>
      <Carousel.Item className="bg-primary text-light">
          <div className="container mx-3">
            <div className="row carousel justify-content-center align-items-center">
              <div className="col-md-6">
                <img src={learn} alt="" className="img-fluid w-50 d-block mx-auto"/>
              </div>
              <div className="col-md-6">
              <h3 className="display-4 wow bounceInDown">Access Learning Materials</h3>
              <p className="lead wow slideInRight" data-wow-delay="1s">Computer Science Society is a community of developers.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati recusandae ut, labore nobis consequuntur dolores nemo ullam laborum assumenda esse molestiae delectus voluptates inventore. Tempora laborum quasi placeat voluptatum.</p>
              <a href="/login" className="btn btn-outline-light mb-5 wow bounceInRight shadow-lg" data-wow-delay="1.5s">access learning materials</a>
              </div>
            </div>
          </div>
      </Carousel.Item>
      <Carousel.Item className="bg-success text-light">
          <div className="container">
            <div className="row carousel justify-content-center align-items-center">
              <div className="col-md-6">
              <h3 className="display-4 wow bounceInDown">Solve Problems Together</h3>
              <p className="lead wow slideInRight" data-wow-delay="1s">Computer Science Society is a community of developers.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati recusandae ut, labore nobis consequuntur dolores nemo ullam laborum assumenda esse molestiae delectus voluptates inventore. Tempora laborum quasi placeat voluptatum.</p>
              
              </div>
              <div className="col-md-6">
                <img src={think} alt="" className="img-fluid w-75 d-block mx-auto"/>
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
