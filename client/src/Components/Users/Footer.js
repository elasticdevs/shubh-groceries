import React from "react";
import  '../../styles/footer.css';

export default function Footer(){
    return <div className="footer">
        <div>
            <span> Get in touch</span>
            <a href = "/">About Us</a>
            <a href = "/"> Careers</a>
            <a href = "/">Press Releases</a>
            <a href = "/">Blog</a>
        </div>

        <div>
            <span> Connections</span>
            <a href = "/">Facebook</a>
            <a href = "/">Twitter</a>
            <a href = "/">Instagram</a>
            <a href = "/">Youtube</a>
            <a href = "/">LinkedIn</a>
        </div>
        <div>
            <span> Earnings</span>
            <a href = "/">Become an Affiliate</a>
            <a href = "/"> Advertise your product </a>
            <a href = "/">Sell on Market</a>
        </div>

        <div>
            <span>Account</span>
            <a href = "/">Your account</a>
            <a href = "/"> Returns Centre</a>
            <a href = "/">100 % purchase protection</a>
            <a href = "/">Chat with us</a>
            <a href = "/">Help</a>
        </div>
    </div>
}