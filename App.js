import React from "react";
import './style.css'; 
import styles from './demo.module.css';
import ak from './img/gt.jpg';
import ak1 from './img/gt1.jpg';
class App extends React.Component{
  render(){
    return(  
      <div className="App">
        <div>
          <h1>AAKASH</h1> 
        </div>
        
        <div>
          <h1>GT 650</h1>          
        </div>
        <Inline/>
        
        <div>
          <h1 className={styles.logesh}></h1>
        </div>
      </div>
    );
  }
}

class Inline extends React.Component{
  render(){
      return(
          <div>
              <img className='img' src={ak}/>
              <img className='img' src={ak1}/>
              <div>
              <h2>PAGANI</h2>
                <video width='1000' autoPlay muted loop>
                  <source src="./vid/pagani.mp4" type="video/mp4"/>
                </video>  
              </div>              
          </div>
      );
  }
}

export default App;


