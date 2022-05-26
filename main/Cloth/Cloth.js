const {BottomFactory} = require("../createFacade/Factory/BottomFactory.js");
const {TopFatory} = require("../createFacade/Factory/TopFactory.js");
class Clothe{
    top = null;
    bottom = null;
    setTop(_top){
        this.top =TopFatory.factory(_top);
    }
    setBottom(_bottom){
        this.bottom = BottomFactory.factory(_bottom);
    }
    getInfo(){
        console.log(this);
    }
}
module.exports={Clothe};