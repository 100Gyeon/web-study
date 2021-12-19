const uk = "name";
let admin = {
    id: 1,
    name: "Bob",
};
let admin2 = {
    id: 1,
    name: "Bob",
    age: 23,
    gender: "m",
};
let admin3 = {
    id: 1,
    name: "Bob",
    age: 23,
    gender: "m",
};
const score = {
    1: "A",
    2: "C",
    3: "B",
    4: "D",
};
const score2 = {
    1: "D",
    2: "C",
    3: "B",
    4: "F",
};
function isValid(user) {
    const result = {
        id: user.id > 0,
        name: user.name !== "",
        age: user.age > 0,
        gender: user.gender === "m" || user.gender === "f",
    };
    return result;
}
const admin4 = {
    id: 2,
    name: "Bob",
};
const admin5 = {
    id: 3,
    name: "Bob",
};
//# sourceMappingURL=utilityTypes.js.map