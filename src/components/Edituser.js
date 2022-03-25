import React, { useEffect, useState } from 'react'
import { FormGroup,FormControl,InputLabel, Input, Button, Typography } from '@mui/material';
import './add.scss';
import { editUser, getUsers} from '../service/api';
import { useParams } from 'react-router-dom';

const initialValues= {
  name: '',
  username: '',
  email: '',
  phone: ''
}


export const Edituser = () => { 
  const [user, setUser] = useState(initialValues);

  const {name, username, email, phone } = user;
   const {id} = useParams();

   useEffect(() => {
       loadUserData();
   }, [ ]);
   const loadUserData = async () =>{
      const response = await getUsers(id);
      setUser(response.data);
   }

  const onValueChange = (e) => {
  
    setUser({...user, [e.target.name]: e.target.value})
   
  }

  const editUserDetails = async () =>{
    await editUser(id, user);
    
  }

  return (
    <div className='form-cont'>
      <FormGroup className='form'>
        <Typography>Edit Users</Typography>
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
        <Button className='btn' onClick = {() => editUserDetails() } variant="contained"  size="small">Edit User</Button>
      </FormGroup>
    </div>
  )
}
