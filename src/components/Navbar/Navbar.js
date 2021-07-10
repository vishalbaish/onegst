import React from 'react'
import "./Navbar.css"
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { auth } from '../../firebase'

export default function Navbar({ toggle }) {

    const src = require("../../oneGST.png").default;
    return (
        <div className="navbar">
            <div className="nav_logo">
                <img src={src} alt="oneGST" />
            </div>
            <ul className="nav_itemsList">
                <MenuIcon className="menu_icon" onClick={toggle}/>
                <li className="nav_item"><a href="/">Home</a></li>
                <li style={{ marginRight: "30px"}} className="nav_item"><a href="/">Download</a></li>
                <Button className="nav_btn" variant="contained" onClick={() => auth.signOut()} color="primary">Sign Out</Button>
            </ul>
        </div>
    )
}
