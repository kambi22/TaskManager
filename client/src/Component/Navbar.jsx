import React, { useContext } from "react"
import { Container, Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { MdLightMode, MdDarkMode, MdMenu } from "react-icons/md";
import { IconButton } from "@mui/material";

const NavbarComponent = (props) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div className="bg-success w-100">
      <Navbar className={!isDark ? 'ColoredLight ' : 'ColoredDark'} expand='md' sticky="top" style={{ height: '70px' }} >
        <Container className=" ">
          <NavbarBrand><strong className="text-white">Tech Stack Solutions</strong></NavbarBrand>
          <Nav className="text-white w-100 justify-content-end  ">
            <Nav.Link className="text-white me-5" onClick={() => navigate("/")} >Add Task</Nav.Link>
            <Nav.Link className="text-white me-5" onClick={() => navigate("/view")} >View Task</Nav.Link>
            <Nav.Link className="text-white me-5" onClick={() => navigate("/about")} >About</Nav.Link>
            
          
          
          </Nav>
         <Nav className="mb-2">
         <IconButton className={!isDark ? 'd-inline' : 'd-none'} onClick={toggleTheme} >
              <p className={!isDark ? 'd-inline h6 me-1' : 'd-none'}>Light</p>
              <MdLightMode />
            </IconButton>
            <IconButton className={isDark ? 'd-inline' : 'd-none'} onClick={toggleTheme}>
              <p className={isDark ? 'd-inline h6 me-1' : 'd-none'}>Dark</p>
              <MdDarkMode />
            </IconButton>
         </Nav>
        </Container>

      </Navbar>
    </div>
  )
};

export default NavbarComponent;
