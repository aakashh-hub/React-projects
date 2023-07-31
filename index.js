import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import React from 'react';
// import Task4 from './Project4';
// import App from './App';
// ReactDOM.render(<App/>,document.getElementById('root'));
// ReactDOM.render(<Task4/>,document.getElementById('root'));

// var n=() =>
// {
//     const a = prompt("Enter a number : ");
//     if(a%11===0){
//         console.log("number is divisible by 11");
//     }
//     else{
//         console.log("number is not divisible");
//     }
// }

// n();

// class Demo{
//     method(){
//         var n = prompt("enter a number")
//         var re,s=0;
//         while(n){
//             re=n%10;
//             s=s+re;
//             n=Math.floor(n/10);
//         }
//     document.getElementById('root').innerHTML=s;
//     }
// }
// var obj1 = new Demo();
// obj1.method();

// import ReactForm from './Forms';
// ReactDOM.render(<ReactForm/>,document.getElementById("root"));

// import ValidForm from './ValidForm';
// ReactDOM.render(<ValidForm/>,document.getElementById('root'));

// import Sports from './Sport';
// ReactDOM.render(<Sports/>,document.getElementById('root')); 

// import Hooks from './Hooks';
// ReactDOM.render(<Hooks/>,document.getElementById('root'));

// import ReactHooks from './EffectHooks';
// ReactDOM.render(<ReactHooks/>,document.getElementById('root'));
// import Tablecreation from './Frag';
// ReactDOM.render(<Tablecreation/>,document.getElementById('root'));

// import Task4 from './Project4';
// ReactDOM.render(<Task4/>,document.getElementById('root'));

// import Registration from './Registration';
// ReactDOM.render(<Registration/>,document.getElementById('root'));

// import App from './ref';
// ReactDOM.render(<App/>,document.getElementById('root'));

// import { Route } from 'react-router-dom';


import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Join from './Join';
 
const routing = (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/joinus" element={<Join/>} />
            </Routes>
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'));
