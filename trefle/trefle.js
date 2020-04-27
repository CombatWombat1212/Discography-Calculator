// This Node app serves two purposes:
// 1. Provide front end users with up to date access tokens.
// 2. Deliver the front end of our app (via /public/ folder)

// Libraries
// To install, use "npm install" from the command line
var express = require ('express');  // web app framework

// any available / unused port number will do fine
var port = 7000;

// Express Setup
const app	= express();
app.use( express.json() );

// Enables node to serve up files inside of /public/ folder
// this includes static files (index.html, images, CSS, etc.)
app.use( express.static('public') );

//Go live
app.listen(port, () => {
  console.log("We are live on " + port);
});
