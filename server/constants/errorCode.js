const errorCodes = {
  429: {
    message: "Too many requests",
    code: 429,
  },
  400: {
    message: "Bad request",
    code: 400,
  },
  500: {
    message: "Internal Server Error",
    code: 500,
  },
  401: {
    message: "Unauthorized request",
    code: 401,
  },
  403: {
    message: "Forbidden",
    code: 403,
  },
  504: {
    message: "Timed out",
    code: 504,
  },
};

 export default errorCodes
