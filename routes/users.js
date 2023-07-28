const express = require("express");
const router = express.Router();
// router.use(logger)
router.get("/", logger,logger,logger,(req, res) => {
  console.log(req.query.name)
  res.send("users");
});
router.get("/login", (req, res) => {
  res.send("users login");
});
router.get("/new", (req, res) => {
  res.render("users/new",{value:"firstname"});
});
router.post("/", (req, res) => {
  console.log(req.body.firstname);
  res.send("hi");
});


router
  .route("/:id")
  .get((req, res) => {
    res.send(`get the user with the id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete the user with the id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`put the user with the id ${req.params.id}`);
  });
  const users = [{name : "saswata"}, {name : "patra"}];
  router.param('id',(req,res,next,id) =>{
    req.user = users[id];
    next();
  })


  function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}

module.exports = router;
