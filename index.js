import express from "express";
import routes from "./src/routes/crmRoutes";

const app = express();

const PORT = 5000;

routes(app);

app.get('/',(req,res) => {
  res.send(`Node & Express running on port ${PORT}`)
})

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);