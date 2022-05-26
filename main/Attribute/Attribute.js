var Attribute = {
    attributeList: new Array(),
    addAttribute:function(_attribute) {
       this.attributeList.push(_attribute);
    },
    deleteAttribute:function(_attribute) {
        this.attributeList.pop(_attribute);
    },
    getAttribute:function() {
        this.attributeList.forEach(x => console.log(x));
    }
}
module.exports={Attribute};