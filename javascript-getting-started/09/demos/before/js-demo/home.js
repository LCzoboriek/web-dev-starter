const values = ['a', 'bbb', 'cd'];
const found = values.find(function(item){
    return item.length > 1
});

console.log(found);

// The function is called until it returns true, so wont find the second value

const values1 = ['a','b','c'];
values.forEach(function(i){
    console.log(i); 
})

