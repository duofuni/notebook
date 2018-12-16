// 数组去重
// 利用对象的属性标记记录数组项重复

// var arr = ['a', 'b', 'c', 'd', 'a', 'a', 'b', 'c', 'd'],
//     obj = {},
//     newArr = [],
//     max = 0,
//     temp = '';

// // forEach
// arr.forEach((item, i) => {
//     if (!obj[item]) {
//         obj[item] = 1;
//         newArr.push(item);
//     } else {
//         obj[item] += 1;
//     };
// });

// // for
// // for (var i = 0; i < arr.length; i++) {
// //     if (!obj[arr[i]]) {
// //         obj[arr[i]] = 1;
// //         newArr.push(arr[i]);
// //     } else {
// //         obj[arr[i]] += 1;
// //     };
// // };
        
// for (var key in obj) {
//     if (obj[key] > max) {
//         max = obj[key];
//         temp = key;
//     }
// };
// console.log(obj);
// console.log(newArr);
// console.log(`重复最多数组项为：${temp};重复次数为：${max}`);





// 字符串去重

var str = 'abcsninarfgvhfnfvhdnddsdf345613fvbsrgsdghdgvsdgdfdsw',
    obj = {},
    newArr = [],
    max = 0,
    temp = '';

// for
for (var i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
        obj[str[i]] = 1;
        newArr.push(str[i]);
    } else {
        obj[str[i]] += 1;
    };
};

for (var key in obj) {
    if (obj[key] > max) {
        max = obj[key];
        temp = key;
    }
};
console.log(obj);
console.log(newArr.join(''));
console.log(`重复最多字符为：${temp};重复次数为：${max}`);
