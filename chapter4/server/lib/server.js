'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webPush = require('web-push');

var _webPush2 = _interopRequireDefault(_webPush);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var queue = [];
var em = new _events2.default();

app.use(_bodyParser2.default.json());

app.post('/api/push', function (req, res) {
	var sub = req.body.subscription;
	queue.push(sub);
	res.send('OK');
});
app.post('/api/offline', function (req, res) {
	res.json(req.body);
});

app.get('/api/sse', function (req, res) {
	em.on('sseevent', function (data) {
		res.write('event: sse\n');
		res.write('data: ' + JSON.stringify({ msg: data }) + '\n\n');
	});
	res.set({
		"Content-Type": "text/event-stream",
		"Cache-Control": "no-cache",
		"Connection": "keep-alive",
		"Access-Control-Allow-Origin": "*"
	});
	res.write("retry: 10000\n\n");
});

function timedEventEmitter() {
	setInterval(function () {
		em.emit('sseevent', 'message with number: #' + Math.round(Math.random(2000, 1000000) * 100000));
	}, 5000);
}

function pushService() {
	var success = function success(res) {
		console.log(res);
	},
	    error = function error(err) {
		console.log(err);
	};
	setInterval(function () {
		var i = queue.length;
		while (i--) {
			var pushSubscription = queue.pop(); //your subscription object
			var payload = 'This is the push message you asked for :)';
			if (pushSubscription) {
				var options = {
					vapidDetails: {
						subject: 'http://localhost:4000/',
						publicKey: 'BHVJ8n4KMCPy7YOTwNTwn-M3lSKOP_J1PgPQ5lau8ExQ_HwhpbwjYwxtne9vFaOGMzVj_ETeLu5uv8sCZGwFFFc', //These are the keys you generated in step 1
						privateKey: 'FLuaKQ7j6ZDxwM_5q0Yr69f0MPaV-M-EBMtC8dgo_Ao' //These are the keys you generated in step 1
					},
					TTL: 90000,
					headers: {
						//'< header name >': '< header value >'
					}
				};
				_webPush2.default.sendNotification(pushSubscription, payload, options).then(success).catch(error);
			}
		}
	}, 60000);
}
//Listen on port
app.listen(3005);
pushService();
timedEventEmitter();