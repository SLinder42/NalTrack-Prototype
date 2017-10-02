var express = require('express');
var reload = require('reload');
var bodyParser = require("body-parser");
var app = express();

var NalPurchases = require('./data/NalPurchases.json');
var NalUses = require('./data/NalUses.json');

app.set('port', process.env.PORT || 3000);
app.set('NalPurchaseData', NalPurchases);
app.set('NalUseData', NalUses);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'NalTrack';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/datadisplay'));
// app.use(require('./routes/api'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Load JQuery and Bootstrap through NPM Modules
// app.use('/js', express.static(__dirname+"/node_modules/bootstrap/dist/js"));
// app.use('/js', express.static(__dirname+"/node_modules/jquery/dist/"));
// app.use('/css', express.static(__dirname+"/node_modules/bootstrap/dist/css"));

var server = app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});

// Normal start script:
// "start": node app/app.js

// Start script for package.json in dev mode:
// "start": "nodemon -e css,ejs,js,json --watch app --ignore NalPurchases.json,NalUses.json"

// Start scripts for package.json using pingy:
// "start": "pingy dev",
// "export": "pingy export"

reload(app);