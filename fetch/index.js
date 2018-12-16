// 基于Promise
// class HttpRequast {
//     get(url) {
//         return new Promise((resolve, reject) => {
//             fetch(url)
//                 .then(res => res.json())
//                 .then(res => resolve(res))
//                 .catch(err => reject(err));
//         });
//     };
//     post(url, data) {
//         return new Promise((resolve, reject) => {
//             fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             })
//                 .then(res => res.json())
//                 .then(res => resolve(res))
//                 .catch(err => reject(err));
//         });
//     };
//     put(url, data) {
//         return new Promise((resolve, reject) => {
//             fetch(url, {
//                 method: 'PUT',
//                 headers: {
//                     'content-type': 'application',
//                 },
//                 body: JSON.stringify(data),
//             })
//                 .then(res => res.json())
//                 .then(res => resolve(res))
//                 .catch(err => reject(err));
//         });
//     };
//     delete(url) {
//         return new Promise((resolve, reject) => {
//             fetch(url, {
//                 method: 'DELETE',
//                 header: {
//                     'content-type': 'application',
//                 },
//                 body: JSON.stringify(data),
//             })
//                 .then(res => res.json())
//                 .then(res => resolve('删除成功！'))
//                 .catch(err => reject(err));
//         });
//     }
// }

// 基于async/await
class HttpRequast {
    async get(url) {
        const res = await fetch(url);
        return res.json();
    };
    async post(url, data) {
        const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
            });
        return res.json();
    };
    async put(url, data) {
        const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application',
                },
                body: JSON.stringify(data),
            });
        return res.json();
    };
    async delete(url) {
        const res = await fetch(url, {
                method: 'DELETE',
                header: {
                    'content-type': 'application',
                },
                body: JSON.stringify(data),
            });
        return res.json();
    }
}