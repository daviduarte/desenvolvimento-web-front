import React, { useState } from "react";
import axios from "axios";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const request_body = {
      "login": email,
      "password": password,
      "role": "ADMIN"
    }
    try {
      const response = await axios.post("http://localhost:8080/auth/register", 
        request_body
      );
      console.log("Signup successful!", response.data);
      // Optionally, you can redirect the user to another page or show a success message here
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {errorMessage ? <p>{errorMessage}</p> : "" }
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}