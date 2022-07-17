import React,{useState} from 'react'
import { TextField } from '@fluentui/react/lib/TextField';
import {  PrimaryButton } from '@fluentui/react/lib/Button';

import Axios from 'axios'


Axios.defaults.withCredentials = true;

const textFieldStyles = { fieldGroup: { width: 300 } };
const Facilitator = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const[address,setAddress] = useState("");
  const[position,setPosition] = useState("");

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
     
    
      <PrimaryButton text="Submit" onClick={handleSubmit} />
    </>
  )
}

export default Facilitator