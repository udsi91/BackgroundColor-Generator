function randomColor() {
  //Rastgele RGBA değerleri oluşturma
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  //RGBA değerlerini arka plan rengi olarak ayarla
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

  //RGBA değerlerini HTML'de belirli bir elemana yazdır
  let colorDisplay = document.getElementById("colorDisplay");
  colorDisplay.innerHTML = "RGB: (" + r + ", " + g + ", " + b + ")";
}

//Butona tıklama olayını dinle
let button = document.getElementById("myButton");
button.addEventListener("click", randomColor);

myButton.addEventListener("keydown", (event) => {
  button.click();
});
