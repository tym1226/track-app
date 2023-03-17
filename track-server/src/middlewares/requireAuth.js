const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }

  // token === "Bearer xxxx..."
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, "MY SECRET_KEY", async (error, payload) => {
    if (error) {
      return res.status(401).send({ error: "You must be logged in." });
    }

    const { userId } = payload;

    const user = await User.findById(userId);
    // assign user
    req.user = user;
    // call next middleware inside a chain of middlewares
    next();
  });
};
