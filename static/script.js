//lab3

var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!"
var C = A + B;
console.log(C);

//window.alert(C + z)
function SumNPrint(x1, x2){
    var x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (z == C.length){
    console.log("good job!");
} else if (z < C.length){
    console.log("C");
} else {
    console.log(z);
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// old findTheBanana
// function findTheBanana(array){
//     for (var i = 0; i < array.length; i++){
//         if (array[i] == "Banana"){
//             window.alert("found the banana in " + i);
//         }
//     }
// }

function findTheBanana(array){
    array.forEach(function(fruit, i){
        if (fruit == "Banana"){
            window.alert("found the banana in " + i);
        }
    });
}

// findTheBanana(L1);
// findTheBanana(L2);

function greetingFunc(){
    var d = new Date();
    var h = d.getHours();
    if (h < 12){
        document.getElementById("greeting").innerHTML = ("Good morning, I am Deeptika");
    } else if (h >= 12 && h < 18){
        document.getElementById("greeting").innerHTML = ("Good afternoon, I am Deeptika");
    } else if (h >= 18 && h < 20){
        document.getElementById("greeting").innerHTML = ("Good evening, I am Deeptika");
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)){
        document.getElementById("greeting").innerHTML = ("Good night, I am Deeptika");
    }
}

greetingFunc();

//lab4

function addYear(){
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyYear").innerHTML += y;
}

// function showList(){
//     document.getElementById("seeMore").style.display = "none";
//     document.getElementById("seeMoreList").style.display = "block";
// }

$(document).ready(function(){
    $('#long').hide();
    $('#readLess').hide();
    $('#readMore').click(function(){
        $('#readMore').hide();
        $('#long').show();
        $('#readLess').show();
    }); 
    $('#readLess').click(function(){
        $('#long').hide();
        $('#readLess').hide();
        $('#short').show();
        $('#readMore').show();
    });
});

function checkForm(){
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const comment = document.getElementById("comment");
    const errorName = document.getElementById("errorName");
    const errorEmail = document.getElementById("errorEmail");
    const errorComment = document.getElementById("errorComment");
    if (!name.checkValidity()){
        errorName.style.display = "block";
        errorName.style.color = "hotpink";
        errorName.innerHTML = "Please fill out Name";
    } else {
        errorName.style.display = "none";
    }
    if (!email.checkValidity()){
        errorEmail.style.display = "block";
        errorEmail.style.color = "hotpink";
        errorEmail.innerHTML = "Please fill out Email";
    } else {
        errorEmail.style.display = "none";
    }
    if (!comment.checkValidity()){
        errorComment.style.display = "block";
        errorComment.style.color = "hotpink";
        errorComment.innerHTML = "Please fill out Comment";
    } else {
        errorComment.style.display = "none";
    }
}


function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json()) 
        .then(data => {
            const advice = data.slip.advice;
            document.getElementById("adviceText").innerText = advice;
        })
        .catch(error => {
            document.getElementById("adviceText").innerText = 'error';
        });
}



