const express = require('express');
const app = express();
const path = require('path');
const port = 3000; 

app.set('view engine','ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')))

const router = require('./routes/router');
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
