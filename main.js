var wire = require('wire');

wire(require('./spec')).then(function(context) {
	console.log(context.message);
}, console.error);