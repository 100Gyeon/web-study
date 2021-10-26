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
function introduce2() {
    return { name: "Jiyeon", age: 23, skill: "typescript" };
}
const jiyeon = introduce2();
if (jiyeon.skill) {
    const skill = jiyeon.skill;
    console.log(skill);
}
else if (jiyeon.age) {
    const age = jiyeon.age;
    console.log(age);
}
function isDeveloper(target) {
    return target.skill !== undefined;
}
if (isDeveloper(jiyeon)) {
    console.log(jiyeon.skill);
}
else {
    console.log(jiyeon.age);
}
//# sourceMappingURL=union.js.map