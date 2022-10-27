export function formatDateTime(timestamp) {
    var date = new Date();
    date.setTime(timestamp);
    var year = date.getFullYear();
    var month = addZero(date.getMonth() + 1);
    var day = addZero(date.getDate());
    var hours = addZero(date.getHours());
    var minutes = addZero(date.getMinutes());
    var seconds = addZero(date.getSeconds());
     return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
   // return year + '-' + month + '-' + day;
}
//加0
function addZero(num) {
    return num < 10 ? '0' + num : num;
}

export function isLogin(){
    return sessionStorage.getItem('token') !== undefined
}