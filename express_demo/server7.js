const express = require('express');
const multer = require('multer');

let server = express();
server.listen(8080);


let obj = multer({dest: './static/upload'});
server.use(obj.any());

server.post('/upload', (req, res) => {
  console.log(req.files);
});

