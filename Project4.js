import React from "react";
import img1 from './img/pag1.webp';
import img2 from './img/pag2.jpg';
import img3 from './img/pag3.jpg';
import img4 from './img/pag4.jpg';

import './pagani.css';
class Task4 extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img className="img" src={img1}/>
                    <img className="img1" src={img2}/>
                    <div>
                    
                    <video autoPlay muted loop className="vid" width={850} controls>
                        <source src='./vid/pagani.mp4' type='video/mp4'/>
                    </video>

                    </div>
                    <img className="img2" src={img3}/>
                    <img className="img3" src={img4}/>
                </div>
            </div>
        );
    }
}

export default Task4;