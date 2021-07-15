//import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';
import {Route,Link} from 'react-router-dom';
//import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import { Navbar,NavDropdown,FormControl,Button,Nav,Form } from 'react-bootstrap';
//import './navbar.css'
//import $ from 'jquery'

const NavBar=()=>{


    return(

      <div>
        <Navbar bg="dark" variant="dark" style={{'borderRadius':'0px'}}>
          <Navbar.Brand href="/">EFF_JAB</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
            <Nav.Link href="/community">Community</Nav.Link>
            <Nav.Link href="/upvote">Upvote</Nav.Link>
            <Nav.Link href="https://covid19selfdiagnosis.herokuapp.com/">Self Diagnosis</Nav.Link>
          </Nav>
        </Navbar>
      </div>

    );

}

export default NavBar;