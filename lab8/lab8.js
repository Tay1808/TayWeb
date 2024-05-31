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

}
