function command(){
    this.excute = function(){};
}
function Setter() {
    this.set = function (_command) {
        this.command = _command;
    }   
    this.run = function () {
        return this.command.excute();
    }
}
module.exports = {Setter,command};
