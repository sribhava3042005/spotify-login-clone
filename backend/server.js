const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const mockUser = {
  email: "spotify@gmail.com",
  password: "spotify123"
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (
    email === mockUser.email &&
    password === mockUser.password
  ) {
    return res.json({
      success: true,
      message: "Login Success"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid Credentials"
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});