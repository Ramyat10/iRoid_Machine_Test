import React from 'react';
import fastdelivery from "../fast-delivery.png";

const Footer = () => {
    return (
        <div>
            <style jsx="true">  { `
            .footerContainer{
                position:absolute;
                top: 3450px;
                left: 0px;
                width: 1366px;
                height: 350px;
                background: #242424 0% 0% no-repeat padding-box;
                border: 1px solid #707070;
                opacity: 1;
                width: 1366px;
            }

          .footericon  {
            position:absolute;
            top: 3565px;
            left: 233px;
            width: 74px;
            height: 50px;
            /* UI Properties */
            background: transparent url('img/fast-delivery.png') 0% 0% no-repeat padding-box;
            opacity: 1;
}

.fastDelivery{ 
    position:absolute;
    top: 3625px;
    left: 191px;
    width: 158px;
    height: 19px;
    text-align: left;
    font: normal normal normal 13px/33px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}


`}

            </style>
            <div className='footerContainer' >
                <img classname="footericon" style={ {
                    position: "absolute",
                    top: "100px",
left: "233px",
width: "74px",
height: "50px",
opacity: 1} } src={ fastdelivery } alt="" />
                <div className='fastDelivery' style={ { position: "absolute",
                    top: "160px",
left: "200px",
width: "200px",
height: "50px",} }> Fast delivery in 3-5 Days</div>
            </div>
            <div>
                <div  style={ {
 position:"absolute",
   top: "3512px",                  
left: "415px",
// width: "89px",
height: "21px",
textAlign: "left",
font: "normal normal normal 15px/33px Poppins",
letterSpacing: "0px",
color: "#FFFFFF",
opacity: "1",
} }>QUICK LINKS</div>
                <ul style={ { listStyle: "none" ,color:"white", position:"absolute",
   top: "3536px",                  
left: "380px",
// width: "89px",
height: "21px",
textAlign: "left",
font: "normal normal normal 15px/33px Poppins",
letterSpacing: "0px",
color: "#FFFFFF",
opacity: "1",} }>
                    <li>Gift Card</li>
                    <li>Lookbook 2021</li>
                    <li>Privacy Policy</li>
                    <li>Shipping & Refund</li>
                </ul>
            </div>
            <div>
                <div  style={ {
 position:"absolute",
   top: "3512px",                  
left: " 662px",
// width: "89px",
height: "21px",
textAlign: "left",
font: "normal normal normal 15px/33px Poppins",
letterSpacing: "0px",
color: "#FFFFFF",
opacity: "1",
} }>COMPANY</div>
                <ul style={ { listStyle: "none",position:"absolute",
   top: "3536px",                  
left: " 622px",
// width: "89px",
height: "21px",
textAlign: "left",
font: "normal normal normal 15px/33px Poppins",
letterSpacing: "0px",
color: "#FFFFFF",
opacity: "1", } }>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Pricing Plan</li>
                    <li>Knowledge Base</li>
                </ul>
            </div>
            <div>
                <div style={ {
 position:"absolute",
   top: "3512px",                  
left: "862px",
// width: "89px",
height: "21px",
textAlign: "left",
font: "normal normal normal 15px/33px Poppins",
letterSpacing: "0px",
color: "#FFFFFF",
opacity: "1",
} }>NEWSLETTER</div>
                <div style={ { position:"absolute",
   top: "3536px",                  
                    left: "862px",
                    color: "#FFFFFF",
// width: "89px",
height: "21px",font: "normal normal normal 15px/33px Poppins",} }>Sign up & get all our latest updates and special offers</div>
                <span style={ {position:"absolute",
                    top: "3602px",
left: "859px",
width: "250px",
height: "36px",
background: "#FFFFFF 0% 0% no-repeat padding-box",
                    opacity: "1",
                fontSize:"small"} }> <div style = { { margin: "6px 0px 0px 0px" } }>Enter Your Email address</div></span>
                <span style={ {position:"absolute",
                    top: "3602px",
left: "1108px",
width: "76px",
height: "36px",
textAlign: "left",
font: "normal normal medium 11px/33px Poppins",
letterSpacing: "0px",
                    color: "#FFFFFF",
backgroundColor:"#6B6B6B",
                    opacity: "1", fontSize: "small"
                } }> <div style = { { margin: "6px 0px 0px 0px" } }>SUBSCRIBE</div></span>
            </div>
            <hr style={ { position: "absolute", top: "60px", color: "brown" } } />
            <div style={ {position:"absolute",top: "3750px",
left: "597px",
width: "173px",
height: "16px",

textAlign: "left",
font: "normal normal normal 11px/27px Poppins",
letterSpacing: "0px",
color: "#FFFFFF",
opacity: 1} }> © 2021 Alba. All Rights Reserved.</div>
        </div>
    );
}

export default Footer;