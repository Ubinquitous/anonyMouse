import React, { useState } from "react";
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";

const Auth = () => {

    const onSocialClick = async (event) => {
        const {
          target: { name },
        } = event;
        let provider;
        if (name === "google") {
          provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
          provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
      };
    return (
        <div className="authContainer">
            <img src="https://www.the-pr.co.kr/news/photo/201804/34111_59145_240.jpg"
                style={{
                    marginBottom:30,
                    width:'100px',
                    height:'100px'
                }}
            />
        <AuthForm/>
        <div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn">
          Continue with Google
          <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            style={{
                width:'20px',
                height:'20px',
                marginLeft:5,
            }}
          />
        </button>
        <button onClick={onSocialClick} name="github" className="authBtn">
          Continue with Github
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
            style={{
                width:'20px',
                height:'20px',
                marginLeft:5,
            }}
          />
        </button>
        </div>
      </div>
    );
  };

export default Auth;