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
class Book1 {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.init();
    }
    static create() { }
    init() { }
}
class Book2 {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    static create() { }
    init() { }
}
//# sourceMappingURL=accessModifier.js.map