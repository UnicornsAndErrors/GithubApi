import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../axios";
import Repo from "./Repo";

const User = () => {
  const { login } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const [repos, setRepos] = useState([]);


    const fetchUserInformation = async () => {
      try {
        const response = await Promise.all([
          axios.get(`/users/${login}`),
          axios.get(`/users/${login}/repos`),
        ]);
        setUserInfo(response[0].data);
        setRepos(response[1].data);
      } catch (error) {
        console.error(error);
      }
    };

useEffect(() => {fetchUserInformation()}, []);


  return (
    <div>
      <div className="user-information">
        <div className="image">
          <img src={userInfo.avatar_url} />
        </div>
        <div className="user-content">
          <h3>{userInfo?.name}</h3>
         
        </div>
      </div>
      <div className="user-repo">
        <h1>Repozitoriji</h1>
        {repos ? (
          repos.map((repo) => {
            return <Repo repo={repo} key={repo.id} />;
          })
        ) : (
          <h2>No repos for this user...</h2>
        )}
      </div>
      <Link to="/" className="btn2">
        Reset
      </Link>
    </div>
  );
};

export default User;
