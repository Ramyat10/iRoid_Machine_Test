import React from 'react';

const Header = ()=>{
    return (
        <>
            <div className='loginContainer'>
                <style jsx="true">{ `
                .loginContainer{
                    background-color:#940D1B;
                    width:100%;
                    // width:1366px;
                    height:50px;
                    font-family:segoe UI;
                    font-weight:regular;
                    color:white;
                    character-spacing:0;
                    line-spacing:19;
                }
                `}</style >
                <span style={ { position:"absolute",left:"139px", top:"16px"} }>Alba Helpline: 04829 222776</span>
                <span style={ { position:"absolute",left:"1101px", top:"16px"} }> Register</span>
                <span style={ { position:"absolute",left:"1193px", top:"16px"} }> Login</span>
            </div>
            <div className='headerContainer'>
            <style jsx="true">
                { `
                    .headerContainer{
                        position:absolute;
                        width:100%;
                        height:3756px;
                        font-weight:500;
                    }
                    .logoContainer{
                        position:relative;
                        width:86px;
                        height:51px;
                        left:139px;
                        top:19px;
                        color:#940D1B ;
                        textAlign:left;
                        font-family:Poppins, Medium ;
                        font-size:36px;
                        font-weight:medium;
                        font-family:segoe UI;
                         font: normal normal medium 36px/329px Poppins;
                        letter-spacing:0px;
                       
                    }
                    .menutitle{
                        position:absolute;
                        top:102px;
                        left:167px;
                        font-size:smaller;
                        color:#940D1B;
                    }
                    i{
                      
                        margin:0px 5px 0px 5px;
                    }
                `}
                </style>
               
                <div className='logoContainer'>Logo </div>
                <div>
                    <span style={ {position:"absolute",left:415,height:20,opacity:1,top:33.5} }>HOME</span>
                    <span style={ { position: "absolute", left: 507, height: 20, opacity: 1, top: 33.5 } }>MEN
                    <i className="fa fa-caret-down"/></span>
                    <span style={ {position:"absolute",left:599,height:20,opacity:1,top:33.5} }>WOMEN<i className="fa fa-caret-down"/></span>
                    <span style={ {position:"absolute",left:714,height:20,opacity:1,top:33.5} }>GIRLS<i className="fa fa-caret-down"/></span>
                    <span style={ { position: "absolute", left: 812, height: 20, opacity: 1, top: 33.5 } }>BOYS<i className="fa fa-caret-down"/></span>
                    <div style={ { position: "absolute", left: 1156.29, height: 20, opacity: 1, top: 33.5, background: "#940D1B 0% 0% noRepeat paddingBox" } }>
                        <i className='fa fa-search' style={ {color:"grey",opacity:1} }></i>
                    </div>
                    <div style={ { position: "absolute", left: 1208, height: 20, opacity: 1, top: 33.5, color: "grey" } }>
                    <span class='badge badge-warning' id='lblCartCount ' style={ {color:"white",borderRadius:"50px",backgroundColor:"#940D1B", height:"5px",} }> 5 </span>
<i class="fa" style={ { fontSize: 24 } }>&#xf07a;</i>
</div>
                </div>

                <div className="menutitle"  >
                    <i className="fa fa-home" style={ { color: "lightgrey" } } />
                    <i className="fa fa-chevron-right" style={ {margin:"10px",color:"grey"} } /><span>About Us</span>
                </div>
                
                
            </div>
            
        </>
    );
}

export default Header;