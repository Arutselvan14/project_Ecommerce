import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/SignUp.css"; // Ensure you have this CSS file for styles

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/UserDetails/");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load user data. Please try again.");
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find((u) => u.UserEmail == email);

    if (user) {
      if (user.UserPassword == password) {
        alert("Login successful!");
        setError(""); // Clear error if login is successful
        setEmail("")
        setPassword("")
      } else {
        setError("Incorrect password. Please try again.");
      }
    } else {
      setError("User not found. Please check your email.");
      setEmail("")
      setPassword("")
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded-4 border-0" style={{ width: "400px", backgroundColor: "#ffffff" }}>
        <h2 className="text-center text-primary fw-bold mb-3">Welcome Back</h2>
        <p className="text-center text-muted">Please enter your credentials to log in</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control p-2 rounded-3"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control p-2 rounded-3"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 rounded-3 fw-bold">
            Login
          </button>
        </form>
        {error && <p className="text-danger text-center mt-3">{error}</p>}
        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup" className="text-decoration-none text-primary fw-semibold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

