// ES5继承：
// 1.原型继承
+ function () {
    function Person(name) {
        this.name = name;
    };
    Person.prototype.sayHai = function () {
        console.log('good night!');
    };

    function Man() {};
    Man.prototype = new Person('candy');
    Man.prototype.saybye = function () {
        console.log('good bye');
    };
    var doctor = new Man('duofuni');
    // doctor.sayHai();
    // doctor.saybye();
    // console.log(doctor.name);
}();
// 2.构造函数继承
-
function () {
    function Person(name) {
        this.name = name;
    };
    Person.prototype.sayHai = function () {
        console.log('good night!');
    };

    function Man(name) {
        // Person.call(this, name);
        Person.apply(this, [name]);

    };
    var doctor = new Man('duofuni');
    // console.log(doctor.name);
}();
// 组合继承
! function () {
    function Person(name) {
        this.name = name;
    };
    Person.prototype.sayHai = function () {
        console.log('good night!');
    };

    function Man(name) {
        Person.call(this, name);
    };
    Man.prototype = new Person('candy');
    var doctor = new Man('duofuni');
    // console.log(doctor.name);
    // doctor.sayHai();
}();


// Es6继承
~ function () {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        };
        sayHai() {
            console.log('hellow fatty!');
        }
    };
    class Woman extends Person{
        constructor(name, age) {
            super(name, age);
        };
        saybye() {
            console.log('good bye fatty!');
        }
    };
    var fatty = new Woman('duofuni', 22);
    console.log(fatty.name);
    fatty.sayHai();
    fatty.saybye();
}();