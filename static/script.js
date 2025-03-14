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

findTheBanana(L1);
findTheBanana(L2);

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


