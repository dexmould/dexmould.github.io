//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/002.jpg'){
        myImage.setAttribute ('src','images/003.png');
    }else{
        myImage.setAttribute('src','images/002.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        setUserName();
    }else{
    localStorage.setItem('name', myName);
    myHeading.textContent = 'For your next project,' + myName;
    }
}


if (!localStorage.getItem('name')) {
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}