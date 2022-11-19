let second = 0;
let min = 0;
let hrs = 0;
setInterval(() => {
    let secTime = document.getElementById('sec');
    let minTime = document.getElementById('minutes');
    let hrsTime = document.getElementById('hours');
    if (second == 5) {
        second = 0;
    }
    second++;
    let minutes = minTime.innerHTML;
    if (second == 5 ) {
        min++;
    }
    //hours and minutes 
    let hours = hrsTime.innerHTML;
//     if (min == 5) {
//         min = 1;
//         hrs++;
//     }
    // differnt way
    if (min > 5 || min == 5) {
        min = 1;
        hrs++;
    }
    secTime.innerHTML = second;
    minTime.innerHTML = min;
    hrsTime.innerHTML = hrs;
}, 1000)