const express = require( 'express' );
const morgan  = require( 'morgan' );

const PORT    = process.env.PORT || 3000;
const ENV     = process.env.ENV || 'development';
const app     = express();

app.use( morgan( ENV === 'development' ? 'dev' : 'combined' ) );
app.use( express.static( 'public' ) );

const server = app.listen( PORT, () => {
	console.log( `Express app is listening on http://localhost:${PORT}` );
});
