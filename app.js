function displayCurrentDateTime() {
    var currentDate = new Date();
    var dateString = currentDate.toLocaleDateString();
    var timeString = currentDate.toLocaleTimeString();
    var dateTimeString = dateString + ' ' + timeString;
    document.getElementById('datetime').innerHTML = dateTimeString;
}


