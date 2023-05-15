let jumlahGambar = ['golang-48.png','java-48.png','javascript-48.png','php-16.png','ruby-48.png','golang-48.png','java-48.png','javascript-48.png','php-16.png','ruby-48.png'], kartuPertama = 0, kartuKedua=0;

function buatAngka(){
    let angkaBerurut = []; 

    for(let i=1; i<= jumlahGambar.length; i++){
        angkaBerurut.push(jumlahGambar.splice(0),jumlahGambar.splice(0));
    }
     
    // console.log('gambar urut',angkaBerurut);
    return angkaBerurut;
}


function acakAngka(jumlahGambar){
    let angkaAcak = jumlahGambar[0].sort(function(){
            return 0.5 - Math.random();
    });

    return angkaAcak;
}

function perisiapkanGambar(angkaAcak){
    let str = '';
    angkaAcak.forEach(function(i){
        str += '<div class="gambar" nilai="'+i+'">'+
        '<div class="belakang"><img src="./assets/'+i+'"> </div>'+
        '<div class="depan">Rangers</div>'+
    '</div>';
    });

    $('#game').append(str);
}

function rulesGame(){
    $('.gambar').on('click', function(){
        $(this).addClass('buka');

        if(kartuPertama == 0){
            kartuPertama = $(this).attr('nilai');
            // kartuPertama = $(this).children('.belakang').text();

            console.log(kartuPertama);
        }else{
            kartuKedua = $(this).attr('nilai');
            console.log(kartuKedua);
            if(kartuPertama == kartuKedua){
                $('.buka').addClass('betul');
                $('.betul').removeClass('buka');
                kartuPertama = 0;
                kartuKedua = 0;
                console.log('betul');
            }else{
                console.log('salah');
                kartuPertama = 0;
                kartuKedua = 0;
                $(this).one('transitionend', function(){
                    $('.gambar').removeClass('buka');
                });
            }
        }
    });
}

$(document).ready(function(){
   let angkaBerurut = buatAngka();
   let angkaAcak = acakAngka(angkaBerurut);

   perisiapkanGambar(angkaAcak); 
   rulesGame();

//    console.log('ini angka acak ' + angkaBerurut);
//    console.log('ini angka acak ' + angkaAcak);
});