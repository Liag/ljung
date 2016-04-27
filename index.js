var express = require('express');
//var pg = require('pg');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  	res.render('pages/index');
});

/*app.get('/db', function (request, response) {
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query('SELECT * FROM test_table', function(err, result) {
			done();
			if (err) { 
				console.error(err); response.send("Error " + err); 
			} else { 
				response.render('pages/db', {results: result.rows} ); 
			}
		});
	});
});*/

app.listen(app.get('port'), function() {
  	console.log('Node app is running on port', app.get('port'));
});

