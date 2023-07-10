const drums = document.querySelectorAll('.drum')
const drumName = ['crash','kick','snare','tom1','tom2','tom3','tom4'];


drums.forEach((a,i) => {
    a.innerHTML = '<img src="images/' + drumName[i] +'.png" width="50" />';
})


function plays(num) {

    drums.forEach((a,i) => {
        if(num == i){
            a.classList.add('pressed')
        }
    })

    let sounds = new Audio('sounds/' + drumName[num] + '.mp3');
    sounds.play();
    console.log(drumName[num]);
}

document.addEventListener('keyup', a => {
    drums.forEach(a => {
        a.classList.remove('pressed')
    })
})

document.addEventListener('keydown', (a)=> {
    switch (a.key) {
        case 'w':
            plays(0);
            break;
        case 'a':
            plays(1);
            break;
        case 's':
            plays(2);
            break;
        case 'd':
            plays(3);
            break;
        case 'j':
            plays(4);
            break;
        case 'k':
            plays(5);
            break;
        case 'l':
            plays(6);
            break;
        default:
            break;
    }
})