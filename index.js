const express = require("express");
// const blogRouter=require("./route/blogroute")
const searchroute = require("./route/searchrouter");
const productRoute = require("./route/procductRote");
const app = express();
app.use(express.json());
const cors = require("cors");

const connection = require("./config/db");
const routeone = require("./route/userrouter");
const port = process.env.PORT || 5050;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use( searchroute);
app.use("/api", routeone);
app.use("/api", productRoute);
// app.use("/api",blogRouter)
app.listen(port, async () => {
  try {
    await connection();
    console.log("server is runnig");
  } catch (err) {
    console.log(err, "error");
  }
});
