function clothRecommand(){
    recommand = function(){};
}
function recommandDark(){}
recommandDark.prototype = new clothRecommand();
recommandDark.prototype.recommand = function(){
    console.log("* 선택된 색상을 어둡게 적용됩니다.");
}
function recommandDecorator(_recommandDecorator){
    this.decorator = _recommandDecorator;
}
recommandDecorator.prototype = new clothRecommand();
recommandDecorator.prototype.recommand = function(){
    this.decorator.recommand();
}
function winterRecommand(_recommandDecorator){
    this.prototype = new recommandDecorator(_recommandDecorator);
}
winterRecommand.prototype.winterSeasonRecommand = function(){
    console.log("* 선택된 재질은 평균보다 두껍게 적용됩니다.");
}
winterRecommand.prototype.recommandWinter = function(){
    this.winterSeasonRecommand();
    this.prototype.recommand();
}
const winter = new winterRecommand(new recommandDark());
module.exports = {winter};

