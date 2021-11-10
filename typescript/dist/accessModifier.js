class Car {
    constructor(color) {
        this.name = "sonata";
        this.color = color;
    }
    start() {
        console.log("start");
        console.log(this.name);
    }
}
class Hyundai extends Car {
    constructor(color) {
        super(color);
    }
    showName() {
        console.log(super.name);
    }
}
const myCar = new Hyundai("black");
console.log(myCar.name);
//# sourceMappingURL=accessModifier.js.map