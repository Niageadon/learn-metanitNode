function getData(name) {
    this.name = name;
    this.sayHi = function () {
        console.log('hello from ' + name);
    }
}

module.exports = getData();