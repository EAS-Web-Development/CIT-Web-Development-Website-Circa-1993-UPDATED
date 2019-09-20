function insertDate() {
    var today = new Date();
    document.getElementById('date').innerHTML = today;
}
function autorun() {
    setInterval(insertDate, 1000);
}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", autorun, false);
else if (document.attachEvent) document.attachEvent("onreadystatechange", autorun);
else window.onload = autorun;