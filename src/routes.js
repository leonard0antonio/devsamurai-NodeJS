const { Router } = require('express');
const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Welcome to the Customers API!" });
});

module.exports = routes