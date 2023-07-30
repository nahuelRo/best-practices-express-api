// Utilizo la libreria express
const express = require("express");

// Utilizo la función Router, esto me permite
// Modularizar mis rutas
const router = express.Router();

// Get al path "/"
router.get("/", (req, res) => {
  res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

// Exporto el router
module.exports = router;
