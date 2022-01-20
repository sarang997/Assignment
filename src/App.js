import './App.css';
import Form1 from './components/Form1';
import React,{useState} from 'react';
import axios from 'axios';


function App() {
  
  const [email,setEmail]=useState("");
  const [password,setPassowrd]=useState("");
  const [loginStatus,setLoginStatus] = useState(false)

  const loginData = {
      "email": email,
      "password": password
    }
    
  const LoginClick = () =>{
     axios.post(" http://3.140.210.76:8000/api/token/",loginData).then((response)=>setLoginStatus(true)).catch(err =>console.log(err))
  }
  return (

    <div className="App">

      Task-1 
    <Form1/>
      Task-2
      {loginStatus===false && <>

         
<form onSubmit={LoginClick} >
          
          <label>Email:</label> <br/>
          <input onChange={(event)=>setEmail(event.target.value)} required type='email'/><br/>
          <label>Password:</label> <br/>
          <input onChange={(event)=>setPassowrd(event.target.value)} required   type='password'/> <br/>
          <button type='submit'>Submit</button>
      </form>
        
      </>}
      You are not logged in!
      {loginStatus===true && <>You have been logged in :)</>}

   
    </div>
  );
}

export default App;
