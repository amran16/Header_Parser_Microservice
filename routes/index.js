var express = require('express');
var router = express.Router();
var  useragent = require('express-useragent');

router.use(useragent.express());

router.get('/', function(req, res){
    res.render('index');
});

router.get('/whoami', function(req, res){
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

router.get('*', function(req, res){
    res.render('index');
});

module.exports = router;
