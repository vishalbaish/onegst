import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import "./Sidebar.css"
import Button from '@material-ui/core/Button';
import { auth } from '../../firebase'

function Sidebar({ isOpen, toggle}) {

    const sidebar = isOpen ? "sidebar_container2" : "sidebar_container";

    return (
        <div className={sidebar} onClick={toggle}>
            <IconButton style={{ marginLeft: "auto"}} onClick={toggle}>
                <CloseIcon />
            </IconButton>
            <div className="sidebar_wrapper">
                <ul className="sidebar_menu">
                    <li className="sidebar_link" onClick={toggle}>Home</li>
                    <li className="sidebar_link" style={{ marginBottom: "15px"}} onClick={toggle}>Download</li>
                    <li className="sidebar_link" onClick={toggle}><Button variant="contained" onClick={() => auth.signOut()} >Sign Out</Button></li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar
