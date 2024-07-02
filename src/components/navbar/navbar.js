import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import { islogin } from "../../utils";
import { useState } from "react";


function Navbare() {



  const clickhandler=()=>{
    document.cookie = "username=admin; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/";
  }

    let expand = "md"
  return (
    <Navbar expand="lg" style={{backgroundColor:" rgb(108, 151, 145)"}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{fontFamily:"lalezar" , fontSize:"25px"}}>کاشف الشفا </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link">صفحه اصلی</NavLink>
            <NavLink to="/about" className="nav-link">درباره ما</NavLink>
            <NavLink to="/article" className="nav-link">مقالات</NavLink>
            <NavLink to="/panel" className="nav-link">پنل</NavLink>
            {islogin() ? (
              <NavLink onClick={clickhandler} to="/login" className="nav-link">خروج</NavLink>
            ):(
              <NavLink to="/login" className="nav-link">ورود</NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navbare;
