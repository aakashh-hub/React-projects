    import React from "react";

    class Join extends React.Component{
        constructor(){
            super();
            this.state={username:"",age:null,errmsg:""}
        }

        uservalue =(event) =>{
            let n = event.target.name;
            let v = event.target.value;
            let err = "";
            if (n==="age"){
                if (v!=="age" && !Number(v)){
                    err = <b>INVALID , AGE MUST BE IN NUMBER</b>
                }
            }
            this.setState({errmsg:err});
            this.setState({[n]:v});
        }

        formsubmit = (event) =>
        {
            event.preventDefault();
            alert("your name : "+this.state.username);
        }

        render(){
            return(
                <form onSubmit={this.formsubmit}>
                    <h1>USERNAME IS {this.state.username} </h1>
                    Enter your name : <input type='text' name='username' onChange={this.uservalue}/>
                    <h2>YOUR AGE IS {this.state.age} </h2>
                    Enter your mobile number : <input type='text' name="age" onChange={this.uservalue}/><br></br>
                    {this.state.errmsg}
                    <button type="submit">Submit</button>
                </form>
            )
        }
    }

    export default Join;
