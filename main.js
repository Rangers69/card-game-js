let jumlahGambar = 5;

function buatAngka(){
    let angkaBerurut = [];

    for(let i=1; i<= jumlahGambar; i++){
        angkaBerurut.push(i, i);
    }

    console.log(angkaBerurut);
    return angkaBerurut;
}

function acakAngka(angkaBerurut){
    let angkaAcak = angkaBerurut.sort(function(){
            return 0.5 - Math.random();
    });

    return angkaAcak;
}

function perisiapkanGambar(angkaAcak){
    let str = '';
    angkaAcak.forEach(function(i){
        str += '<div class="gambar">'+
        '<div class="belakang">'+ i +'</div>'+
        '<div class="depan">Rangers</div>'+
    '</div>';
    });

    $('#game').append(str);
}

$(document).ready(function(){
   let angkaBerurut = buatAngka();
   let angkaAcak = acakAngka(angkaBerurut);

   perisiapkanGambar(angkaAcak); 

   console.log('ini angka urut ' + angkaBerurut);
   console.log('ini angka acak ' + angkaAcak);
});