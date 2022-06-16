const {Setter} = require("../Setter.js");
var ClothSet = function(){
   var _cloth; 
   var _size = {price: 0};
   var _color = {price: 0};
   var _fabric = {price: 0};
   return {
    setCloth : function(cloth){
        console.log("\n--- ["+cloth.name[0]+"는 "+cloth.name[1]+"가 선택되었습니다.] +"+cloth.price+"원\n");
        console.log("["+cloth.name[0]+": "+cloth.name[1]+"의 속성을 선택합니다..]");
        _cloth = cloth;
        return this;
    },
    setClothSize : function(sizeCommand){
        let command = new Setter();
        command.set(sizeCommand);
        _size = command.run();
        _cloth.attribute.addAttribute(_size);
        return this;    
    },
    setClothColor : function(colorCommand){
        let command = new Setter();
        command.set(colorCommand);
        _color = command.run();
        _cloth.attribute.addAttribute(_color);
        return this;
    },
    setClothFabric : function(fabricCommand){
        let command = new Setter();
        command.set(fabricCommand);
        _fabric = command.run();
        _cloth.attribute.addAttribute(_fabric);
        return this;
    },
    build : function(){
        return [
            _cloth,
            _size,
            _color,
            _fabric,
        ]
    }
   }
}
module.exports = {ClothSet};