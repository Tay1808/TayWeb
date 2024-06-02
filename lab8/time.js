function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
    let sec = today.getSeconds(); 
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(showTime, 1000);