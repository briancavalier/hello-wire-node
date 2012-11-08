// Load wire
var wire = require('wire');

// Use wire programmatically to wire the spec to produce
// a fully wired context.
// We can supply a require function here, and wire will use it.
// This helps to resolve relative module ids (e.g. './foo') from
// within a wire spec, since node doesn't support any notion of
// path or package mappings (like AMD does).
wire(require('./spec'), { require: require }).then(null, console.error);