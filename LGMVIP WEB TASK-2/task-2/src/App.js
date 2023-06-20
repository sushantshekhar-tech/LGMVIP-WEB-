import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const loadUser = async () => {
    const response = await fetch('https://reqres.in/api/users?page=1');
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data);
    console.log(jsonresponse.data);
  };

  // useEffect(() => {
  //   loadUser();
  // }, []);

  return (
    <>
      <div className='NavBar'>
        <h1>User-Data Fetcher</h1>
      </div>
      <div className='Container'>
        <button onClick={loadUser}>Get User Data</button>
      </div>
      <div className='InnerContainer'>
        <h1>User Data</h1>

        {users.map(({ id, first_name,last_name,email,avatar }) => (
             <div className="card" key={id}>
             <img src={avatar} alt="" />
             <p><span>Person-</span>{id}</p>
             <p><span>First-Name :-</span>{first_name}</p>
             <p><span>Last-Name :-</span>{last_name}</p>
             <p><span>Email:-</span>{email}</p>
            </div>
    
  ))}












      </div>
    </>
  );
}

export default App;
