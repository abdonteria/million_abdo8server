const userController = (req, res) => {
  return res.json({ message: "Hello From User Route" });
};

module.exports = { userController };
