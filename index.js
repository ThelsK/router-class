// ============================================================
// ========== Set up API
// ============================================================

const app = require("express")()
const port = process.env.PORT || 3000
const appListen = () =>
  app.listen(port, () => console.log(`Listening on port ${port}`))

app.use(require("./routers/studentRouter"))
app.use(require("./routers/teacherRouter"))

// ============================================================
// ========== Initialize
// ============================================================

appListen()