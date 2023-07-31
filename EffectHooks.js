import React,{useState,useEffect} from "react";

function ReactHooks(){
    const[count, updatecount] = useState(0);
    useEffect(()=>{alert("check use effect");})
    return(
        <div>
            <p>You clicked the above button {count} times</p>
            <button onClick={()=>updatecount(count+1)}>Press</button>
        </div>
    )
}

export default ReactHooks;