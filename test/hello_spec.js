describe("Hello", function() {

	it("says_hello to receiver", function() {
		expect(sayHello('Jane')).toBe('Hello, Jane!');
	});

});