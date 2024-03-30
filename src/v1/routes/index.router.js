const express = require("express");
const router = express.Router();

const test = "";

router.get("/checkstatus", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok",
  });
});

router.get("/api/users", (req, res, next) => {
  const data = [
    { name: "Giang", age: 25 },
    { name: "Huy", age: 26 },
  ];

  res.status(200).json({
    data,
    status: "success",
    message: "api ok",
  });
});

module.exports = router;
