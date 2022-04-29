
// animation de la keyframe neon
let names = document.querySelector('.name')
setTimeout(()=>{
    names.style.animation = 'neon 2s both';
},2000)


// applique le style neon a tous les h1
let titre = document.querySelectorAll(".titre")
// console.log(titre);
if (titre.length > 0) {
    for (h1 = 0; h1 < titre.length; h1++) {
        titre[h1].style.animation = 'neon 3s both';
    }
}

// let imgHtml = document.getElementById('html');
// let imgCss = document.getElementById('css');
// let imgJs = document.getElementById( 'js');
// let imgPhp = document.getElementById('php');
// let imgMySql = document.getElementById('mysql');
// let imgGit = document.getElementById('git');
// let imgNodeJs = document.getElementById('node');
// let imgSass = document.getElementById('sass');

let figures = document.querySelectorAll('figure > img');

// animation lettre par lettre du texte profil
let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat ante sed fringilla bibendum. In quam elit, rutrum quis adipiscing id, iaculis eu ipsum. Morbi faucibus lectus at ante feugiat dignissim. In turpis turpis, placerat in fringilla eget, sodales blandit lacus. Vivamus tempor blandit mauris nec semper. Sed cursus metus sed justo cursus bibendum. Maecenas ornare sem sed lacinia auctor. Nulla sapien dolor, faucibus vitae dapibus in, commodo id est. Sed a ipsum laoreet, convallis lacus eu.';
let lettre = 0;
let lancer = true;



window.addEventListener('scroll', execute) 
function execute(){
    let hauteur = document.documentElement.scrollTop;
    let innerHeight = window.innerHeight
    // console.log(hauteur, 'nombre de pixels depuis le haut de la page');
    
    // scroll section profil

    if(hauteur > innerHeight && lancer) {
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
    if (hauteur > innerHeight * 2) {
        for(i = 0; i < figures.length; i++) {
            figures[i].style.animation = `competence 1s ${0.1 + (0.5*i)}s both`;     
        }
    }
    
    let projets = document.querySelectorAll('.grid-projets > a ');
    console.log(projets);
    if ( hauteur > innerHeight * 3) {

        for (t = 0; t < projets.length; t++) {

            projets[t].style.animation = 'roll-in-right 0.7s  ease-out both';
        }
        
    }
}








