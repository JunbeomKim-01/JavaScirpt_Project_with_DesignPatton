const {Facard} = require('./createFacade/createFacade.js');
const {BottomFactory} = require('./createFacade/Factory/BottomFactory.js');
const {TopFatory} = require('./createFacade/Factory/TopFactory.js');
const readline = require("readline");
const {Clothe} = require("./Cloth/Cloth.js");
const {ClothTexureAttribute} = require("./Attribute/ClothAttribute/ClothTexureAttribute.js");
const{ColtheMilletAttribute} = require("./Attribute/ClothAttribute/ColtheMilletAttribute.js");

function isBottom(text) {
    const bottoms =["Pants","Skirt"]
    return bottoms.includes(text);
}
function isTop(text) {
    const tops=["T_Shirt","OnePice","Shirt"]
    return tops.includes(text);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on('line', function(line) {
    const facade= new Facard();
    line == 1? facade.selectOnlyTop(): line==2?facade.selectOnlyBottom():facade.selecTopOrBottom();

    rl.close();
  }).on("close", function() {
    process.exit();
  });

// const a = new Clothe();
// a.setBottom("Pants");
// a.bottom.attribute.addAttribute(new ClothTexureAttribute());
// a.bottom.attribute.addAttribute(new ColtheMilletAttribute());// 팩토리 메소드 패턴으로 속성 클래스들을 생성 및 삭제 
// a.bottom.accessorie.getAccessories();
// a.bottom.attribute.deleteAttribute(new ClothTexureAttribute());
// a.bottom.attribute.getAttribute();
// a.getInfo();


//*아래꺼
//옵션을추가하는 팩토리 메소드 패턴,컴포지션 패턴
//옷을 생성하는 추상 팩토리 패턴
//장신구나 옵션을 추가 및 삭제 -> 전략패턴으로 
//필요한 장신구를 모으는 속성 = 컴포지션 패턴
//사용자가 수정하는 명령어를 모은 커맨드 패턴