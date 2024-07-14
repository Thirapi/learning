function computer() {
    const comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
};

function getValue(comp, player) {
    if( player == comp )
        return 'SERI!';
    if( player == 'gajah' )
        return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) 
        return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' )
        return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function roll() {
    const computerImg = document.querySelector('.img-komputer');
    const imageGOS = ['gajah', 'orang', 'semut'];
    let i = 0;
    const thisTime = new Date().getTime();
    setInterval(function() {
        if( new Date().getTime() - thisTime > 1000 ) {
            clearInterval;
            return;
        }
        computerImg.setAttribute('src', 'img/'+ imageGOS[i++] + '.png');
        if( i == imageGOS.length ) i = 0;
    }, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
    const pilComp = computer();
    const pilPlayer = pil.className;
    const hasil = getValue(pilComp, pilPlayer);

    roll();

    setTimeout(function() {
        const imgComp = document.querySelector('.img-komputer');
        imgComp.setAttribute('src', 'img/' + pilComp + '.png');
    
        const info = document.querySelector('.info');
        info.innerHTML = hasil;
    }, 1000);
    });
});















// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilComp = computer();
//     const pilPlayer = pGajah.className;
//     const hasil = getValue(pilComp, pilPlayer);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + pilComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilComp = computer();
//     const pilPlayer = pSemut.className;
//     const hasil = getValue(pilComp, pilPlayer);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + pilComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilComp = computer();
//     const pilPlayer = pOrang.className;
//     const hasil = getValue(pilComp, pilPlayer);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + pilComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });