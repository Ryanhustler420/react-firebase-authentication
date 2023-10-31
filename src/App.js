import React, { useState } from "react";
import firebase from "./firebase";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Successful login, handle the user object as needed
        const user = userCredential.user;
        console.log("Logged in as:", user.email);
      })
      .catch((error) => {
        // Handle login error
        console.error("Login error:", error.message);
      });
  };

  const handleRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Successful registration, handle the user object as needed
        const user = userCredential.user;
        console.log("Registered as:", user.email);
      })
      .catch((error) => {
        // Handle registration error
        console.error("Registration error:", error.message);
      });
  };

  return (
    <div>
      <div>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <h2>Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default App;
