import React from "react";
import {useDispatch} from "react-redux"
import auth from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
    const dispatch = useDispatch()

  const logoutHandler = () => {
    console.log("inside logout");
    auth.logout().then(() => {
        dispatch(logout())
    })
  };

  return <button onClick={logoutHandler}>Logout</button>
};

export default LogoutBtn;
