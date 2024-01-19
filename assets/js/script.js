// function cevaplarGizle() {
//     var cevaplar = document.querySelectorAll(".answer");
//     cevaplar.forEach(function (cevap) {
//         cevap.classList.add("cevap");
//     });
// }
//üstteki fonksiyon ilk sayfa açıldığında cevaplar gözükmesin diye oluşturuldu.kaldırdım yine istediğim gbi çalıştı buna gerek yok gibi. .d.d



function cevaplariGetir(kacinciSoru) {
    // Butona tıklandığında, ilgili cevap div'inin görünürlüğünü değiştir
    var cevaplar = document.getElementById("answer" + kacinciSoru);
    cevaplar.classList.toggle("cevap");
}



//toggle sınıfın varlığını tersine çevirir. belirtilen sınıf varsa kaldırır yoksa ekler.

 // foreach kullanımı
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number) {
//   console.log(number);
// }); 