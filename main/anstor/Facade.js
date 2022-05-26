class subSysteomOne{
    MethodOne =function() {
        console.log("method1");
    };
}
class subSysteomTow{
    MethodTwo =function() {
        console.log("method2");
    };
}
class subSysteomThree{
    MethodThree =function() {
        console.log("method3");
    };
}
class subSysteomFour{
    MethodFour =function() {
        console.log("method4");
    };
}

class Facade{
    constructor(){
        this.one = new subSysteomOne();
        this.two =new subSysteomTow();
        this.three = new subSysteomThree();
        this.four = new subSysteomFour();
    }
    method_1 = function() {
        console.log("method1 퍼사드");
        this.one.MethodOne();
        this.two.MethodTwo();
    };
    method_2 = function() {
        console.log("method2 퍼사드");
        this.two.MethodTwo();
        this.four.MethodFour();
    }
}
const facade = new Facade();
facade.method_1();
facade.method_2();