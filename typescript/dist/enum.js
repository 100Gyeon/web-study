var StarbucksGrade;
(function (StarbucksGrade) {
    StarbucksGrade[StarbucksGrade["WELCOME"] = 0] = "WELCOME";
    StarbucksGrade[StarbucksGrade["GREEN"] = 1] = "GREEN";
    StarbucksGrade[StarbucksGrade["GOLD"] = 2] = "GOLD";
    StarbucksGrade["VIP"] = "VIP";
})(StarbucksGrade || (StarbucksGrade = {}));
function getDiscount(v) {
    switch (v) {
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;
    }
}
console.log(getDiscount(StarbucksGrade.GREEN));
console.log(StarbucksGrade["0"]);
console.log(StarbucksGrade["VIP"]);
console.log(StarbucksGrade);
console.log(StarbucksGrade["1"]);
console.log(StarbucksGrade.GREEN);
//# sourceMappingURL=enum.js.map