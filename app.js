class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return 'Beep.';
    }

    toString() {
        return `The vehicle is a ${this.year} ${this.make} ${this.model}.`
    }

}

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return 'VROOM!!!'
    }
}

class Garage {
    constructor(capacity) {
        if(!Number.isFinite(capacity) && capacity <= 0){
            throw new Error('The capacity must be greater then zero');
        }
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(vehicle) {
        if(vehicle instanceof Vehicle){
            if(this.capacity > this.vehicles.length){
                this.vehicles.push(vehicle);
            } else{
                return "Sorry, we're full";
            }
        } else {
            return 'Only vehicles are allowed in here';
        }

    }
}