import React, { useState, useEffect } from "react";
import "./User.css";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function User() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div className="user-container">
      <div className="user-main">
        <div className="user-info">
          <h1 className="login-text">Google Login</h1>
          <br />
          <br />
          {profile ? (
            <div>
              <img
                className="profile-img"
                src={profile.picture}
                alt="user image"
              />
              <p className="text-info">Name: {profile.name}</p>
              <p className="text-info">Email Address: {profile.email}</p>
              <br />
              <br />
              <button className="btn-logout" onClick={logOut}>
                Log out
              </button>
            </div>
          ) : (
            <button className="btn-login" onClick={() => login()}>
              Sign in with Google 🚀{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default User;
