import React from 'react';
import Navbar from './Navbar';
function Header(){
    return (
        <div id ='main'>
            <Navbar/>
            <div className='name'>
                <h1><span><b>Let us help </b></span> </h1>
                  <br></br>
                <a href ='#' className='cv-btn'>
                    Download</a>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br>
                <h2 style={{color:"conflowerblue"}}><b>Our Service</b></h2>

            </div>

        </div>
    )
}
export default Header;