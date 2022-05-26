// //옷, 상의 : 셔츠, 티, 원피스, 
// //옵션 : 단추, 옷깃, 부분트임, 라운드 넥, V-넥

// var clothe ={}
// var top = Object.create(clothe);
// var bottom = Object.create(clothe);

// var attribute = {
//     attributeList: new Array(),
//     addAttribute:function(_attribute) {
//        this.attributeList.push(_attribute);
//     },
//     deleteAttribute:function(_attribute) {
//         this.attributeList.pop(_attribute);
//     },
//     getAttribute:function() {
//         this.attributeList.forEach(x => console.log(x));
//     }
// }
// var t_Shirt = function(_name){
//     this.name = _name
//     this.obj = Object.create(top);
//     this.t_ShirtAttribute = attribute;
// }
// var shirt = function(_name){
//     this.name = _name
//     this.obj = Object.create(top);
//     this.t_ShirtAttribute = attribute;
// }
// var onepice = function(_name){
//     this.name = _name
//     this.obj = Object.create(top);
//     this.t_ShirtAttribute = attribute;
// }
// var topClotheFactory = {
//     createClothe:function(params) {
//        switch(params){
//            case "t_shirt": return new t_Shirt("skdml");
//            case "shirt":return new shirt();
//            case "onepice":return new onepice();

//        }
//     }
// }
// const a =topClotheFactory.createClothe("t_shirt");
// a.t_ShirtAttribute.addAttribute("text");
// a.t_ShirtAttribute.addAttribute("millet");
// console.log(a)
