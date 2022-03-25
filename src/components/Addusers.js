import React, { useState } from 'react'
import { FormGroup,FormControl,InputLabel, Input, Button, Typography } from '@mui/material';
import './add.scss';
import { addUser} from '../service/api';


const initialValues= {
  name: '',
  username: '',
  email: '',
  phone: ''
}


export const Addusers = () => { 
  const [user, setUser] = useState(initialValues);

  const {name, username, email, phone } = user;
  


  const onValueChange = (e) => {
  
    setUser({...user, [e.target.name]: e.target.value})
   
  }

  const addUserDetails = async () =>{
    await addUser(user);
    
  }

  return (
    <div className='form-cont'>
      <FormGroup className='form'>
        <Typography>Add Users</Typography>
        <FormControl className='input-field'>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='name'/>
        </FormControl>
        <FormControl className='input-field'>
          <InputLabel>Username</InputLabel>
          <Input  onChange={(e) => onValueChange(e)} name='username'/>
        </FormControl >
        <FormControl className='input-field'>
          <InputLabel>Email</InputLabel>
          <Input  onChange={(e) => onValueChange(e)} name='email'/>
        </FormControl>
        <FormControl className='input-field'>
          <InputLabel>Phone</InputLabel>
          <Input  onChange={(e) => onValueChange(e)} name='phone'/>
        </FormControl>
        <Button className='btn' onClick = {( ) => addUserDetails() } variant="contained"  size="small">Add User</Button>
      </FormGroup>
    </div>
  )
}
