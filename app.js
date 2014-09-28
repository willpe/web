var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000))


// GET /styles.css etc
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
   res.send('hello'); 
});

app.listen(app.get('port'), function() {
  console.log("Running at localhost:" + app.get('port'))
})