Storage.prototype.setObj = function(key, obj){
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key){
    return JSON.parse(this.getItem(key))
}

//Eksempel
var array = [1,2,3,4,5,,6,7,8,9];

localStorage.setObj("arr", array);

var recallArr = localstorage.getObj("arr");

//array === recallArr
