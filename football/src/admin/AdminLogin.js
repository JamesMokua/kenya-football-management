import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import '../App.css'
import Axios from 'axios'

Axios.defaults.withCredentials = true;
const AdminLogin = () => {
    const[username, setUserName] = useState("")
  const[password,setPassword] = useState("")
  const[loginStatus,setLoginStatus] = useState("")
 let navigate = useNavigate();
  const login = (event) => {
  
    event.preventDefault();
       Axios.post("http://localhost:5000/adminlogin", {
         username: username,
         password: password
       }).then((response) => {
          if(response.data.message){
            setLoginStatus(response.data.message)
          }else{
            setLoginStatus(response.data[0].username)
            navigate('/adminhome' , { state: username})

          }
      
      setPassword("");
      setUserName("");
      });
       
     
     };
     useEffect(() => {
      Axios.get("http://localhost:5000/adminlogin").then((response) => {
        if (response.data.loggedIn === true) {
          setLoginStatus(response.data.user[0].username);
        }
      });
    }, []);
   
    
  return (
    <div className="text-center m-5-auto">
    <h2>Sign in to us</h2>
    <form action="/adminlogin" method="post">
        <p>
            <label>Username</label><br/>
            <input type="text" name="username" value={username}   onChange={(event) => {
            setUserName(event.target.value);
          }}required />
        </p>
        <p>
            <label>Password</label>
           
            <br/>
            <input type="password" name="password" value={password}  onChange={(event) => {
            setPassword(event.target.value);
          }} required />
        </p>
        <p>
            <button id="sub_btn" type="submit" onClick={login}>Login</button>
        </p>
    </form>
    <footer>
        <p><Link to="/">Back to Homepage</Link>.</p>
    </footer>
   
</div>
  )
}

export default AdminLogin