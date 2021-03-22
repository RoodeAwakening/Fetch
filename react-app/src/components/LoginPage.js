import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./auth/LoginForm";

export default function LoginPage({ authenticated, setAuthenticated }) {
  return (
    <LoginForm
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
    />
  );
}
