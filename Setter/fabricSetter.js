const {Change} = require("./Setter.js");
//청 재질 변경
function JinSetter(_fabric) {
    this.fabric = _fabric;
}
JinSetter.prototype = new Change();
JinSetter.prototype.change = function () {
    return this.fabric.setJin();
}
function Jin(){
    this.price = 2400;
}
Jin.prototype.setJin = function () {
    console.log("재질이 청으로 변경되었습니다.2400원");
    return new Jin();
}
//면 재질 변경
function CottonSetter(_fabric) {
    this.fabric = _fabric;
}
CottonSetter.prototype = new Change();
CottonSetter.prototype.change = function () {
   return this.fabric.setCotton();
}
function Cotton() {
    this.price = 1324;
}
Cotton.prototype.setCotton = function () {
    console.log("재질이 면으로 변경되었습니다. +1324원");
    return new Cotton();
}
module.exports = {CottonSetter,Cotton,JinSetter,Jin};