// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import React from 'react';
import Task4 from './Project4';
import App from './App';
ReactDOM.render(<App/>,document.getElementById('root'));
ReactDOM.render(<Task4/>,document.getElementById('root'));

var n=() =>
{
    const a = prompt("Enter a number : ");
    if(a%11==0){
        console.log("number is divisible by 11");
    }
    else{
        console.log("number is not divisible");
    }
}

n();

class Demo{
    method(){
        var n = prompt("enter a number")
        var re,s=0;
        while(n){
            re=n%10;
            s=s+re;
            n=Math.floor(n/10);
        }
    document.getElementById('root').innerHTML=s;
    }
}
var obj1 = new Demo();
obj1.method();
