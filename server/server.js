let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let path = require('path')
let port = process.env.PORT || 8000;
let app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client')));
app.listen(port, () => {
  console.log('Listening on port ', port);
});
