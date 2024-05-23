import { useEffect, useState } from "react";
import axios from 'axios';
import ProfileSearchForm from "./ProfileSearchForm";

const BASE_URL = "https://api.github.com/users";

export default function ProfileViewer() {
  const [username, setUsername] = useState("jujospring");
  const [profile, setProfile] = useState({data: null, isLoading: true});

  useEffect(
    function fetchUserOnChange() {
      async function fetchUser() {
        const userResult = await axios.get(`${BASE_URL}/${username}`);
        setProfile({data: userResult.data, isLoading: false});
      }
      fetchUser();
    }, 
    [username]
  );

  function search(username) {
    setProfile({data: null, isLoading: true});
    setUsername(username);
  }

  if (profile.isLoading) {
    return <i>loading...</i>;
  }

  return (
    <div>
      <ProfileSearchForm search={search}/>
      <b>{profile.data.name}</b>
      <img src={profile.data.avatar_url}/>
    </div>
  );
}