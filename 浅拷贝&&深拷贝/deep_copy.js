// 深拷贝：
(function () {
    var obj1 = {
        name: 'duofuni',
        age: '18',
        favorite: function () {
            console.log('I have always loved reading！');
        },
        pet: ['dog', 'cat'],
        friend: {
            name: 'Cady',
            age: '16',
            favorite: function () {
                console.log('I have always loved sports！');
            },
        }
    };
    var obj2 = {};

    function _type(attr) {
        return Object.prototype.toString.call(attr);
    };

    function deep_copy(a, b) {
        for (var key in a) {
            var item = a[key]; // 拿到a中的每一项
            if (_type(item) === '[object Array]') { // 如果某个属性是数组
                b.key = []; // 先给b定义key这个数组属性
                deep_copy(item, b.key); // 使用递归再次拷贝b.key属性
            } else if (_type(item) === '[object Object]') { // 如果某个属性是对象
                b.key = {}; // 先给b定义key这个对象属性
                deep_copy(item, b.key);
            } else {
                b[key] = item;
            };
        };
    };
    deep_copy(obj1, obj2);
    console.log(obj1);
    console.log(obj2);
}());