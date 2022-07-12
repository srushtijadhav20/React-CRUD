import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
const Home=() => {
    const[users,setUser]=useState([]);

    useEffect(()=>{
        loadUsers();
    }, []);

    const loadUsers= async()=>{
        const result=await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse()); 
    }
    const deleteUser= async id =>{
     await axios.delete(`http://localhost:3003/users/${id}`);
     loadUsers();
    };
    

return(
    <div className="container">
        <div className="py-4">
            <h1>Home Page</h1>
            <table class="table border shadow">
  <thead className="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody class="table-group-divider">
    {
      users.map((user,index)=> (
      <tr>
        <th scope="row">{index+1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
           <NavLink className="btn btn-primary m-2" exact to={`/users/${user.id}`}>View</NavLink>
           <NavLink className="btn btn-secondary m-2" exact to={`/users/edit/${user.id}`}>
            Edit</NavLink>
           <NavLink className="btn btn-danger m-2" exact to="/" onClick={()=>deleteUser(user.id)}>
            Delete</NavLink>  
        </td>

      </tr>
      ))
    }
    
  </tbody>
</table>
        </div>
    </div>
)
};
export default Home;