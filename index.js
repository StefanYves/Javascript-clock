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

  var text = h + ":" + m + ":" + s;
  document.getElementById("MyClock").innerText = text;
  document.getElementById("MyClock").textContent = text;

  setTimeout(showTime, 1000);
}

showTime();
