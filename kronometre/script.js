var saniye=0;

function kronometre(){
    var dk=Math.floor(saniye/60);
    var saat= Math.floor(saniye/3600);
    var dakika=dk%60;
    var sn=saniye%60;


    document.write(saat+" : "+dakika+" : "+sn);
    document.write("<br/>");
    saniye++;
}
    setInterval("kronometre()",1000);
