const {Change} = require("./Setter.js");
// Red 색상변경
function RedColorSetter(_color) {
    this.color = _color;
}
RedColorSetter.prototype = new Change();
RedColorSetter.prototype.change = function (i) {
    return this.color.setRed();
}
function RedColor(){
    this.price = 2300;
}
RedColor.prototype.setRed = function (i) {
    console.log("색상이 Red 로 변경되었습니다. +2300원");
    return new RedColor();
}
// Bule 색상 변경
function BuleColorSetter(_color) {
    this.color = _color;
}
BuleColorSetter.prototype = new Change();
BuleColorSetter.prototype.change = function () {
   return this.color.setBule();
}
function BuleColor() {
    this.price = 1023;
}
BuleColor.prototype.setBule = function () {
    console.log("색상이 bule 로 변경되었습니다. +1023원");
    return new BuleColor();
}
module.exports = {BuleColorSetter,RedColorSetter,RedColor,BuleColor};