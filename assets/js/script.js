// document.addEventListener( function () {
//     // Sayfa yüklendiğinde tüm cevapları gizle
//     hideAllAnswers();
// });

function cevaplarGizle() {
    var cevaplar = document.querySelectorAll(".answer");
    cevaplar.forEach(function (cevap) {
        cevap.classList.add("cevap");
    });
}

function cevaplariGetir(kacinciSoru) {
    // Butona tıklandığında, ilgili cevap div'inin görünürlüğünü değiştir
    var cevaplar = document.getElementById("answer" + kacinciSoru);
    cevaplar.classList.toggle("cevap");
}

 // foreach kullanımı
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number) {
//   console.log(number);
// }); 