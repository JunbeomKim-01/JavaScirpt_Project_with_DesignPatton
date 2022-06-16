const {command} = require("./Setter.js");
// L 사이즈로 변경
function LsizeCommand(_size) {
    this.size = _size;
}
LsizeCommand.prototype = new command();
LsizeCommand.prototype.excute = function () {
    return this.size.setLsize();
}
function Lsize() {
    this.price =56300;
}
Lsize.prototype.setLsize = function () {
    console.log("size L 로 변경되었습니다. +56300원");
    return new Lsize();
}
// M 사이즈로 변경
function MsizeSetter(_size) {
    this.size = _size;
}
MsizeSetter.prototype = new command();
MsizeSetter.prototype.excute = function () {
    return this.size.setMsize();
}
function Msize() {
    this.price = 1232;
}
Msize.prototype.setMsize = function () {
   console.log("size M 로 변경되었습니다. +1232원");
   return new Msize();
}
// S size로 변경
function SsizeSetter(_size) {
    this.size = _size;
}
SsizeSetter.prototype = new command();
SsizeSetter.prototype.excute = function () {
    return this.size.setSsize();
}
function Ssize() {
    this.price = 5600;
}
Ssize.prototype.setSsize = function () {
    console.log("size S 로 변경되었습니다. +5600원");
    return new Ssize();
} 


module.exports = {SsizeSetter,Ssize,Msize,MsizeSetter,LsizeCommand,Lsize};