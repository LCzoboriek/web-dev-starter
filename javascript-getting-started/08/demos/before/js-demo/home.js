
changePercentOff( 32 );


let person = {
    name: "John",
    age: 32,
    partTime: false,
    showInfo: function(){
        showMessage(this.name)
    }

}

person.showInfo();

const values = ['a', 'bbb', 'c'];
const found = values.find(function(item){
    return item.length > 1
});

console.log(found);