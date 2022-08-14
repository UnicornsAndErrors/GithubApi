import React, { useState } from "react";
/*Axios je library koji se koristi za slanje HTTP zahtjeva iz preglednika, isla se malo zabavit jer sam psihički nestabilna :D */
import axios from "../axios"
import User from "./Users"

const Home = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);


    const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);
  };
  
  /* axios u akciji */
  const fetchUsers = async () => {
    try {
      const  {data}  = await axios.get(`/search/users?q=${query}`)
      return data.items;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if (query) {
      const items = await fetchUsers();
      setUsers(items);
    } else {
      console.log("Vaš unos nije uhvaćen!");
    }
    
  };

  return (
    <div>
      <div>
        <p>GitHub username</p>
        <br />
        <input className="input1" value={query} onChange={handleQueryInput} type="text" />
        <br />
        <br />
        <br />
        <button className="btn1" onClick={handleSearchUsers}>Go!</button>
        </div>
        <div className="search1">
          {users ? (
          users.map((user) => {
            return <User user={user} key={user.id} />;
          })
        ) : (
          <h2>Blank...</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
