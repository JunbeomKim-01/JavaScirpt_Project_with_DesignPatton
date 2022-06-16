function Attribute(){
    this.attributeList = [];
    this.addAttribute = function(_attribute){
        this.attributeList.push(_attribute);
    };
    this.deleteAttribute = function(_attribute){
        this.attributeList.pop(_attribute);
    };
    this.getAttribute = function(){
        this.attributeList.forEach(x => console.log(x));
    };
}
// 최상위 Cloth 객체
function Cloth(){
    this.attribute = new Attribute();
}
function Top(){}
Top.prototype = new Cloth();
function Bottom(){}
Bottom.prototype = new Cloth();
//Bottom의 자식  Pants, Skirt 객체
function Pants(){
    this.name = "Pants";
}
Pants.prototype = new Bottom();
function Skirt(){
    this.name = ["하의","Skirt"];
    this.price = 23000;
}
Skirt.prototype = new Bottom();
//Top의 자식 T-shirt , OnePice , Shirt 객체
function T_Shirt(){
    this.name = "T-Shirt";
    this.price = 1241;
}  
T_Shirt.prototype = new Top();
function OnePice(){
    this.name = "OnePice";
    this.price = 2300;
}
OnePice.prototype = new Top();
function Shirt(){
    this.name = ["상의","Shirt"];
    this.price = 10000;
}
Shirt.prototype = new Top();
module.exports = {Shirt,Skirt};