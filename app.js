function arttir(X) {
  const idsineulastik = `${X}puan`;
  const idninicinegir = document.getElementById(idsineulastik);
  let  sayi = parseInt(idninicinegir.textContent);
  idninicinegir.textContent = ++sayi;
}


function azalt(X) {
  const idlerial = `${X}puan`;
  const idninicinegir = document.getElementById(idlerial);
  let  sayi = parseInt(idninicinegir.textContent);
  if (sayi>0) {
      sayi=sayi-1;
      idninicinegir.textContent= sayi;
  }else{
    alert("skor 0 dan kucuk olamaz")
  }
}

document.getElementById("temizleA").addEventListener("click",function(){
document.getElementById("Apuan").textContent=0;
}
);

document.getElementById("temizleB").addEventListener("click",function(){
document.getElementById("Bpuan").textContent=0;
}
);


function skorunuayarla(X){
const kullaniciningirdigisayi= prompt("yeni gol sayısı:");

    if(kullaniciningirdigisayi!==null && !isNaN(kullaniciningirdigisayi)){
        const yenisayi = parseInt(kullaniciningirdigisayi);
        document.getElementById( `${X}puan`).textContent = yenisayi;
    }else{
        alert("geçersiz değer girildi");
    }
}

