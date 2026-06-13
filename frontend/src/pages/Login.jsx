import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {

  e.preventDefault();

  if (!email || !password) {
    setError("Please fill all fields");
    return;
  }

  try {

    const response = await axios.post(
      "https://spotify-login-clone.onrender.com",
      {
        email,
        password
      }
    );

    navigate("/dashboard");

    setError("");

  } catch (error) {

    setError("Invalid Email or Password");

  }

};

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">

      <div className="bg-[#121212] p-10 rounded-lg w-[400px]">

        <h1 className="text-white text-center text-4xl font-bold mb-8">
          Log in to Spotify
        </h1>

        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded bg-[#2a2a2a] text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-5 rounded bg-[#2a2a2a] text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full bg-green-500 text-black font-bold p-3 rounded-full"
          >
            Log In
          </button>

        </form>

      </div>

    </div>
  );
}

export default App;