function setUserAction() {
    return {
        do() { },
        name: "",
    };
}
class UserImpl {
    login() {
        throw new Error("Method not implemented.");
    }
}
function checkUser(user) {
    if (user.login()) {
        return "APPROVED";
    }
    else {
        return "REJECTED";
    }
}
//# sourceMappingURL=typeAlias.js.map