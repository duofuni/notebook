// 冒泡排序
// 嵌套遍历，比较前后两项大小
~ function () {
    var arr = [5, 65, 34, 53, 222, 2, 66, 34, 765, 23, 9];

    function bubbleSort(arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length - i; j++) {
                // 升序
                // if (arr[j] > arr[j + 1]) {
                //     var temp = arr[j];
                //     arr[j] = arr[j + 1];
                //     arr[j + 1] = temp;
                // }

                // 降序
                if (arr[j] < arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        };
        return arr;
    };

    // console.log(bubbleSort(arr));

    // sort 排序

    // 升序
    arr.sort(function (a, b) {
        return a - b;
    });

    // 降序
    arr.sort(function (a, b) {
        return b - a;
    });
    console.log(arr);
}();