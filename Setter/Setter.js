function Change(){
    this.change = function(){};
}
function Setter() {
    this.set = function (_attribute) {
        this.attribute = _attribute;
    }   
    this.run = function () {
        return this.attribute.change();
    }
}
module.exports = {Setter,Change};
