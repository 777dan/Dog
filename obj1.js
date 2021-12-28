// function Dog(name, breed, weight, speed, x1) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     // this.mtf = mtf;
//     this.age = 0;
//     this.speed = speed;
//     // this.timer = setTimeout(this.countdown, 1000);
//     // this.x = 5000;
//     // this.x1 = x1;
//     // this.timer = setTimeout(function () {
//     //     // this.x1 = x1;
//     //     // this.timer;
//     //     // let timer = setInterval(this.countdown, 1000);
//     //     // this.x1 = 5000;
//     //     // document.getElementById("meters").innerHTML = this.x;
//     //     x1 -= this.speed;
//     //     if (x1 < 0) {
//     //         alert("Fido достиг финиша");
//     //         clearTimeout(this.timer);
//     //     }
//     //     // this.x1 = x1;
//     //     // else {
//     //     //     this.timer = setTimeout(this.countdown, 1000);
//     //     // }
//     // }, 1000);
//     // this.timer;
//     // this.x1 = x1;
//     // this.bark = function () {
//     //     if (weight < 20) {
//     //         alert(this.name + " сказал Тяв!");
//     //     }
//     //     else if (weight >= 20) {
//     //         alert(this.name + " сказал Гав!");
//     //     }
//     //     else {
//     //         alert("Error!")
//     //     }
//     // };
//     // this.start = function () {
//     //     this.speed = 1;
//     // };
//     // this.stop = function () {
//     //     // this.speed = 0;
//     //     // if (this.x1 < 0) {
//     //     //     alert("Fido достиг финиша");
//     //     //     clearTimeout(this.timer);
//     //     // }
//     // }
//     // this.changeSpeed = function (amount) {
//     //     this.speed *= amount;

//     let fido = new Dog("Fido", "Mixed", 38, 1.5, 5000);
//     let fluffy = new Dog("Fluffy", "Poodel", 38, 2, 5000);
//     let spot = new Dog("Spot", "Chihuahua", 10, 1, 5000);
//     var dogs = [fido, fluffy, spot];

//     for (let i = 0; i < dogs.length; i++) {
//         let rand = Math.floor(Math.random() * 3) + 0.5;
//         // dogs[i].start();
//         // dogs[i].changeSpeed(rand);
//         dogs[i].countdown();
//     }
//     // };
//     document.getElementById("dogs").innerHTML = "<table><tr><td>Name</td><td>" + fido.name + "</td><td>" + fluffy.name + "</td><td>" + spot.name + "</td></tr><tr><td>Breed</td><td>" +
//         fido.breed + "</td><td>" + fluffy.breed + "</td><td>" + spot.breed + "</td></tr><tr><td>Weight</td><td>" + fido.weight + "</td><td>" + fluffy.weight + "</td><td>" + spot.weight + "</td></tr><tr><td>Speed</td><td>" + fido.speed +
//         "</td><td>" + fluffy.speed + "</td><td>" + spot.speed + "</td></tr><tr><td>Meters to finish</td><td id='meters'>" + fido.x1 + "</td><td id='meters1'>" + fluffy.x1 +
//         "</td><td id='meters2'>" + spot.x1 + "</td></tr></table>";
//     this.countdown = function () {
//         // this.x1 = x1;
//         // this.timer;
//         this.timer = setInterval(this.countdown, 1000);
//         // this.x1 = 5000;
//         // document.getElementById("meters").innerHTML = this.x;
//         x1 -= speed;
//         if (x1 < 0) {
//             alert("Fido достиг финиша");
//             clearTimeout(this.timer);
//         }
//         // document.write(x1);
//         document.getElementById("meters").innerHTML = x1;
//         // this.x1 = x1;
//         // else {
//         //     this.timer = setTimeout(this.countdown, 1000);
//         // }
//     };
//     // this.showSpeed = function () {
//     //     alert(this.speed);
//     // };
//     // this.countdown = function () {
//     //     // this.timer;
//     //     // let timer = setInterval(this.countdown, 1000);
//     //     this.x1 = 5000;
//     //     // document.getElementById("meters").innerHTML = this.x;
//     //     this.x1 -= this.speed;
//     //     if (this.x1 < 0) {
//     //         alert("Fido достиг финиша");
//     //         clearTimeout(timer);
//     //     }
//     //     // else {
//     //     //     this.timer = setTimeout(this.countdown, 1000);
//     //     // }
//     // };
// }

// // this.countdown(setInterval(this.countdown, 1000));

// // let fido = new Dog("Fido", "Mixed", 38, 1.5, 5000);
// // let fluffy = new Dog("Fluffy", "Poodel", 38, 2, 5000);
// // let spot = new Dog("Spot", "Chihuahua", 10, 1, 5000);
// // var dogs = [fido, fluffy, spot];

// // for (let i = 0; i < dogs.length; i++) {
// //     let rand = Math.floor(Math.random() * 3) + 0.5;
// //     // dogs[i].start();
// //     // dogs[i].changeSpeed(rand);
// //     dogs[i].countdown();
// // }

// // document.getElementById("dogs").innerHTML = "<table><tr><td>Name</td><td>" + fido.name + "</td><td>" + fluffy.name + "</td><td>" + spot.name + "</td></tr><tr><td>Breed</td><td>" +
// //     fido.breed + "</td><td>" + fluffy.breed + "</td><td>" + spot.breed + "</td></tr><tr><td>Weight</td><td>" + fido.weight + "</td><td>" + fluffy.weight + "</td><td>" + spot.weight + "</td></tr><tr><td>Speed</td><td>" + fido.speed +
// //     "</td><td>" + fluffy.speed + "</td><td>" + spot.speed + "</td></tr><tr><td>Meters to finish</td><td id='meters'>" + fido.x1 + "</td><td id='meters1'>" + fluffy.x1 +
// //     "</td><td id='meters2'>" + spot.x1 + "</td></tr></table>";



var fido = new Dog("Fido", "Mixed", 39, 1.5, 200);
let fluffy = new Dog("Fluffy", "Poodel", 38, 2, 200);
let spot = new Dog("Spot", "Chihuahua", 10, 1, 200);
var dogs = [fido, fluffy, spot];

document.getElementById("name1").innerHTML = fido.name;
document.getElementById("name2").innerHTML = fluffy.name;
document.getElementById("name3").innerHTML = spot.name;

document.getElementById("breed1").innerHTML = fido.breed;
document.getElementById("breed2").innerHTML = fluffy.breed;
document.getElementById("breed3").innerHTML = spot.breed;

document.getElementById("weight1").innerHTML = fido.weight;
document.getElementById("weight2").innerHTML = fluffy.weight;
document.getElementById("weight3").innerHTML = spot.weight;

document.getElementById("speed1").innerHTML = fido.speed;
document.getElementById("speed2").innerHTML = fluffy.speed;
document.getElementById("speed3").innerHTML = spot.speed;



function Dog(name, breed, weight, speed, distance) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.speed = speed;
    // this.distance = distance;
    // this.meters();
    // this.timer = setTimeout(this.meters, 1000);
    this.meters = function () {
        setTimeout(function go() {
            distance -= speed;
            // this.distance = distance;
            document.getElementById("distance1").innerHTML = distance;
            // alert(distance)
            document.getElementById("distance2").innerHTML = distance;
            document.getElementById("distance3").innerHTML = distance;
            // alert(distance);
            // this.distance = distance;
            setTimeout(go, 1000);
        },
            1000
        );

        // setInterval(function() {
        //     /* let c = 100;
        //     let b = 5; */
        //     c -= b;
        //     document.write(c);
        //   }, 1000);


        // this.timer;
        // this.timer = setInterval(this.meters, 1000);
        // this.x1 = 5000;
        // document.getElementById("meters").innerHTML = this.x;
        // this.distance -= speed;
        // if (this.distance < 0) {
        //     alert("Fido достиг финиша");
        //     clearTimeout(this.timer);
        // }
        // this.distance = distance;
        // alert(this.distance);
        // else {
        // this.timer = setTimeout(this.meters, 1000);
        // alert(this.distance);
        // }
        // alert(this.timer);
    };
    this.meters();
    // this.meters(this.timer);
    // alert(this.name);
}

// var fido = new Dog("Fido", "Mixed", 39, 1.5, 200);
// let fluffy = new Dog("Fluffy", "Poodel", 38, 2, 200);
// let spot = new Dog("Spot", "Chihuahua", 10, 1, 200);
// var dogs = [fido, fluffy, spot];

// document.getElementById("name1").innerHTML = fido.name;
// document.getElementById("name2").innerHTML = fluffy.name;
// document.getElementById("name3").innerHTML = spot.name;

// document.getElementById("breed1").innerHTML = fido.breed;
// document.getElementById("breed2").innerHTML = fluffy.breed;
// document.getElementById("breed3").innerHTML = spot.breed;

// document.getElementById("weight1").innerHTML = fido.weight;
// document.getElementById("weight2").innerHTML = fluffy.weight;
// document.getElementById("weight3").innerHTML = spot.weight;

// document.getElementById("speed1").innerHTML = fido.speed;
// document.getElementById("speed2").innerHTML = fluffy.speed;
// document.getElementById("speed3").innerHTML = spot.speed;

// document.getElementById("distance1").innerHTML = fido.distance;
// document.getElementById("distance2").innerHTML = fluffy.distance;
// document.getElementById("distance3").innerHTML = spot.distance;

// for (let i = 0; i < dogs.length; i++) {
//     this.meters();
// }

// function Machine() {
//     this.state = "stopped";
//     this.time = 2000;
//     this.timer;
//     this.interval;
// }

// Machine.prototype.run = function () {
//     this.state = "started";
//     document.write("Начинаю работу... ");
//     document.write(`Время приготовления - ${this.time} `);
//     this.interval = setInterval(
//         function () {
//             document.write(" | ");
//         }.bind(this),
//         1000
//     );
//     this.timer = setTimeout(this.onReady.bind(this), this.time);
//     document.write(this.state);
// };

// Machine.prototype.onReady = function () {
//     clearInterval(this.interval);
//     clearTimeout(this.timer);
//     this.state = "stopped";
//     document.write(`Готово! ${this.state}`);
// };

// Machine.prototype.stop = function () {
//     clearInterval(this.interval);
//     clearTimeout(this.timer);
//     this.state = "stopped";
//     document.write(`принудительное выключение! ${this.state}`);
// };

// // let machine = new Machine();

// // machine.run();

// function CoffeeMachine() {
//     this.drink = "вода";
//     Machine.apply(this);
// }

// CoffeeMachine.prototype = Object.create(Machine.prototype);
// CoffeeMachine.prototype.constructor = CoffeeMachine;

// CoffeeMachine.prototype.run = function (drink = "вода") {
//     this.drink = drink;
//     if (this.drink == "латте") {
//         this.time = 5000;
//     }
//     if (this.drink == "эспрессо") {
//         this.time = 3000;
//     }
//     document.write(`Приготовление: ${this.drink} `);
//     Machine.prototype.run.apply(this);
// };

// let coffeeMachine = new CoffeeMachine();

// // coffeeMachine.run("латте");
//   //coffeeMachine.stop();


