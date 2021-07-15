import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';
import {Route,Link} from 'react-router-dom';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { Navbar,NavDropdown,FormControl,Button,Nav,Form } from 'react-bootstrap';
//import './navbar.css'
import $ from 'jquery'

const NavBar=()=>{


    return(

      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">EFF_JAB</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/book">Book Appointment</Nav.Link>
            <Nav.Link href="/upvote">Upvote</Nav.Link>
          </Nav>
        </Navbar>
      </div>

    );

}

export default NavBar;