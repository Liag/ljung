/**
* A modern Rundata search interface.
* Copyright (C) 2016  Victor Rådmark
* 
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
* 
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
* 
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

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


