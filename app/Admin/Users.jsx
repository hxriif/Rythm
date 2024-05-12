"use client"


import React, { useEffect, useState } from 'react';
import Axios from '../axios';   
import PendingRequest from './PendingRequest';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await Axios.get('/api/admin/allUsers');
        if (response.status === 200) {
          setUsers(response.data.data);
        } else {
          setError(`Error fetching users: Status code ${response.status}`);
        }
      } catch (error) {
        console.log(`Error fetching users: ${error.message}`);
      }
    };
    fetchUsers();
    
  }, []);

  return (
    <div className="w-full h-full flex gap-2 p-2">
      {users.length<0? (
        <div className="bg-slate-700  text-white p-2 rounded-md">
          <p>Error fetching user details</p>
        </div>
      ) : (
        <div className="flex gap-1">
          <div className="bg-slate-700 w-[40rem] rounded-lg overflow-y-auto max-h-full p-2 text-white">
            <h1 className="flex justify-center font-extrabold text-white text-2xl">Users</h1>
            {users.map((user) => (
              <div className="w-full gap-2 mt-2" key={user._id}>
                <div className="flex font-extrabold justify-between p-2 items-center rounded-lg hover:bg-slate-300 bg-slate-500 text-black">
                  <div>
                    <img className="w-12 h-12 rounded-full" src={user.image} />
                  </div>
                  <div>
                    <h1>{user._id}</h1>
                  </div>
                  <div>
                    <h1>{user.email}</h1>
                  </div>
                  <div>
                    <h1>{user.name}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>

         <div className='w-[25rem] overflow-y-auto '>
          <PendingRequest/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
