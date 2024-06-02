function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    let russianDate = today.toLocaleString('ru-RU');
    let spain = new Date();
    let spanishDate = spain.toLocaleString('es-ES');
    let german = new Date();
    let germanDate = german.toLocaleString('de-DE');
    let france = new Date();
    let franceDate = france.toLocaleString('fr-FR');
    let egypt = new Date();
    let egyptDate = egypt.toLocaleString('ar-EG'); 
    
    out.innerHTML = "Дата и время для русской локали : " + russianDate + "<br>";
    out.innerHTML += "Дата и время для испанской локали : " + spanishDate + "<br>"; 
    out.innerHTML += "Дата и время для локали Египта: " + egyptDate + "<br>";   
    out.innerHTML += "Дата и время для локали Германии : " + germanDate + "<br>"; 
    out.innerHTML += "Дата и время для локали Франции: " + franceDate;

    let additionalInf = document.getElementById('additional');
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    additionalInf.innerHTML += `
        Текущий год: ${today.getFullYear()}<br>
        Текущий месяц: ${months[today.getMonth()]}<br>
        Текущая дата: ${today.getDate()}<br>
        День недели: ${daysOfWeek[today.getDay()]}
    `;
}
function showDayOfWeek() {
    let day = document.getElementById('input-day').value;
    let month = document.getElementById('input-month').value - 1;
    let year = document.getElementById('input-year').value;
    let date = new Date(year, month, day);
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let dayOfWeek = daysOfWeek[date.getDay()];
    let resultDiv = document.getElementById('day-of-week-result');
    resultDiv.innerHTML = `День недели: ${dayOfWeek}`;
}
