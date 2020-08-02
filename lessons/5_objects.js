'use strict';
// Create objects

// 1 fabric

const Car = (fuel = 100, maxspeed = 200) => ({fuel, maxspeed});
const car1 = Car();
const car2 = Car(50,10);

// 2 constructor function

const Tank = function Tank (ammo = 100, armor =100, maxspeed = 100) {
    this.ammo = ammo;
    this.armor = armor;
    this.maxspeed = maxspeed;
    this.fire = function() {this.ammo--};
}
const tank = new Tank(); // Creates empty object and runs Tank() in its context
const tank = new Tank(80,10,90);

// 3 Class

class Plane {
    type = 'interceptor'
    fire () {
        this.ammo--
    }
    constructor (ammo=100 ,armor=100, fuel=200) {
        this.ammo = ammo
        this.armor = armor
        this.fuel = fuel
    }
}
const figthPlane = new Plane(undefined, 100, 10);

// 4 Inheritance

const warMachines = {
    armor: 100,
    fuel: 200,
    x: 0,
    y: 0,
    move (x,y) {
        this.x = x;
        this.y = y;
    }
};

const BMP = {
    seats: 10,
    ammo: 100
};

BMP.__proto__ = warMachines;

// 5 Class Inheritance

class WMachines {
    constructor (armor = 100, fuel = 100) {
        this.armor = armor;
        this.fuel = fuel;
    }
    x = 0
    y = 0
    move (x, y) {
        this.x = x
        this.y = y
    }
}

class Bmp extends WMachines {
    constructor (armor, fuel, seats = 100, ammo = 100) {
        super()
        this.seats = seats
        this.ammo = ammo
    }
}