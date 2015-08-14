function sayHello(to) {
	return _template("Hello, <%= name %>!")({name: to});
}