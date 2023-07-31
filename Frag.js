import React from "react";

class Tablecreation extends React.Component{
    render(){
        return(
            <table>
                <tr>
                    <Rowcreation/>
                </tr>
            </table>
        )
    }
}

class Rowcreation extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>AAKASH</h1>
                <h1>VENKATESAN</h1>
            </React.Fragment>          
        )
    }
}

export default Tablecreation; 