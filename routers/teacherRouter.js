const teachers = ["one", "two", "three", "four"]

const teacherRouter = new require("express").Router()
teacherRouter.get("/teacher", (req, res) => res.send(teachers))

module.exports = teacherRouter