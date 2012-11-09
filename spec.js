// A wire spec is just an object literal.  Not much interesting
// in this one, but enough to do hello world!
module.exports = {
	message: "I haz been wired",
	// Beget a new foo instance
	myComponent: {
		create: require('./component'),
		properties: {
			message: { $ref: 'message' }
		},
		ready: 'sayHello'
	}
};