import axios from 'axios';
import React,{useState} from 'react';

function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassowrd]=useState("");
    const [loginStatus,setLoginStatus] = useState(false)

    const loginData = {
        "email": email,
        "password": password
      }
      
    const LoginClick = () =>{
       axios.post("http://3.140.210.76:8000/api/token/",loginData).then((response)=>setLoginStatus(true).catch(err =>console.log('wrong credentials')
    }
  return <div>


<form onSubmit={LoginClick} >
          
          <label>Email:</label> <br/>
          <input onChange={(event)=>setEmail(event.target.value)} required type='email'/><br/>
          <label>Password:</label> <br/>
          <input onChange={(event)=>setPassowrd(event.target.value)} required   type='password'/> <br/>
          <button type='submit'>Submit</button>
      </form>
  </div>;
}

export default Login;
