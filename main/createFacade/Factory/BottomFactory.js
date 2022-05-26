const {Accessorie} = require("../../Accessorie/Accessorie.js");
const {Attribute} = require("../../Attribute/Attribute.js");
class Bottom {
    constructor(){
        this.attribute =Attribute;
    }
}
class Pants extends Bottom{}
Pants.prototype.accessorie = Accessorie

class Skirt extends Bottom{
    constructor(){
        this.accessorie =Accessorie;
    }
}
class BottomFactory{
    static factory(name){
        return(name=="Pants"? new Pants(): new Skirt());
    }
}
module.exports={BottomFactory,Pants,Skirt,Bottom};