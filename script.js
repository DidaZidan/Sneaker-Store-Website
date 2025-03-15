let contents = document.querySelector('.kotch'); // Select the container
let imgElement = contents.querySelector('.imge img'); // Get the current image inside the container
function achngeimgw(param) {
    // Check if the current image source is 'crater.png' or 'crater2.png' and toggle accordingly
    if (imgElement.src.includes(`img/${param}.png`)) {
        // Change to the second image (crater2.png)
        imgElement.src = `img/${param}2.png`;
    }
     
}
function achangeimgb(param){
    if (imgElement.src.includes(`img/${param}2.png`)){
        // Change to the second image (crater2.png)
        imgElement.src = `img/${param}.png`;
    }
}
let txt = document.querySelector('.uhead a ')
let shang=document.querySelector('.kotch .content h1')
let ino = txt.innerText
function check(ino){
if(ino === 'AIR FORCE'){
    shang.innerText='NIKE AIR FORCE IMPACT'
    imgElement.src='img/air.png'
    document.querySelector('.content .bbtn').style.backgroundColor = 'black';
    document.querySelector('.content .wbtn').style.display = 'none';
}
if(ino === 'CRATER'){
    shang.innerText='NIKE CRATER IMPACT'
    imgElement.src='img/crater.png'
    document.querySelector('.content .bbtn').style.backgroundColor = 'black';
    document.querySelector('.content .wbtn').style.display = 'inline-block';
    document.querySelector('.content .wbtn').style.backgroundColor = 'whitesmoke';
}
if(ino === 'JORDAN'){
    shang.innerText='NIKE JORDAN IMPACT'
    imgElement.src='img/jordan.png'
    document.querySelector('.content .bbtn').style.backgroundColor = 'rgb(215, 109, 109)';
    document.querySelector('.content .wbtn').style.display = 'none';
}

if(ino === 'BLAZER'){
    shang.innerText='NIKE BLAZER IMPACT'
    imgElement.src='img/blazer.png'
    document.querySelector('.content .bbtn').style.backgroundColor = 'grey';
    document.querySelector('.content .wbtn').style.display = 'none';
}
if(ino === 'HIPPIE'){
    shang.innerText='NIKE HIPPIE IMPACT'
    imgElement.src='img/hippie.png'
    document.querySelector('.content .bbtn').style.backgroundColor = 'rgb(216, 86, 86)';
    document.querySelector('.content .wbtn').style.display = 'none';
}
}
