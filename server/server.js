import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import gitRoutes from "./github/githubRoutes.js";
import { checkLogin } from "./utils/functions.js";
import errorCodes from "./constants/errorCode.js";
import bodyParser from "body-parser";
import axios from "axios";
import lodash from "lodash";
import path from "path";
global._ = lodash;
global.__dirname = path.resolve("./");

const app = express();
dotenv.config();

const port = process.env.PORT || 4999;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/dummy", (req, res) => {
  res.send("hello from simple server :)");
});
app.use(express.static(path.join(__dirname, "build")));

app.post("/getAccessToken", async (req, res) => {
  if (!req.body?.code) {
    res.status(400).send(errorCodes[400]);
  } else {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const params = `?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${req.body.code}`;
    const response = await axios.post(
      `https://github.com/login/oauth/access_token${params}`,
      {},
      { headers: headers }
    );
    if (response) {
      res.status(200).json({
        code: 200,
        message: "Access token generated...!",
        access_token: response?.data?.access_token || null,
      });
    } else {
      res.status(500).send(errorCodes[500]);
    }
  }
});
// app.use(checkLogin);
app.use("/git", gitRoutes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
