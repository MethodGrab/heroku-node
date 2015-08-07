'use strict'

express = require 'express'

app = express()

port = process.env.PORT || 3000

app.use( express.static( 'public' ) )

server = app.listen port, ->
	console.log "Express app listening on localhost:#{server.address().port}"
