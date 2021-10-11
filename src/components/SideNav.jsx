import React, {useState} from 'react';
import {Offcanvas, Button, Navbar, Nav, Container} from "react-bootstrap"
import { ListGroup, ListGroupItem } from 'reactstrap';
import {BsGrid} from "react-icons/bs"
import logo from "../assets/logo.png"

const SideNav = () => {

    
  return (
    <>
      <div className="overflow-hidden">
            <Navbar collapseOnSelect bg="light" expand="md">
              <Container>
              <Navbar.Brand href="/"><img src={logo} alt="logo" width="75px"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" >
                  <Nav.Link href="#css">Welcome to CSS</Nav.Link>
                  <Nav.Link href="#hod">Welcome message from H.O.D</Nav.Link>
                  <Nav.Link href="#history">History</Nav.Link>
                  <Nav.Link href="#lecturers">Lecturers</Nav.Link>
                  <Nav.Link href="#executives">Executives</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
        <div class="row">
          <div class="col-3 px-1 position-fixed d-none d-md-block" id="sticky-sidebar">
            <h3 className="m-2">About Us</h3>
          <div class="list-group list-group-flush">
            <a href="#css" class="list-group-item">Welcome to CSS</a>
            <a href="#hod" class="list-group-item">Welcome message from H.O.D</a>
            <a href="#history" class="list-group-item">History</a>
            <a href="#lecturers" class="list-group-item">Lecturers</a>
            <a href="#executives" class="list-group-item">Executives</a>
</div>
            
        </div>
        <div class="col offset-md-3 px-md-4 bg-dark text-light" id="main">
            <div className="container">
            <h1 id="css">Welcome To CSS</h1>
            <p>Community Science Society department currently runs one undergraduate programme in Computer Science and two postgraduate programmes in Computer Science and Information Technology. The Department recently introduced aparallel programme in BSc Computer Science as a result of admission quota for the regular programme which stands at about 150 students.This programme is the same as the BSc Computer Science that runs in the regular mode. Regular mode is a terminology used in refering to the first set of students that the approved quota allows. The students are taught by the same lecturers and supported by the same Technicians with the same laboratories, libaries and other facilities. They also have their lectures at the same time as the Regular students and in some lectures they sit in the same lecture room with the regular students. </p>
            <h1 id="hod">Welome Message From H.O.D</h1>
            <p>We welcome you all to this community. You are never alone, trust me. You will be guided and head you toward a great career. Together we stand, divided we fall. Therefore we are to help each other achieve his or her dream. Do not keep all you know. It will not help the community.Our aim is to give back to the community using technology. Once again welcome to Computer Science Society. The society of money makers.The society of problem-solving.The society of technology.</p>
            <h1 id="history">History</h1>
            <p>Computer Science Society came about not long ago. With so many past leaders like Master Amos Aidoo, Master Isaiah Amo Mensah,Master Justice Appiah, Master Emmanuel Addo(Astro),Madam Siaw Jacqueline,Master Alfred Benefo,Master Isaac etc who have all contributed to this community and made it a better place for developers in KNUST. </p>
            <h1 id="lecturers">Lecturers</h1>
            <p>

Ibrahim Farouck 
Lecturer</br>



Emmanuel Ahene
Lecturer</br>



Gaddafi Abdul-Salaam
Senior Lecturer</br>



Edward Danso Ansong
Lecturer</br>



Emmanuel Ofori Oppong
Lecturer</br>



Dominic Asamoah
Lecturer</br>



Frimpong Twum
Senior Lecturer</br>



Joseph Kobina Panford
Senior Lecturer</br>



Kwaku Agyepong Pabbi
Lecturer</br>



Michael Franklin Bosu
Lecturer</br>



Yaw Marfo Missah
Lecturer</br>



Najim Ussiph
Lecturer</br>



Michael Asante
Senior Lecturer</br>



James Ben Hayfron-Acquah
Senior Lecturer</br>

Head of Department</p>
            </div>
        </div>
    </div>
</div>
    </>
  );
}

export default SideNav;
