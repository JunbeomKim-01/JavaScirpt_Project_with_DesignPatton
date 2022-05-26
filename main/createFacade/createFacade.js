class createTopCommand{
    createTop=function() {
        console.log("createTopCommand 실행");
    };
}
class createBottomCommand{
    createBottom=function () {
        console.log("createBottomCommand 실행");
    };
}
class Facard{
    constructor(){
        this.createTopCommand = new createTopCommand();
        this.createBottomCommand = new createBottomCommand();
    }
    selectOnlyTop=function() {
        console.log("원하시는 상의를 고르시오");
        this.createTopCommand.createTop();
    }
    selectOnlyBottom=function() {
        console.log("원하시는 하의를 고르시오");
        this.createBottomCommand.createBottom();
    }
    selecTopOrBottom=function() {
        console.log("원하시는 상의를 고르시오");
        this.createTopCommand.createTop();
        console.log("원하시는 하의를 고르시오");
        this.createBottomCommand.createBottom();
    }
}
module.exports={Facard};