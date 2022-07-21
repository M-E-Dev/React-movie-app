import React from 'react'
import { useState } from 'react';
import { signIn } from "../auth/firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    console.log( email, password);
  };

  return (
    <div className="d-flex justify-content-center register">
      <div className="form-image">
        <img src="https://picsum.photos/1200/900" alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Login</h1>
        <form action="get" id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="write your email adress..."
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="write your password..."
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn btn-primary form-control"
              value="Register"
              // type="button"
              // onClick={handleSubmit}
              // e.preventDefault(); --- form submit olmadığı için gerek yok, ama required çalışmaz
            >
              Login
            </button>
          </div>
        </form>
        <button className='btn btn-primary form-control'>Continue With Google</button>
      </div>
    </div>
  )
}

export default Login;