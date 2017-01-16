var express = require('express'),
    app = express();
app.use(express.static(__dirname + ''));
app.listen(8080)
console.log('Server running at http://localhost:8080/');