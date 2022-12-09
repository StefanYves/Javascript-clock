function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  if (h == 24) {
    h = 0;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var clock = h + ":" + m + ":" + s;
  document.getElementById("MyClock").innerText = clock;
  document.getElementById("MyClock").textContent = clock;

  setTimeout(showTime, 1000);
}

function showDate() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  month = month + 1;

  var text = day + "." + month + "." + year;
  document.getElementById("MyDate").innerText = text;
  document.getElementById("MyDate").textContent = text;

  setTimeout(showDate, 1000);
}

showTime();
showDate();
