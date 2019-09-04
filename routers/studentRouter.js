const students = ["me", "you", "him", "her"]

const studentRouter = new require("express").Router()
studentRouter.get("/student", (req, res) => res.send(students))

module.exports = studentRouter