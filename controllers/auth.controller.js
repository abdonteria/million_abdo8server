const User = require("../models/User");
const errorHandler = require("../utils/error");

const checkUsername = async (req, res, next) => {
  const { username } = req.body;
  if (typeof username !== "string") {
    return next(errorHandler(406, "Username is not validate"));
  }

  const user = await User.findOne({ username });

  if (user) {
    return res.json({ found: true });
  } else {
    return res.json({ found: false });
  }
};

module.exports = { checkUsername };
