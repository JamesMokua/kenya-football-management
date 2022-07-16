import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios'


const Register = () => {
 const[username, setUserName] = useState("")
 const[password,setPassword] = useState("")
 
const addUser = (event) => {
 
   event.preventDefault();
      axios.post("http://localhost:5000/register", {
        username: username,
        password: password
      }).then((response) => {
       console.log(response);
        setPassword("");
       setUserName("");
      });
     
    
    };
  return (
    
    <div className="text-center m-5-auto">
    <h2>Join us</h2>
    <h5>Create your personal account</h5>
    <form action="/home">
        <p>
            <label>Username</label><br/>
            <input type="text" name="username" value={username}  onChange={(event) => {
            setUserName(event.target.value)
          }} required />
        </p>
        <p>
            <label>Password</label><br/>
            <input type="password" name="password" value={password}  onChange={(event) => {
            setPassword(event.target.value)
          }} required/>
        </p>
        <p>
            <button id="sub_btn" type="submit" onClick={addUser}>Register</button>
        </p>
    </form>
    <footer>
        <p><Link to="/">Back to Homepage</Link>.</p>
    </footer>
</div>
  )
}

export default Register