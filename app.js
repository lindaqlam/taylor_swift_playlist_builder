var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressSanitizer = require('express-sanitizer');

var moodsMap = require('./views/moods.js');
var gifs = require('./views/gifs.js');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/playlist', function(req, res) {
	var enabledMoods = [];
	var data = req.body;

	for (const [ key, value ] of Object.entries(data)) {
		enabledMoods.push(key);
	}

	let songsSet = new Set();
	enabledMoods.forEach(function(mood) {
		moodsMap.moodsMap.get(mood).forEach(function(song) {
			songsSet.add(song);
		});
	});

	var allSongs = Array.from(songsSet);

	var gifIndex = Math.floor(Math.random() * gifs.gifs.length);
	var gifLink = gifs.gifs[gifIndex];

	res.render('playlist', { allSongs: allSongs, gifLink: gifLink });
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
	console.log('Server is running!');
});
