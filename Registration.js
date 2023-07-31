import React from "react";
import './Regis.css';
class Registration extends React.Component{
    constructor(){
        super();
        this.state={username:"",
                    mob:null,
                    errmsg:"",
                    errmsg1:"",
                    errmsg2:"",
                    add:"",
                    fees:null,
                    ref:null,
                    tf:null }
    }

    uservalue =(event) =>{
        let n = event.target.name;
        let v = event.target.value;
        let err = "";
        if (n==="mob"){
            if (v!=="" && !Number(v)){
                err = <b>INVALID , MOBILE NUMBER MUST BE IN NUMBER</b>
            }
            this.setState({errmsg:err})
        }
        
        if (n==="fees"){
            if(v!=="" && !Number(v)){
                err = <b>INVALID, FEES MUST BE IN NUMBER</b>
            }
            this.setState({errmsg1:err})
        }

        if (n==="ref"){
            if(v!=="" && !Number(v)){
                err = <b>INVALID, REFERENCE MUST BE A NUMBER</b>
                this.setState({errmsg2:err})
            }else{
                this.setState({errmsg2:""})
                var r = document.getElementById('Ref').value;
                var f = document.getElementById('Fees').value;
                var t = r*f;
                document.getElementById('Total').value=t;
            }
        }
    }

    formsubmit = (event) =>
    {
        event.preventDefault();
        alert("REGISTRATION IS SUCCESSFUL !");
    }

    render(){
        return(
            <div className="bg">
            <form onSubmit={this.formsubmit}>
                <h1>SPORTS REGISTRATION FORM</h1>
                Name : <input type='text' id='label' name='username' onChange={this.uservalue}/><br/>

                Mobile number : <input type='text' name='mob' onChange={this.uservalue}/><br/>
                {this.state.errmsg}
                
                Address : <input type='text' name='add' onChange={this.uservalue}/><br/>

                Sport : <select>
                            <option value=''>--select any sport--</option>
                            <option value='fb'>FOOTBALL</option>
                            <option value='ck'>CRICKET</option>
                            <option value='bx'>BOXING</option>
                        </select><br/>

                Fees : <input type='text' id='Fees' name='fees' onChange={this.uservalue}/><br/>
                {this.state.errmsg1}

                References : <input type='text' id='Ref' name='ref' onChange={this.uservalue}/><br/>
                {this.state.errmsg2}

                Total fees : <input type="text" id='Total' disabled/> <br/>

                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default Registration;