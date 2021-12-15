window.addEventListener("DOMContentLoaded", (e) => {
  var countDownDate = new Date("Dec 17, 2021 10:00:00").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("compteur").innerHTML =
      days +
      "j" +
      "&nbsp" +
      hours +
      "h" +
      "&nbsp" +
      minutes +
      "m" +
      "&nbsp" +
      seconds +
      "s";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "joyeux noel";
    }
  }, 1000);
});

//Messaoud//