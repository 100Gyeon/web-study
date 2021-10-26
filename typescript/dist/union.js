function getErrorAge(age) {
    age.toFixed();
    return age;
}
function getAge(age) {
    if (typeof age === "number") {
        age.toFixed();
        return age;
    }
    if (typeof age === "string") {
        return age;
    }
    return new TypeError("age must be number or string");
}
function introduce(someone) {
    someone.name;
}
//# sourceMappingURL=union.js.map