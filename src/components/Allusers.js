import React from 'react'
import { useEffect, useState } from 'react'
import { getUsers,deleteUser } from '../service/api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './alluser.scss';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Allusers = () => {

  const[users, setUsers] = useState([])
 

  useEffect(() =>{
    getAllUsers();
  }, [])
  const getAllUsers = async () =>{
    const response =await getUsers();
    console.log(response.data);
    setUsers(response.data);
  }

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }

  return (
    <div className='table-cont'>
      <Table className='table'>
      <TableHead sx={{ bgcolor: 'primary.main',  color: 'background.paper', fontSize: '3rem' } }  >
        <TableRow className='classes.thead'>
          <TableCell>
            Id
          </TableCell>
          <TableCell>
            Name
          </TableCell>
          <TableCell>
            Username
          </TableCell>
          <TableCell>
            Email
          </TableCell>
          <TableCell>
            Phone
          </TableCell>
          <TableCell>
            
          </TableCell>
        
       
        </TableRow>
      </TableHead>
      <TableBody>
        {
          users.map(user => (
            <TableRow>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
              </TableCell>

            </TableRow>
          ))
        }
      </TableBody>
    </Table>
    </div>
  )
}
