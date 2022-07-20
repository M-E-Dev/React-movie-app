import React from "react";
import { useState } from "react";

const Register = () => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="d-flex justify-content-center register">
      <div className="form-image">
        <img src="https://picsum.photos/1200/900" alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form action="" id="register">
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder="write your first name.."
              onChange={(e) => setFirstName(e.target.value)}
              />
            <label htmlFor="last-name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder="write your last name..."
              onChange={(e) => setLastName(e.target.value)}
              />
            <label htmlFor="email" className="form-label">
            Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="write your email adress..."
              onChange={(e) => setEmail(e.target.value)}
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
              />
              <input type="button" className="btn btn-primary form-control" value="Register"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
