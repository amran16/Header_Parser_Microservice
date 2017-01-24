var express = require('express'),
    useragent = require('express-useragent');

var app = express();

var index = require('./routes/index');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


app.use('/', index);


app.listen(process.env.PORT || 3000, function(){
      console.log("Server running on port 3000");
  });
