function getSize(arr) {
    return arr.length;
}
const arr1 = [1, 2, 3];
getSize(arr1);
const arr2 = ["1", "2", "3"];
getSize(arr2);
const arr3 = [false, true, true];
getSize(arr3);
const arr4 = [{}, {}, { name: "Tim" }];
getSize(arr4);
const m1 = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false,
    },
};
const m2 = {
    name: "s21",
    price: 1000,
    option: "good",
};
const userEx = { name: "a", age: 10 };
const carEx = { name: "bmw", color: "red" };
const bookEx = { price: 3000 };
function showName(data) {
    return data.name;
}
showName(userEx);
showName(carEx);
function createPromise(x, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}
createPromise(1, 100).then((v) => console.log(v));
createPromise("str", 100).then((v) => console.log(v));
function createTuple(v1, v2) {
    return [v1, v2];
}
const tuple = createTuple("user1", 1000);
class LocalDB {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }
    add(v) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    }
    get() {
        const v = localStorage.getItem(this.localStorageKey);
        return v ? JSON.parse(v) : null;
    }
}
const userDB = new LocalDB("user");
userDB.add({ name: "jay" });
const userA = userDB.get();
userA.name;
class Database {
    add(v) {
        throw new Error("Method not implemented.");
    }
    get() {
        throw new Error("Method not implemented.");
    }
}
const cart1 = {
    getItem() {
        return {
            v: "",
        };
    },
};
cart1.getItem();
//# sourceMappingURL=generic.js.map