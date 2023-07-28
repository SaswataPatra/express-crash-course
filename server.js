const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json())
const userRouter = require('./routes/users');
app.use(express.static('public'));

app.use('/users',userRouter);
app.set('view engine','ejs');

app.get('/', (req, res) => {
  res.render('index',{text6363:"world"});
})


const port = 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})