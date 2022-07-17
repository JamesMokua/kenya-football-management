import React from 'react'
import { useNavigate,useLocation} from 'react-router-dom'
import Navbars from '../constants/Navbar';

const Home = () => {
  let navigate = useNavigate();
  const { state } = useLocation();
  const logoutUser = async () => {
    try {
        const response = await fetch('http://localhost:5000/logout')
          const data = await response.json();
          console.log(data);
        if (data.result === 'SUCCESS') {
            navigate('/login');
        } else {
            alert('User logout operation error (message: ' + data.message + ').');
        }
    } catch(e) {
        console.error(e);
        alert('Request error!');
    }
};
  return (
    <>
    <Navbars/>
    <div className="text-center" >
    <h1 className="main-title home-page-title">welcome to our app {state}</h1>
 
        <button className="primary-button" onClick={logoutUser}>Log out</button>
      

   
</div>
</>
  )
}

export default Home