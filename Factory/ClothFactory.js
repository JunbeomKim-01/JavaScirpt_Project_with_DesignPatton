const {RedColorSetter,RedColor} = require("../Setter/colorSetter");
const {Ssize,SsizeSetter} = require("../Setter/sizeSetter");
const {ClothSet} = require("../Setter/AttributeBuilder/AttributeBuilder.js");
const {Shirt,Skirt} = require("../cloths/cloths.js");
const {JinSetter,Jin} = require("../Setter/fabricSetter.js");
var setClothPice = clothPrice => attributePrice => clothPrice + attributePrice;
function ClothFactory(){
    this.cloths = [];
    this.price = 0;
    this.creatCloth = function(){};
    this.addCloth = function(cloth){
        this.cloths.push(cloth);
        var setAttributePrice = setClothPice(this.price);
        console.log("\n가격은 : "+cloth.reduce((c,v) => c+Number(v.price),0)+"원 입니다.");
        this.price = setAttributePrice(cloth.reduce((c,v) => c+Number(v.price),0));
    }
}   
var shirtAndSkirtFactory = new ClothFactory();
shirtAndSkirtFactory.creatCloth = function(){
    this.addCloth(ClothSet()
    .setCloth(new Shirt())
    .setClothColor(new RedColorSetter(new RedColor()))
    .setClothSize(new SsizeSetter(new Ssize()))
    .build());
    this.addCloth(ClothSet()
    .setCloth(new Skirt())
    .setClothColor(new RedColorSetter(new RedColor()))
    .setClothSize(new SsizeSetter(new Ssize()))
    .setClothFabric(new JinSetter(new Jin()))
    .build());
}
shirtAndSkirtFactory.getPrice = function(){
    console.log("-----------------------------------");
    console.log("\n총 금액은 : "+this.price+"원 입니다\n");
}
module.exports = {shirtAndSkirtFactory};