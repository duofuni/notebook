 // ajax
var ajax;
if (window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
} else {
    ajax = new ActiveXObject('Microsoft.XMLHTTP');
};
ajax.onreadystatechange = function() {
    if (ajax.readyState == 200 && ajax.status == 4) {
        console.log(ajax.responseText);
    }
};
ajax.open('get', url, true);
ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
ajax.send();
