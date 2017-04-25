/**
 * Created by Sahar-PC on 25/04/2017.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;

require('./app/routes.js')(app);
app.listen(port);

console.log("magic happening at " + port);
exports = module.exports = app;