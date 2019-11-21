const express = require('express');
const app = express();
const port = 3000;
const proxy = require('express-http-proxy');
const morgan = require('morgan');
const path = require('path');

app.use(morgan('dev'));
app.use(express.static('public'));

// app.get('/:productName', (req, res) => {
//   res.sendFile(path.join(__dirname + '/public/index.html'));
// })

app.listen(port, () => console.log(`listening on port ${port}`));