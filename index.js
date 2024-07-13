import express from "express";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
import dotenv from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const swaggerJsDocs = join(__dirname, "./api/docs.yaml");

const newSwaggerJsDocs = YAML.load(swaggerJsDocs);

const app = express();

const PORT = process.env.PORT || 4000;

app.use("/", swaggerUI.serve, swaggerUI.setup(newSwaggerJsDocs));
// app.get("/", (req, res) => {
//   res.json({
//     title: "HNG Stage 3 Paoject",
//     description: "Here is the swagger documentation for the openApis",
//   });
// });

app.listen(PORT, () => {
  console.log("docs running");
});
