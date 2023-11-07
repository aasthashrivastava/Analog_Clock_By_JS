const hr = document.getElementById('hour');
const min = document.getElementById('minute');
const sec = document.getElementById('second');

setInterval(() => {
    d = new Date();
    hour = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();

    hour_rotation = 30 * hour + minute / 2;
    minute_rotation = 6 * minute + second / 10;
    second_rotation = 6 * second;

    hr.style.transform = `rotate(${hour_rotation}deg)`;
    min.style.transform = `rotate(${minute_rotation}deg)`;
    sec.style.transform = `rotate(${second_rotation}deg)`;
}, 1000)