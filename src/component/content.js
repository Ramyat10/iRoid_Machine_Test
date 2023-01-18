import React from 'react';
import pic from "../contentImage.png";
import grouppic from "../Group 467.png";
import icon from "../tickicon.png";
import bg from "../bluebgimg.png";
import redbg from "../redbgimg.png";
import displayimg from "../displayimg.png";
import videoimg from "../videoimg.png";


const Content = () => {
    return (
        <>
            <div >
                <style>
                    { `.contenttitle{
                       
                   position:absolute;
                 top: 203px;
                    left: 457px;
                   
                    height: 43px;
                     text-align: left;
                     font-size:36px;
                     font-weight:600;
                                       // font: normal normal medium 36px/87px Roboto;
                    letter-spacing: 0px;
                    color: #940D1B;
                    text-transform: capitalize;
                    opacity: 1;
                
                }
                .content{
                    position:absolute;
                    top: 270px;
                    left: 203px;
                    width: 948px;
                    height: 101px;
                    text-align: center;
                    font-size:medium;
                    font-weight:450;
                    letter-spacing: 0px;
                    color: #515151;
                    opacity: 1;
      letterSpacing:0px;
      
                }
                .image{
                    position:absolute;
                    top: 431px;
                    left: 369px;
                    width: 628px;
                    height: 326px;
                }
                .imageContainer{
                    position:absolute;
                    top: 881px;
                    left: 199px;
                    width: 400px;
                    height: 421px;
                    /* UI Properties */

                    opacity: 1;
                }
                .contentheading{
                    position:absolute;
                    top: 883px;
                    left: 691px;
                    width: 429px;
                    height: 67px;
                    text-align: left;
                    letter-spacing: 0px;
                    color: #000000;
                    font-weight:600;
                    font-size:large;
                    text-transform: capitalize;
                    opacity: 1;
                    
                }
                .blueContainer{
                    position:absolute;
                                    top: 1485px;
                left: 170px;
                width: 550px;
                height: 304px;
                opacity:1;  
                }
                .visiontitle{
                    position:absolute;
                         top: 74px;
                        left: 44.5px;
                        width: 112px;
                        height: 29px;
                        text-align: left;
                        font-weight:600px;
                        font-size:24px;
                        font-family:Roboto;
                                              letter-spacing: 0px;
                                               color: #FFFFFF;
                        opacity: 1;
                }
                .visioncontent{
                    position:absolute;
                    top: 123px;
                    left: 44.56px;
                    width: 460px;
                    height: 107px;
                  
                    text-align: left;
                   
                    letter-spacing: 0px;
                    color: #FFFFFF;
                    opacity: 1;
                    font: normal normal normal 14px/30px Roboto;
                }
                .redbgContainer{
                    position:absolute;

                    top: 1485px;
                    left: 767px;
                    width: 429px;
                    height: 496px;
                    background: transparent url('img/Article.png') 0% 0% no-repeat padding-box;
                    opacity: 1;
                    font: normal normal normal 14px/30px Roboto;
                }
                .displayImage{
                         position:relative;
                         top: 1829px;
                            left: 171px;
                            width: 550px;
                            height: 152px;
                }
                .CorperateInfo{
                    position:absolute;
                    top: 2097px;
                    left: 567px;
                    width: 233px;
                    height: 43px;
                    /* UI Properties */
                    text-align: left;
                        font-weight:700px;
                        font-size:36px;
                    letter-spacing: 0px;
                    color: #000000;
                    text-transform: capitalize;
                    opacity: 1;
                    font: normal normal medium 36px/87px Roboto;
                    font-family:segoe UI;
                }
               
                `}

                </style>

                <div className='contenttitle'> Happiness Is Our Culture</div>

                <div className='content' >The productivity and prosperity of an organisation is the reflection of the happiness and contentment of its employees. We believe that is what builds a family and the nation too. Happy employees are not just an asset to the organisation, but the love, contentment and enthusiasm they display build the whole world.So it is our prime responsibility to give a conducive, happy work culture for our employees, a climate which gives them opportunities for self growth and skill development.</div>

                <img className="image" src={ pic } alt="" />
            </div>

            <div className="imageContainer">
                <img src={ grouppic } alt="" />
            </div>

            <div>
                <div className='contentheading'>What Do We Do To Make Our Employees Stay Happy And Satisfied ?</div>
                <div style={ {position:"absolute",
                    top: "977px",
                        left: "723px",
                        width: "504px",
                    height: "47px"
                } }><img src={ icon } style={ { margin: "0px 10px 0px 10px" } } alt="" />Listen to them. We give opportunities for them to express their views- personal and official.
                </div>
                   <div style={ {position:"absolute",
                    top: "1281px",
                        left: "723px",
                        width: "504px",
                    height: "47px",
                    fontFamily:"segoe UI",
                } }><img src={ icon } style={ { margin: "0px 10px 0px 10px" } } alt="" />Appreciate the employees for the effort put in verbally and also through incentives, awards, accolades and public acknowledgements in meetings.
                </div>
                <div style={ {position:"absolute",
                    top: "1115px",
                        left: "723px",
                        width: "504px",
                    height: "47px"
                } }><img src={ icon } style={ { margin: "0px 10px 0px 10px" } } alt="" />Organise training programmes to enhance their professional skills, and also for personal re engineering to build strong self- esteem, develop interpersonal, social, team communication skills and attitude.</div><div style={ {
                    position: "absolute",
                    top: "1046px",
                        left: "723px",
                        width: "504px",
                    height: "47px",
                } }><img src={ icon } style={ { margin: "0px 10px 0px 10px" } } alt="" />The work environment is made proactive, positive, calm, joyful, effective, productive and enjoyable through meditation and other Self Building activities.
                </div> <div style={ {position:"absolute",
                    top: "1212px",
                        left: "723px",
                        width: "504px",
                    height: "47px",
                       } }><img src={ icon } style={ { margin: "0px 10px 0px 10px" } } alt="" />Timely Financial assistance is rendered as a part of employee welfare scheme as and when required.
                </div> </div>
            <div className = "blueContainer"style={{ backgroundImage: `url(${bg})` ,repeat:"noRepeat"}} >
                <div className="visiontitle">Our Vision</div>
            <div className='visioncontent' >
            Our vision is to provide prime value to customers by delivering supreme quality undergarments in the global market with the intent to touch the lives of our employees, immediate society and the world community with the understanding -‘we exist because they exist’.
            </div>
            </div>

            <div className='redbgContainer' style={{ backgroundImage: `url(${redbg})` ,repeat:"noRepeat"}} >
                <div style={ {position:"absolute",top:"62px",left:"40px",opacity:"1",color:"white",font: "normal normal medium 24px/199px Roboto"} }>Our Mission</div>
                <div style={ {position:"absolute",top:"110px",left:"40px",opacity:"1",color:"white",font: "normal normal medium 24px/199px Roboto"} }>Our mission is to put in effort wholeheartedly to:</div>
              <ul>  <li style={ {position:"absolute",top:"141px",left:"40px",opacity:"1",color:"white",font: "normal normal medium 24px/199px Roboto"} }>Ensure the quality of the product excellence through monitoring at every stages of production till delivery and customer satisfaction.</li>
                <li  style={ {position:"absolute",top:"244px",left:"40px",opacity:"1",color:"white",font: "normal normal medium 24px/199px Roboto"} }>Focus on widening the business every year through a progressive approach of associating with prospective textile shops, appointing distributors and contracting with business agents.</li>
                <li  style={ {position:"absolute",top:"371px",left:"40px",opacity:"1",color:"white",font: "normal normal medium 24px/199px Roboto"} }>Share part of the profit to ensure the welfare of the employees, society & the environment.</li>
                </ul>
            </div>
            <div style={ {position:"absolute",top:"1829px",left:"171px",} }  >
                <img className='displayimage' width="550px"  src={displayimg } alt="" />
            </div>

            <div >
                <div className='CorperateInfo'>Corporate Info</div>
                <div>
                    <div style = {{ position:"absolute" , top:"2193px",left:"139px" ,font:" normal normal normal 14px/30px Roboto",width:"1088px"  }} ><b>History</b></div>
                    <div style = {{ position:"absolute" , top:"2235px",left:"139px",font:" normal normal normal 14px/30px Roboto",width:"1088px",font:"normal normal normal 14px/30px Roboto" }}   >Alba Clothings started its production in the year 1994 at Vaikom, Kottayam District, Kerala. In a span of 25 years, it is our relentless faith with dedicated effort, focused on success, holding tightly on to business ethics and values that enabled Alba Clothings to soar to make a definite mark in the Textile Industry. The impeccable product quality has always ensured customer satisfaction which has emarkably promoted ALBA brand to reach to the present stage.</div>
                    <div style = {{ position:"absolute" , top:"2329px",left:"139px",font:" normal normal normal 14px/30px Roboto",width:"1088px",font:"normal normal normal 14px/30px Roboto"}} >By 2019, over a period of 25 years, ALBA could spread its wings over the Kerala Textile Industry, a part of Tamil Nadu and the Middle-East by acquiring a considerable market share in the innerwear segment. Now ALBA has become a popular Brand. High quality ALBA products are currently available in considerably a good number of Retail outlets in Kerala, Tamil Nadu & in the Middle-Easy at an affordable price.</div>
                    <div style = {{ position:"absolute" , top:"2423px",left:"139px",font:" normal normal normal 14px/30px Roboto",width:"1088px",font:"normal normal normal 14px/30px Roboto"}} >ALBA Registered Offices are located in Vaikom & Irumpanam, Kerala and Tirupur, Tamil Nadu. And Warehous is located in Vaikom, Kerala and the production units are based in Tirupur, Tamil Nadu. The production is being carried out in about 14 leading stitching units with International Standards and expertise under stringent quality control.</div>

                </div>
                <div >
                    <div style = {{ position:"absolute" , top:"2514px",left:"139px" ,font:" normal normal normal 14px/30px Roboto",width:"1088px"}}> <b>Why The Brand Name Alba?</b></div>
                    <div style = {{ position:"absolute" , top:"2556px",left:"139px" ,font:" normal normal normal 14px/30px Roboto",width:"1088px"}}>Alba is a given name of Latin origin meaning ‘white’. In Spanish and Italian the name means ‘Sunrise’. Sunrise indicates light, freshness, warmth and closeness. Among our garments the innerwear is the closest to our body. It gives the freshness, warmth, comfort and confidence for a fresh start. And we also intent the brand name Alba to stay in the minds of our customers as a simple and memorable experience.</div>
                </div>
                <div style = {{ position:"absolute" , top:"2677px",left:"139px" ,font:" normal normal normal 14px/30px Roboto",width:"1088px"}}>
                <b>  Why The Brand Name Alba?</b></div>
                    <div style = {{ position:"absolute" , top:"2719px",left:"139px" ,font:" normal normal normal 14px/30px Roboto",width:"1088px"}}>Alba is a given name of Latin origin meaning ‘white’. In Spanish and Italian the name means ‘Sunrise’. Sunrise indicates light, freshness, warmth and closeness. Among our garments the innerwear is the closest to our body. It gives the freshness, warmth, comfort and confidence for a fresh start. And we also intent the brand name Alba to stay in the minds of our customers as a simple and memorable experience.
                      
                </div>
                <div style={ {
                    position:"absolute",top: "2906px",
left: "139px",
width: "1088px",
height: "400px"} }><img src={ videoimg}  alt = ""/></div>
            </div>
        </>
    );
}

export default Content;