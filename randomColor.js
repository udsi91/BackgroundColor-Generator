function randomColor() {
  //Rastgele RGBA değerleri oluşturma
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  //RGBA değerlerini arka plan rengi olarak ayarla
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

  //RGBA değerlerini HTML'de belirli bir elemana yazdır
  var colorDisplay = document.getElementById("colorDisplay");
  colorDisplay.innerHTML = "RGB: (" + r + ", " + g + ", " + b + ")";
}

//Butona tıklama olayını dinle
var button = document.getElementById("myButton");
button.addEventListener("click", randomColor);
