import React, { useContext, useState } from "react"
import { Container, Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { MdLightMode, MdDarkMode, MdMenu, MdMenuBook } from "react-icons/md";
import { IconButton } from "@mui/material";
import Sidebar from "./Sidebar";
import Icon from '../assets/vite.svg'
const NavbarComponent = (props) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const sidebarHandler = () => {
      setOpen(!open)
  }
  const navigate = useNavigate();
  return (
    <div className="bg-success w-100 sticky-top">
     <Navbar className={!isDark ? 'ColoredLight ' : 'ColoredDark'} expand='md' sticky="top" style={{ height: '70px' }} >
        <Container className=" ">
          <Sidebar open={open} close={sidebarHandler}/>
          <div className="d-flex  me-auto">
            <IconButton className="d-sm-inline d-md-none me-auto " onClick={sidebarHandler}>
              <MdMenu/>
            </IconButton>
          <img src={Icon} className="mt-2" style={{height:'25px',width:'25px'}} alt="icon" />
          <NavbarBrand className="" ><strong className="text-white">Task Manager</strong></NavbarBrand>
          </div>
          <div className="d-md-block d-none w-100">
          <Nav className="text-white w-100 d-flex justify-content-end  ">
            <Nav.Link className="text-white me-5 " onClick={() => navigate("/")} >Add Task</Nav.Link>
            <Nav.Link className="text-white me-5" onClick={() => navigate("/view")} >View Task</Nav.Link>
            <Nav.Link className="text-white me-5" onClick={() => navigate("/about")} >About</Nav.Link>
          </Nav>
          </div>
         
          
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
