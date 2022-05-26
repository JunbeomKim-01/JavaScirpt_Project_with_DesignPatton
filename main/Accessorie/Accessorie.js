var Accessorie={
    accessorieList:new Array(),
    addAccessorie:function(accessorie) {
        this.accessorieList.push(accessorie);
     },
     deleteAccessorie:function(accessorie) {
         this.accessorieList.pop(accessorie);
     },
     getAccessories:function() {
         this.accessorieList.forEach(x => console.log(x));
     }
}
module.exports={Accessorie};