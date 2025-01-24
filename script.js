

let movies = [
    {
        name: "Loki",
        des:
        "After escaping with the Tesseract during Avengers: Endgame, Loki finds himself captured by the Time Variance Authority (TVA). ",
        image:"images/slider 1.PNG"
    },
    {
        name: "The Falcon and the winter Soldier",
        des:
        "Sam Wilson (The Falcon) and Bucky Barnes (The Winter Soldier) team up to face new threats in a world after Captain America. ",
        image:"images/slider 2.PNG"
    },
    {
        name: "Wanda Vision",
        des:
        "Wanda Maximoff and Vision are living an idyllic suburban life, but things aren’t quite as perfect as they seem.",
        image:"./images/slider 3.PNG"
    },
    {
        name: "Raya and the last dragon",
        des:
        "In a fantasy world of mystical creatures, young warrior Raya embarks on a quest to find the last dragon and save her fractured kingdom from an ancient evil.",
        image:"./images/slider 4.PNG"
    },
    {
        name: "Luca",
        des:
        "In a charming seaside town, a young sea monster named Luca experiences a life-changing summer on land, where he befriends another sea creature and explores the human world.",
        image:"images/slider 5.PNG"
    }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex =0;

const createSlide = ()=>{
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

let slide = document.createElement('div');
var imgElement = document.createElement('img');
let content = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');



imgElement.src = movies[slideIndex].image;
h1.textContent = movies[slideIndex].name;
p.textContent = movies[slideIndex].des;

// attaching all elements

// imgElement.appendChild(document.createTextNode(''));
// h1.appendChild(document.createTextNode(movies[slideIndex].name));
// p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(imgElement);
slide.appendChild(content);
carousel.appendChild(slide);


// setting elements class names
slide.className = 'slider';
content.className = 'slide-content';
h1.className = 'movie-title';
p.className = 'movie-des';

// console.log(content);


sliders.push(slide);

if(sliders.length>1){
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length -2)}% - ${30*(sliders.length -2)}px)`;
    }

    slideIndex++;

}

for(let i=0; i<3; i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
}, 1500);

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',()=>{
        let video = item.children[1];
        video.pause();
    })
})

// card sliders
