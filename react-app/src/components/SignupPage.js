import React from "react";
import { useSelector } from "react-redux";
import SignUpForm from "./auth/SignUpForm";

export default function SignupPage({authenticated, setAuthenticated}) {
  return (
    <SignUpForm
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
    />
  );
}
