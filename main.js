const {shirtAndSkirtFactory} = require("./Factory/ClothFactory.js");
const winter = require("./season/season.js");
console.log("\n[사용자가 겨울 옷을 선택합니다.]");
winter.winter.recommandWinter();
console.log("-----------------------------------");
console.log("\n<--* [상의와 하의를 선택합니다.] *-->");
shirtAndSkirtFactory.creatCloth();
shirtAndSkirtFactory.getPrice();

//1. 계절 세션을 나누어 전체적인 재질의 특성(색상의 명도,재질 두께감)을 바꿈 -> (데코레이터 패턴)
//2. 각각의 상의 하의는 팩토리 매소드 패턴으로 생성-> (팩토리 매소드 패턴)
//3. 세부적인 속성 생성은 빌더 패턴으로 생성-> (빌더 패턴)
//4. 사용자가 원하는 속성을 커맨드로 캡슐화하여 속성을 추가 및 생성(커맨드 패턴)
//5. 속성들은 리스트로 컴포지션(컴포지트 패턴)