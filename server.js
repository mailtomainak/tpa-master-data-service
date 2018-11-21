const mongoose = require('mongoose');
const restify = require('restify');
const restifyPlugins = require('restify').plugins;
const config = require('./config');
const controllers = require('./controllers/hospital_names');
const corsMiddleware = require('restify-cors-middleware')

const server = restify.createServer({
	name: config.name,
  version: config.version
});


const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional
    origins:config.allowedCORSUrl
  })
  server.pre(cors.preflight);
  server.use(cors.actual);
  
  server.use(restifyPlugins.jsonBodyParser({ mapParams: true }),
  restifyPlugins.acceptParser(server.acceptable),
  restifyPlugins.queryParser({ mapParams: true }),
  restifyPlugins.fullResponse()
  );
  

server.get('/api/mdm/hospitals',controllers.fetchHospitalNames);

server.listen(config.port,()=>{    
    mongoose.Promise = global.Promise;
	mongoose.connect(config.db.uri);

	const db = mongoose.connection;

	db.on('error', (err) => {
	    console.error(err);
	    process.exit(1);
	});

	db.once('open', () => {
	    //require('./routes')(server);
	    console.log(`Server is listening on port ${config.port}`);
	});
})