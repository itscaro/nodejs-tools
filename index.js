var express = require('express')

var app = express();
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.enable('view cache');

var exec = require('child_process').exec;

app.get('/', function (req, res) {
  var result
  function puts(error, stdout, stderr) {
      if (error) {
        //res.send(error)
        res.render('home', {
            err: error
        });
      } else {
        res.send(stdout)
      }
    }
  exec("dig itscaro.me", puts)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});