import { Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useContext } from "react"
import {ListGroupItem } from "react-bootstrap";
import {  MdDarkMode,  MdSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaAddressCard, FaList, FaUserTie } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";
const Sidebar = ({ open, close }) => {
    
    const { isDark, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();
    return (
        <div className=" ">
            <Drawer className="  w-75"   anchor="left" open={open} onClose={close}>
            
                <ListGroupItem className="b w-100" >
                    <ListItem className="bg-" style={{width:'280px'}}>
                        <ListItemButton onClick={()=>navigate('/')}>
                            <ListItemIcon>
                                <FaAddressCard/>
                            </ListItemIcon>
                            <ListItemText primary='Add Task'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={()=>navigate('/view')}>
                            <ListItemIcon>
                                <FaList/>
                            </ListItemIcon>
                            <ListItemText primary='View Task'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={()=>navigate('/about')}>
                            <ListItemIcon>
                                <FaUserTie/>
                            </ListItemIcon>
                            <ListItemText primary='About Us'/>
                        </ListItemButton>
                    </ListItem>
                    {!isDark? (
                         <ListItem>
                         <ListItemButton onClick={()=>toggleTheme()}>
                             <ListItemIcon>
                                 <MdDarkMode/>
                             </ListItemIcon>
                             <ListItemText primary='Dark Mode'/>
                         </ListItemButton>
                     </ListItem>
                    ):(
                        <ListItem>
                        <ListItemButton onClick={()=>toggleTheme()}>
                            <ListItemIcon>
                                <MdDarkMode/>
                            </ListItemIcon>
                            <ListItemText primary='Light Mode'/>
                        </ListItemButton>
                    </ListItem>
                    )}
                   
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <MdSettings/>
                            </ListItemIcon>
                            <ListItemText primary='Settings '/>
                        </ListItemButton>
                    </ListItem>
                </ListGroupItem>
             
            </Drawer>
        </div>
    )
};

export default Sidebar;
