// Simple object prototype
module.exports = {
	sayHello: function() {
		console.log(this.message || 'Hello');
	}
};