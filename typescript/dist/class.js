class AmericanProgrammer {
    constructor(name) {
        this.name = name;
    }
    say(message) {
        console.log(message);
    }
    writeCode(requirement) {
        console.log(requirement);
        return "requirement : " + requirement;
    }
    loveApple() {
        console.log("Apple");
    }
}
const tony = new AmericanProgrammer("tony");
class Korean {
    constructor(name) {
        this.name = name;
    }
    say(message) {
        console.log(message);
    }
}
class KoreanProgrammer extends Korean {
    constructor(name, residentRegistration) {
        super(name);
        this.name = name;
        this.residentRegistration = residentRegistration;
    }
    say(message) {
        console.log(message);
    }
    writeCode(requirement) {
        console.log(requirement);
        return "요구사항 : " + requirement;
    }
    joinSopt() {
        console.log("29th Web part");
    }
}
const gildong = new KoreanProgrammer("gildong", 123456);
//# sourceMappingURL=class.js.map