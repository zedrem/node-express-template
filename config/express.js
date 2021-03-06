const express = require('express'),
	bodyParser = require('body-parser');

module.exports = function(){
	const app = express()

	app.use(bodyParser.json({limit: '50mb'}));
	app.use(bodyParser());


	app.get('/', function(req, res){
		res.status(200).json({"msg": "Server up"});
  });

	require('../app/routes/user.server.routes')(app);

	return app;
}
