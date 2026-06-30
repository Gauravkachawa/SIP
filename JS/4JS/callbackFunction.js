function processuser(callback){
    callback();
}
processuser(function greet() {
    console.log("Hello")
})

function greet (){
    console.log("Hello")
}
function processuser(callback, name){
    callback();
    return name;
}

processuser(greet, "Gaurav");
console.log(processuser(greet, "Gaurav"));


function paymentsuccessfull(){

    console.log("Payment Successfull")

}

function paymentprocessing(amt, msg){
    console.log(`${amt} amount deducted from your account`)
     msg();

}

paymentprocessing(20000, paymentsuccessfull); 

const products = [{

    id : 1,
    name : "Watch",
    Price: 6000,

},
{

    id : 2,
    name : "Boult Headphone",
    Price: 2000,

},

{
    id : 3,
    name : "Comet",
    Price: 3000,
}


]

console.log(products[1].id);

let sum = 0;

products.forEach(i => {
    sum=sum+i.Price;

    
});

console.log(sum);