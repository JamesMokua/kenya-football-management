import React,{useState,useEffect} from 'react'
import { TextField } from '@fluentui/react/lib/TextField';
import {  PrimaryButton } from '@fluentui/react/lib/Button';
import Axios from 'axios'
import Table from 'react-bootstrap/Table';


Axios.defaults.withCredentials = true;

const textFieldStyles = { fieldGroup: { width: 300 } };

const Club = () => {
  const[clubName,setClubName] = useState("");
  const[clubAddress,setClubAddress] = useState("");
  const[clubCoach,setClubCoach] = useState("");
  const [clubData, setClubData] = useState([]);

  useEffect(() => {
    const getClubData = async () => {
      const res = await fetch("http://localhost:5000/club");
      const getdata = await res.json();
      setClubData(getdata);
      //console.log(getdata);
    };

    getClubData();
  },[]);
  const handleSubmit = () => {
    Axios.post("http://localhost:5000/createclub", {
    clubName: clubName,
    clubAddress: clubAddress,
    clubCoach: clubCoach
    }).then((response) => {
     console.log(response);
      setClubName("");
      setClubAddress("");
      setClubCoach("");

    });
  }
  return (
   <>
    <div style={{display: "flex", flexDirection: "row",justifyContent: "space-evenly"}}>
    <div>
     <TextField
        label="Name"
        value={clubName}
        onChange={(event) => setClubName(event.target.value)}
        styles={textFieldStyles}
      />
        <TextField
        label="Address"
        value={clubAddress}
        onChange={(event) => setClubAddress(event.target.value)}
        styles={textFieldStyles}
      />
      
   
      </div>
      <div>
      
        <TextField
        label="Club Coach"
        value={clubCoach}
        onChange={(event) => setClubCoach(event.target.value)}
        styles={textFieldStyles}
      />
     
    
      <PrimaryButton text="Add" onClick={handleSubmit} style={{marginTop: 20,marginBottom: 20}}/>
      </div>
      </div>
      <h2>Club Details</h2>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Address</th>
          <th>Club Coach</th>
          
        </tr>
      </thead>
      <tbody>  
        {clubData.map((item) => (
                  <tr key={item.idclub}>
                    <td>{item.idclub}</td>
                    <td>{item.clubname}</td>
                    <td> {item.clubaddress}</td>
                    <td> {item.clubcoach}</td>
                   
                  </tr>
                ))}
        
      </tbody>
    </Table>
              
   </>
  )
}

export default Club