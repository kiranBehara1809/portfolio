import { Router } from "express";
var gitRoutes = Router();

// router.use(function(req, res, next) {
//   console.log('Connection to the API..');
//   next();
// });

gitRoutes.get("/login", (req, res) => {
  res.json({
    name: "s",
  });
});

export default gitRoutes ;
