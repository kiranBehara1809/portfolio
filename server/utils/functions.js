import errorCodes from "../constants/errorCode.js";

const checkLogin = (req, res, next) => {
  console.log("intercepted");
  if (true) {
    return res.status(400).send(errorCodes[400]);
  } else {
    next();
  }
};

export { checkLogin };
