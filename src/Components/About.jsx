import React from 'react';
function  About(props) {
    return(
        <div id ='about'>
            <div className ='about-image'>
                <img src ={props.image} alt =''/>
            </div>
            <div className='about-text'>
                <h2>{props.title} </h2>
                <br></br>
                <p> Like all good things, the idea of Helpr was born out of necessity. When you need help with small but important household chores, isn't it practically impossible to find trusted providers, who deliver consistently impeccable service, on time? Yes, that happened with us too</p>
                <br></br>
                <button>{props.button}</button>
            </div>
        </div>
    )
}
export default About;