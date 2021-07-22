import React from "react";
import {
  useHistory,
  useLocation
} from "react-router-dom";
import { useAuth } from "../utils/provideAuth"
import { Login } from "../components/login"

export function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <Login />
      <button onClick={login}>Log in</button>
    </div>
  );
}