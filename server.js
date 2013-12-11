var http = require('http')
  , connect = require('connect')
  , dir = __dirname + "/static"

var app = connect()
.use(connect.bodyParser())
.use(connect.static(dir))
.use(function (req, res) {
  console.log(req.body, "THIS IS THE BODY"); 
  res.end();
});

http.createServer(app).listen(1337);
