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
//# sourceMappingURL=generic.js.map