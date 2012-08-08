// Load wire
var wire = require('wire');

// Use wire programmatically to wire the spec to produce
// a fully wired context.
wire(require('./spec')).then(function(context) {
	console.log(context.message);
}, console.error);