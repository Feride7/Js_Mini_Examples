
var tahmin, can=5, sayac = 0;
var sayi = Math.floor((Math.random() * 10) + 1);

//document.write(sayi);

while (can > 0) {
    can--;
    sayac++;
    tahmin = Number(prompt(" Lütfen bir sayı giriniz "));


    if (sayi == tahmin) {
       document.write(`Tebrikler ${sayac} defada bildiniz <br>`);
       document.write(`Puan: ${100 - (100 / can) * (sayac - 1)}`)
        break;
    }
    else if (sayi > tahmin) {
        document.write(" Daha büyük bir sayı giriniz <br>")
    }
    else {
        document.write(" Daha küçük bir sayı giriniz <br>")
    }
    if (can == 0) {
        document.write(" Üzgünüz, canınız kalmadı...<br\> Sayımız : " +sayi+" idi")
    }
}