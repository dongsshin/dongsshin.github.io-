let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

//alert('Old String:' + myHeading.textContent);
myHeading.textContent = 'Hello world!';

/*
let htmlPageClick = document.querySelector('html');
htmlPageClick.onclick = function(){
    alert('new');
}
*/
let fireFoxImage = document.querySelector('img');
console.log(fireFoxImage);

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedUserName = localStorage.getItem('name');
    myHeading.textContent = 'Test page is good, ' + storedUserName;
}
function setUserName(){
    let userName = prompt('Please enter user name.');
    if(!userName || userName == null){
        setUserName();
    }else{
        localStorage.setItem('name',userName);
        myHeading.textContent = 'Test page is good, ' + userName;
        
    }
}
function sum(x,y){
    return x+y;
}
function consoleTest(){
    console.group("Test Group");
    console.log("att1");
    console.log("att2");
    console.groupEnd();


    console.assert(true,"this is true");
    console.log("%c Color is changed","color:brown;font-size:large");
    console.dir(document.body);

    console.table([{a:1,b:2,c:3},{a:"dkdkdkdk",b:false,c:undefined}]);

    console.time("Calculate Sum");
    let sum = 0;
    for(let i = 0; i < 100000; i++){
        sum += i;
    }
    console.timeEnd("Calculate Sum");
}
fireFoxImage.onclick = function(){
    let imageSrc = fireFoxImage.getAttribute('src');
    let imageAlt = fireFoxImage.getAttribute('alt');
    console.log(imageAlt);
    fireFoxImage.setAttribute('alt','ddddddddddddddddddddddddddddddddddddddd');
    fireFoxImage.setAttribute('link','link');
    fireFoxImage.setAttribute('herf','herf');
    console.log(fireFoxImage);
    if(imageSrc == 'images/logo_summer_login.png'){
        fireFoxImage.setAttribute('src','images/Inkedfirefox-icon-new_LI.jpg');
    }else{
        console.log(imageSrc);
        fireFoxImage.setAttribute('src','images/logo_summer_login.png');
    }
}
myButton.onclick = function(){
    setUserName();
}