"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Justin",
    email: "justin@crimson.dev",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Justin", isPaid: false, email: "h@h.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
