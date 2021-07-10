import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Transactions from '../Transactions'
import Details from '../Details/Details'
import "./Main.css"
import Sidebar from '../Sidebar/Sidebar'

function Main() {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="main">
            <Sidebar isOpen={isOpen} toggle= {toggle} />
            <Navbar toggle={toggle} />
            <div className="main_section">
                <div className="transactions_section">
                <Transactions />
                </div>
                <div className="details_section">
                <Details />
                </div>
            </div>
            
        </div>
    )
}

export default Main
