const prices = [1000, 2000, 3000];
const discount = prices.map(nums => {
    return nums - (nums*(10/100))
})

console.log(discount);

const user =[
    {
        id : 1,
        name : "Gaurav"
    },
    {
        id : 2,
        name: "Aditya"
    },
    {
        id: 3,
        name: "Samiran"
    }
]

console.log(user[1].name);

user.forEach((person) => {
    console.log(person.name);
});

const products =[
     {
        name : "laptops",
        price: 50000
     },
     {
        name: "phone",
        price:30000
     }
]
const displayStrings = products.map(product => 
    `${product.name}: ₹${product.price}`
);

console.log(displayStrings)

const products2 = [
    {
        name : "laptops",
        price : 50000
    },

    {
        name : "mouse",
        price : 500
    },
    {
        name : "phone",
        price : 30000
    }
]

const expensiveproduct = products2.filter((obj =>
{
    return obj.price>2000;
}
));
console.log(expensiveproduct);

const user3 = [
    {
        name : "Gaurav",
        active : true
    },
    {
        name: "Aditya",
        active: true
    },
    {
        name : "Samiran",
        active: false
    }
]
const activeuser = user3.filter((i) => i.active==true)
console.log(activeuser);

