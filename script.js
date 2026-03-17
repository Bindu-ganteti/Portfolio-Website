const roles = [
"Web Development Enthusiast",
"UI/UX Designer",
"Data Science Learner",
"Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect(){

if(charIndex < roles[roleIndex].length){

document.getElementById("typing").innerHTML += roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,60);

}else{

setTimeout(eraseEffect,1200);

}

}

function eraseEffect(){

if(charIndex > 0){

document.getElementById("typing").innerHTML =
roles[roleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,40);

}else{

roleIndex++;

if(roleIndex >= roles.length){
roleIndex = 0;
}

setTimeout(typeEffect,200);

}

}

typeEffect();