import axios from 'axios';
import React, {useState} from 'react';

function Form1() {

    
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassowrd]=useState("");
    
    const data = {
        first_name:firstName,
        lastName:lastName,
        email:email,
        password:password

    }


    const submitForm1 =() =>{
        axios.post('http://3.140.20.76:8000/api/user/',data).then((response)=> console.log(response)).catch((err)=>console.log('there was an error:'+err));

        console.log(data)
    }
    
  return <div>

          <form onSubmit={submitForm1} >
          <label>First name:</label> <br/>
          <input onChange={(event)=>setFirstName(event.target.value)} required type='text'/><br/>
          <label>Last name:</label> <br/>
          <input onChange={(event)=>setLastName(event.target.value)} required type='text'/><br/>
          <label>Email:</label> <br/>
          <input onChange={(event)=>setEmail(event.target.value)} required type='email'/><br/>
          <label>Password:</label> <br/>
          <input onChange={(event)=>setPassowrd(event.target.value)} required   type='password'/> <br/>
          <button type='submit'>Submit</button>
      </form>

  </div>;
}

export default Form1;
