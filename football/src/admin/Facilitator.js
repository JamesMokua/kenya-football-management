import React,{useState,useEffect} from 'react'
import { TextField } from '@fluentui/react/lib/TextField';
import {  PrimaryButton } from '@fluentui/react/lib/Button';
import Table from 'react-bootstrap/Table';

import Axios from 'axios'


Axios.defaults.withCredentials = true;

const textFieldStyles = { fieldGroup: { width: 300 } };
const Facilitator = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const[address,setAddress] = useState("");
  const[position,setPosition] = useState("");

  const [facilitator, setFacilitator] = useState([]);

  useEffect(() => {
    const getFacilitator = async () => {
      const res = await fetch("http://localhost:5000/facilitator");
      const getdata = await res.json();
      setFacilitator(getdata);
      //console.log(getdata);
    };

    getFacilitator();
  },[]);
  const handleSubmit = () => {
    Axios.post("http://localhost:5000/createfacilitator", {
     name: name,
     contact: contact,
     gender: gender,
     address: address,
     position: position
    }).then((response) => {
     console.log(response);
     setName("");
     setContact("");
     setGender("");
     setAddress("");
     setPosition("");
    });
  }
 
  return (
    <>
   <div style={{display: "flex", flexDirection: "row",justifyContent: "space-evenly"}}>
    <div>
     <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        styles={textFieldStyles}
      />
        <TextField
        label="Gender"
        value={gender}
        onChange={(event) => setGender(event.target.value)}
        styles={textFieldStyles}
      />
      
        <TextField
        label="Contact"
        value={contact}
        onChange={(event) => setContact(event.target.value)}
        styles={textFieldStyles}
      />
      </div>
      <div>
        <TextField
        label="Address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        styles={textFieldStyles}
      />
        <TextField
        label="Position"
        value={position}
        onChange={(event) => setPosition(event.target.value)}
        styles={textFieldStyles}
      />
     
    
      <PrimaryButton text="Add" onClick={handleSubmit} style={{marginTop: 20,marginBottom: 20}}/>
      </div>
      </div>
      <h2>Facilitator Details</h2>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>  
        {facilitator.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td> {item.gender}</td>
                    <td> {item.contact}</td>
                    <td> {item.address}</td>
                    <td> {item.position}</td>
                   
                  </tr>
                ))}
        
      </tbody>
    </Table>
              
             
    </>
  )
}

export default Facilitator