var Client = function(){}
Client.prototype.getInfo = function(get){
    get.view();
}
var Command = class{
    constructor(){
        this.commands = [];
    }
}
Command.prototype.view = function(){
    this.commands.forEach(function(result){
        result();
    });
}
Command.prototype.select = function(command, args){
    this.commands.push(function(){
        command.call(null, args);
    });
}
Command.prototype.delete = function(){
    this.commands.pop();
}
var selectProperty = {
    length: function(number){
        console.log("길이는 " + number + " 입니다.");
    },
    color: function(getcolor){
        console.log("옷의 색깔은 " + getcolor + " 입니다.");
    }
}
var changeProperty=function(userInput){
    return clothSize(userInput);
}
var clothSize=function(userInput){
    const sizeList = ["S","M","L"] 
    return sizeList.includes(userInput)== false? "not Size":userInput;
}


var client = new Client();
var action = new Command();
action.select(selectProperty.length, changeProperty("L"));
action.select(selectProperty.color, "White");
client.getInfo(action);