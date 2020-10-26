class Human {
    constructor(type = 'human') {
        this.type = type;
    }

    static isHuman(human) { // class 자체에서 정의된 함수
        return human instanceof Human;
    }

    breathe() {
        alert('h-a-a-a-m');
    }
}

class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero); // true
// newZero.isHuman이 아니고 Human.isHuman임을 주의