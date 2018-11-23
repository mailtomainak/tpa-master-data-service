module.exports = {
    name:"master-data-api",
    version:"0.0.0.1",
    port:process.env.PORT||8000,
    env: process.env.NODE_ENV || 'development',
    allowedCORSUrl:['http://localhost','http://lvh.me'],
    db: {
		uri: process.env.MONGODB_URI
	},
}

