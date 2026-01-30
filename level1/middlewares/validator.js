function validator(req, res, next) {
  const { name, email, age } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name must be entered" });
  }

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Email is not valid" });
  }

  if (!age || age < 16) {
    return res.status(400).json({ error: "Age must be greater than 16" });
  }

  next();
}
