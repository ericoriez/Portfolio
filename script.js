// animation de la keyframe neon
let names = document.querySelector('.name')
setTimeout(()=>{
    names.style.animation = 'neon 2s both';
},2000)

// applique le style neon a tous les h1
let titre = document.querySelectorAll(".titre")
if (titre.length > 0) {
    for (h1 = 0; h1 < titre.length; h1++) {
        titre[h1].style.animation = 'neon 3s both';
    }
}

// animation lettre par lettre du texte profil
let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat ante sed fringilla bibendum. In quam elit, rutrum quis adipiscing id, iaculis eu ipsum. Morbi faucibus lectus at ante feugiat dignissim. In turpis turpis, placerat in fringilla eget, sodales blandit lacus. Vivamus tempor blandit mauris nec semper. Sed cursus metus sed justo cursus bibendum. Maecenas ornare sem sed lacinia auctor. Nulla sapien dolor, faucibus vitae dapibus in, commodo id est. Sed a ipsum laoreet, convallis lacus eu.';
let lettre = 0;
let lancer = true;
let figures = document.querySelectorAll('figure > img');


// ****** animation au scroll ****** //
window.addEventListener('scroll', execute) 
function execute(){
    let hauteur = document.documentElement.scrollTop;
    let innerHeight = window.innerHeight
    // scroll section profil
    if(hauteur >= innerHeight && lancer) {
        let Write = function write(){
            let elem = document.getElementById('text-profil');
            elem.textContent = elem.textContent + text.charAt(lettre);
            lettre++;
            if (lettre < text.length) {
                lancer = false
                window.setTimeout(write, 20);
            }
        };
        Write(); 
    } 
    // scroll section compétences
    if (hauteur >= innerHeight * 2) {
        for(i = 0; i < figures.length; i++) {
            figures[i].style.animation = `competence 1s ${0.1 + (0.5*i)}s both`;     
        }
    }
    // scroll section projet
    let projets = document.querySelectorAll('.grid-projets > a ');
    if ( hauteur >= innerHeight * 3) {
        for (t = 0; t < projets.length; t++) {
            projets[t].style.animation = 'roll-in-right 0.7s  ease-out both';
        }
    }
}

//  ******** Pluie ************ //
let footer = document.querySelector('#container-footer');
let drop_count = 800;
for (let i = 0; i < drop_count; i++) {
    let span = document.createElement('span');
    span.classList.add('rain');
    footer.appendChild(span);
    span.style.left = Math.random()*footer.getBoundingClientRect().width - 5 + 'px';
    span.style.top = Math.random()* - 0 + 'px';
    span.style.width = Math.random()*1.5 + 'px';
    span.style.animationDuration = Math.random()* 20 + 's';
    span.style.animationDelay = Math.random()* - 20 + 's';
}

// ********* Modal C.V ********* //

const modal = document.querySelector('.modal-container');
const icone = document.querySelector('.fa-times');
const btnCV = document.querySelector('.fa-id-card');

btnCV.addEventListener('click', () => {
    modal.style.display = "flex";
    icone.addEventListener('click', () => {
        modal.style.display = "none";
    })
})



// ************ AUDIO ********* //
let verif = false;
const play = document.getElementById('play');
const stop = document.querySelector('.fa-pause')
const audio = new Audio("../audio/Rich-in-the-80s-DivKid.mp3");
play.addEventListener('click', (e) =>{
    e.preventDefault();
    
    if(verif == false){
        audio.play();
        audio.loop = true;
        verif = true;
        play.classList.toggle("fa-play");
        play.classList.toggle("fa-pause");
        console.log(play);
        
    }else if(verif == true){
        play.classList.toggle("fa-play");
        play.classList.toggle("fa-pause");
        audio.pause();
        verif = false;
    }

})





