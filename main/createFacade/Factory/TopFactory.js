const {Accessorie} = require("../../Accessorie/Accessorie.js");
const {Attribute} = require("../../Attribute/Attribute.js");
class Top {
    constructor(){
       this.attribute =Attribute;
    }
}
class T_Shirt extends Top{
    constructor(){
        this.accessorie =Accessorie;
    }
}
class OnePice extends Top{
    constructor(){
        this.accessorie =Accessorie;
    }
}
class Shirt extends Top{
    constructor(){
        this.accessorie =Accessorie;
    }
}
class TopFatory{
    static factory(name){
        return(name == "T-Shirt"? new T_Shirt():(name == "OnePice"? new OnePice(): new Shirt()));
    }
}
module.exports={TopFatory,Top,Shirt,T_Shirt,OnePice};