import React from "react";
import "./auth.css";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Auth() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);

    navigate("/movie-app");
  };

  return (
    <div className="login-page">
      <h1 className="sign-in-text">
        Sign In With <span style={{ color: "#4285F4" }}>G</span>
        <span style={{ color: "#DB4437" }}>o</span>
        <span style={{ color: "#F4B400" }}>o</span>
        <span style={{ color: "#4285F4" }}>g</span>
        <span style={{ color: "#0F9D58" }}>l</span>
        <span style={{ color: "#DB4437" }}>e</span> To Start
      </h1>
      <button onClick={signInWithGoogle} className="login-btn">
        Sign In
      </button>
    </div>
  );
}
