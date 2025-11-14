class Car {
    constructor (carName,color) {
       this.carName = carName;
       this.color = color;
    }
    #price = "2000000"
    getPrice () {
        return (`price is: ${this.#price}`);
        
    }
    start () {
        // console.log("engine started!");
        return "Engine started with noise!"
    }
}
class ElectricVehicle extends Car {
    constructor (carName,color,keyLessEntry) {
        super(carName,color)
        this.keyLessEntry = keyLessEntry;
    }
    start () {
        return "Engine started with Silently!"
    }
}
let tesla = new ElectricVehicle("Tesla","Gray",true);
let honda = new Car("Honda", "black");
let toyota = new Car("toyota", "white");

// console.log(tesla.start());
console.log(honda.getPrice());


