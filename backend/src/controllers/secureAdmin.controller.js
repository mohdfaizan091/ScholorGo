const jwt = require("jsonwebtoken");

async function adminLogin(req, res) {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: "Password required" });
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
}

module.exports = { adminLogin };
