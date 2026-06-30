function greet(name){
    console.log("Hello Gaurav")
}

greet();

const totalprice = (product, deliveryfee) => product * deliveryfee 

console.log(totalprice(500,3))

const delivery = (price, deliverfee =40) => price + deliverfee 

console.log(totalprice(250,20))
console.log(totalprice(300,20))



let customer = {
    name: "Gaurav",
    age: "20"
}
console.log(customer)

customer.phone= 9783532573;
console.log(customer)

delete customer.age;
console.log(customer)

function getValue(object,key){
    return object[key];
}

const user = {
    name : "Gaurav",
    age : 20 
}
console.log(getValue(user, "name"));

const user2 = {
    name : "Gaurav",
    age : 20 
}
for(const [key, value] of Object.entries(user2)){
    console.log(`${key} : ${value}`)
}

