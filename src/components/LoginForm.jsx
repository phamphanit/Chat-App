import { useState } from "react";

import axios from "axios";
const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "aedcf9af-272d-4b12-8c9c-f53fbd583474",
      "User-Name": userName,
      "User-Secret": password,
    };
    try {
      console.log(userName, password);
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
      setError("Opps. Please try another Account");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="User Name"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
            <h2 className="error">{error}</h2>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
