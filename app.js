var express = require('express'),
    useragent = require('express-useragent');

var app = express();

app.use(useragent.express());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/whoami', function(req, res){
   //console.log(req.headers);
   //console.log(req.useragent);
   var detail = req.useragent;

   var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
   var lang = req.headers['accept-language'].split(',')[0];
   var software = req.headers['user-agent'].split(/[()]/)[1];

   var data = {
       "ip address": ip,
       "language": lang,
       "software": software,
       "browser": detail.browser,
       "version": detail.version,
       "Plateform": detail.platform
   };
   res.send(data);
});


app.listen(process.env.PORT || 3000, function(){
      console.log("Server running on port 3000");
  });
