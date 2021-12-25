function Dog(name, breed, weight, speed, mtf) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.mtf = mtf;
    this.age = 0;
    this.speed = speed;
    this.bark = function () {
        if (weight < 20) {
            alert(this.name + " сказал Тяв!");
        }
        else if (weight >= 20) {
            alert(this.name + " сказал Гав!");
        }
        else {
            alert("Error!")
        }
    };
    this.start = function () {
        this.speed = 1;
    };
    this.stop = function () {
        this.speed = 0;
    }
    this.changeSpeed = function (amount) {
        this.speed *= amount;
    };
    this.showSpeed = function () {
        alert(this.speed);
    };
    // this.toString = function () {
    //     // return this.name + "." + this.name + " " + this.breed + " " + this.weight;
    //     return `${this.name} ${this.breed} ${this.weight}`
    // };
}

let rand = Math.floor(Math.random() * 3) + 0.5;
let rand1 = Math.floor(Math.random() * 3) + 0.5;
let rand2 = Math.floor(Math.random() * 3) + 0.5;

// let timer;
// let x = 20;
// countdown();
// function countdown() {
//     // alert(x);
//     document.getElementById("meters").innerHTML = x;
//     x -= rand;
//     if (x <= 0) {
//         alert("Вы достигли финиша");
//         clearTimeout(timer);
//     } else {
//         timer = setTimeout(countdown, 1000);
//     }
// }




let fido = new Dog("Fido", "Mixed", 38, rand, x);
let fluffy = new Dog("Fluffy", "Poodel", 38, rand1, 20, y);
let spot = new Dog("Spot", "Chihuahua", 10, rand2, 20, z);

let dogs = [fido, fluffy, spot];

// let dogs = [fido, fluffy, spot];

// for (let i = 0; i < dogs.length; i++) {
//     // alert(dogs[i]);
//     document.getElementById("dogs").innerHTML = "<table><tr><td>Name</td><td>" + .name + "</td></tr><tr><td>Breed</td><td>" +
//         fido.breed + "</td></tr><tr><td>Weight</td><td>" + fido.weight + "</td></tr><tr><td>Speed</td><td>" + fido.speed +
//         "</td></tr><tr><td>Kilometers to finish</td><td>" + + "</td></tr></table>";
//     // alert(dogs[i].toString());
//     // dogs[i].bark();
//     // dogs[i].start();
//     // dogs[i].changeSpeed(2);
//     // dogs[i].showSpeed();
//     // alert(toString(dogs[i]));
// }

document.getElementById("dogs").innerHTML = "<table><tr><td>Name</td><td>" + fido.name + "</td><td>" + fluffy.name + "</td><td>" + spot.name + "</td></tr><tr><td>Breed</td><td>" +
    fido.breed + "</td><td>" + fluffy.breed + "</td><td>" + spot.breed + "</td></tr><tr><td>Weight</td><td>" + fido.weight + "</td><td>" + fluffy.weight + "</td><td>" + spot.weight + "</td></tr><tr><td>Speed</td><td>" + fido.speed +
    "</td><td>" + fluffy.speed + "</td><td>" + spot.speed + "</td></tr><tr><td>Meters to finish</td><td id='meters'>" + fido.mtf + "</td><td id='meters1'>" + fluffy.mtf +
    "</td><td id='meters2'>" + spot.mtf + "</td></tr></table>";

var timer;
var x = 5000;
countdown();
function countdown() {
    // alert(x);
    document.getElementById("meters").innerHTML = x;
    x -= rand;
    if (x < 0) {
        alert("Fido достиг финиша");
        clearTimeout(timer);
    } else {
        timer = setTimeout(countdown, 1000);
    }
}

var timer5;
var y = 5000;
countdown1();
function countdown1() {
    // alert(x);
    document.getElementById("meters1").innerHTML = y;
    y -= rand1;
    if (y < 0) {
        alert("Fluffy достиг финиша");
        clearTimeout(timer5);
    } else {
        timer5 = setTimeout(countdown1, 1000);
    }
}

var timer2;
var z = 5000;
countdown2();
function countdown2() {
    // alert(x);
    document.getElementById("meters2").innerHTML = z;
    z -= rand2;
    if (z < 0) {
        alert("Spot достиг финиша");
        clearTimeout(timer2);
    } else {
        timer2 = setTimeout(countdown2, 1000);
    }
}
