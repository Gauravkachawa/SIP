Map

const numbers = [2,3,4];
const multiply = numbers.map(num => {
    return num / 5;
}) 
console.log(multiply);

Filter

const ages = [10, 30,20];
const Mens = ages.filter(
    age => age >= 18
);
console.log(Mens);

const nums = [25, 44, 12];
const sum = nums.reduce((Accumulator, current) => 
{
    return Accumulator + current ;
}) 
console.log(sum)

const cart = [{price : 100}, {price : 200}];
const total = cart.reduce((sum, item) => {
    return sum + item.price;
});

console.log(total);

let arr = [-2, 3 ,5, 8, -9]

const ans = arr.map(nums=> nums+2);

const ans2 = ans.filter(nums=> nums>=0);

const ans3 = ans2.reduce((sum, curr) =>{
return sum+ curr;

});

console.log(ans3);