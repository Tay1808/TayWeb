function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    let russianDate = today.toLocaleString('ru-RU');
    let spain = new Date();
    spain.setHours(14);
    let spanishDate = spain.toLocaleString('es-ES');
    let german = new Date();
    german.setHours(14);
    let germanDate = german.toLocaleString('de-DE');
    let france = new Date();
    france.setHours(14);
    let franceDate = france.toLocaleString('fr-FR');
    let egypt = new Date();
    let egyptDate = egypt.toLocaleString('ar-EG'); 
    
    out.innerHTML = "Дата и время для русской локали : " + russianDate + "<br>";
    out.innerHTML += "Дата и время для испанской локали : " + spanishDate + "<br>"; 
    out.innerHTML += "Дата и время для локали Египта: " + egyptDate + "<br>";   
    out.innerHTML += "Дата и время для локали Германии : " + germanDate + "<br>"; 
    out.innerHTML += "Дата и время для локали Франции: " + franceDate;

    let additionalInfo = document.getElementById('additional-info');
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    additionalInfo.innerHTML += `
        Текущий год: ${today.getFullYear()}<br>
        Текущий месяц: ${today.toLocaleString('ru-RU', { month: 'long' })}<br>
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
