import express from "express";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
import dotenv from "dotenv";

dotenv.config();

const swaggerJsDocs = YAML.load("./api/docs.yaml");

const app = express();

const PORT = process.env.PORT || 4000;

app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
// app.get("/", (req, res) => {
//   res.json({
//     title: "HNG Stage 3 Paoject",
//     description: "Here is the swagger documentation for the openApis",
//   });
// });

app.listen(PORT, () => {
  console.log("docs running");
});
