let fido = new Dog("Fido", "Mixed", 39, 1.5, 10);
let fluffy = new Dog("Fluffy", "Poodel", 38, 2, 10);
let spot = new Dog("Spot", "Chihuahua", 10, 1, 10);
let dogs = [fido, fluffy, spot];

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
    this.distance = distance;
    this.meters = function () {
        this.distance -= this.speed;
        if (this.distance < 0) {
            this.distance = 0;
        }
    };
};

function go() {
    fido.meters();
    document.getElementById("distance1").innerHTML = fido.distance;
    fluffy.meters();
    document.getElementById("distance2").innerHTML = fluffy.distance;
    spot.meters();
    document.getElementById("distance3").innerHTML = spot.distance;
    setTimeout(go, 1000);
}


