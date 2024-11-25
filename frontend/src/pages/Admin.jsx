import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Updated import
import { deleteUser, get ,post} from '../services/ApiEndpoint';
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux'
import { Logout } from '../redux/AuthSlice'


export default function Admin() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const GetUsers = async () => {
      try {
        const request = await get('/api/admin/getuser');
        const response = request.data;
        if (request.status === 200) {
          setUsers(response.users);
        }
      } catch (error) {
        console.log(error);
      }
    };
    GetUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const request = await deleteUser(`/api/admin/delet/${id}`);
      const response = request.data;
      if (request.status === 200) {
        toast.success(response.message);
        setUsers((prev) => prev.filter((user) => user._id !== id)); // Update UI
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  const handleLogout=async()=>{
    try {
      const request= await post('/api/auth/logout')
       const resspone= request.data
       if (request.status==200) {
           disptach(Logout())
           toast.success("logout successfully")
          navigate('/login')
       }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="admin-container">
        <h2>Manage Users</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((elem, index) => (
              <tr key={index}>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>
                  <button onClick={() => handleDelete(elem._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='container m-2' style={{margin:"auto",width:"100px"}}>
        <button onClick={handleLogout} className="logout-button" >Logout</button>
        </div>
      </div> 
    </>
  );
}
