module.exports = {
    name:"master-data-api",
    version:"0.0.0.1",
    port:process.env.PORT||8000,
    env: process.env.NODE_ENV || 'development',
    allowedCORSUrl:['http://localhost','http://lvh.me'],
    db: {
		uri: process.env.MONGODB_URI || 'mongodb://dev-db-user:7ad80c07-34b0-46f4-abb2-71e16cb6fe0a@ds149437.mlab.com:49437/datastore-mongo-dev',
	},
}

