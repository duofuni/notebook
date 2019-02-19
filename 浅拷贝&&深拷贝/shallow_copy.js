// 浅拷贝：
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
for (var key in obj1) {
    obj2[key] = obj1[key];
};
console.log(obj1);
console.log(obj2);