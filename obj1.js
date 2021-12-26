function Dog(name, breed, weight, speed, x1) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    // this.mtf = mtf;
    this.age = 0;
    this.speed = speed;
    this.timer = setTimeout(this.countdown, 1000);
    // this.x = 5000;
    this.x1 = x1;
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
    // this.showSpeed = function () {
    //     alert(this.speed);
    // };
    this.countdown = function () {
        // this.timer;
        this.x1 = 5000;
        // document.getElementById("meters").innerHTML = this.x;
        this.x1 -= this.speed;
        if (this.x1 < 0) {
            alert("Fido достиг финиша");
            clearTimeout(this.timer);
        }
        // else {
        //     this.timer = setTimeout(this.countdown, 1000);
        // }
    };
}


// var timer;
// var x = 5000;
// countdown();
// function countdown() {
//     // alert(x);
//     document.getElementById("meters").innerHTML = x;
//     x -= rand;
//     if (x < 0) {
//         alert("Fido достиг финиша");
//         clearTimeout(timer);
//     } else {
//         timer = setTimeout(countdown, 1000);
//     }

let fido = new Dog("Fido", "Mixed", 38, this.speed, this.x1);
let fluffy = new Dog("Fluffy", "Poodel", 38, this.speed, this.x1);
let spot = new Dog("Spot", "Chihuahua", 10, this.speed, this.x1);
var dogs = [fido, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
    let rand = Math.floor(Math.random() * 3) + 0.5;
    dogs[i].start();
    dogs[i].changeSpeed(rand);
    dogs[i].countdown();
}

document.getElementById("dogs").innerHTML = "<table><tr><td>Name</td><td>" + fido.name + "</td><td>" + fluffy.name + "</td><td>" + spot.name + "</td></tr><tr><td>Breed</td><td>" +
    fido.breed + "</td><td>" + fluffy.breed + "</td><td>" + spot.breed + "</td></tr><tr><td>Weight</td><td>" + fido.weight + "</td><td>" + fluffy.weight + "</td><td>" + spot.weight + "</td></tr><tr><td>Speed</td><td>" + fido.speed +
    "</td><td>" + fido.speed + "</td><td>" + spot.speed + "</td></tr><tr><td>Meters to finish</td><td id='meters'>" + fido.x1 + "</td><td id='meters1'>" + fluffy.x1 +
    "</td><td id='meters2'>" + spot.x1 + "</td></tr></table>";
// var timer;
// var x = 5000;
// countdown();
// function countdown() {
//     // alert(x);
//     document.getElementById("meters").innerHTML = x;
//     x -= rand;
//     if (x < 0) {
//         alert("Fido достиг финиша");
//         clearTimeout(timer);
//     } else {
//         timer = setTimeout(countdown, 1000);
//     }
// }

// var timer5;
// var y = 5000;
// countdown1();
// function countdown1() {
//     // alert(x);
//     document.getElementById("meters1").innerHTML = y;
//     y -= rand1;
//     if (y < 0) {
//         alert("Fluffy достиг финиша");
//         clearTimeout(timer5);
//     } else {
//         timer5 = setTimeout(countdown1, 1000);
//     }
// }

// var timer2;
// var z = 5000;
// countdown2();
// function countdown2() {
//     // alert(x);
//     document.getElementById("meters2").innerHTML = z;
//     z -= rand2;
//     if (z < 0) {
//         alert("Spot достиг финиша");
//         clearTimeout(timer2);
//     } else {
//         timer2 = setTimeout(countdown2, 1000);
//     }
// }

