import React from 'react'
import "./Details.css"

function Details() {

    return (
        <div>
           <div>
                <h1 className="topline">OneGST</h1>
           </div>
            <div className="flex social-btns">
            <a className="app-btn blu flex vert" href="http:apple.com">
            <i className="fab fa-apple"></i>
            <p>Available on the <br/> <span className="big-txt">App Store</span></p>
            </a>

            <a className="app-btn blu flex vert" href="http:google.com">
            <i className="fab fa-google-play"></i>
            <p>Get it on <br/> <span className="big-txt">Google Play</span></p>
            </a>
            </div>


        </div>
    )
}

export default Details
