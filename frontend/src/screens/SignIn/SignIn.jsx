import { useState } from "react";
import "./SignIn.css";
import { logIn } from "../../services/users";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await logIn(form);
      if (user) {
        setUser(user);
        navigate("/budget");
      }
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        password: "",
      });
    }
  };

  const { username, password } = form;

  return (
    <div className="form-container">
      <h3>Log In</h3>
      <form className="form" onSubmit={handleLogin}>
        <label>Username</label>
        <input
          className="sign-input"
          required
          type="text"
          name="username"
          value={username}
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          className="sign-input"
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="sign-btn" type='submit'>Submit</button>
      </form>
    </div>
  );
}