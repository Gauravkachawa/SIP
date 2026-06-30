// const orderfood = new Promise((res, rej) => {
//     const delivered = false;
//     if(delivered){
//         res("food delivered");
//     }
//     else {
//         rej("food cancelled");

//     }
// })


// .then ((result) => {
//     console.log(result)
// })

// .catch((error) => {
//     console.log(error)
// })

// let connection = new Promise ((res, rej) =>{
//     console.log("Connection is going on");
//     console.log("👌👌👌")
//     setTimeout(() => {
//         res("Woo the connecting has been maded")
//     },2000)
// })

// .then(() => {
//     console.log("Samiran")
// })
// .catch(() => {
//     console.log("Aditya")
// })

// const fooddelivery = new Promise((res, rej) => {
//     const foodavailable = true;
//     setTimeout(() =>{
//         if(foodavailable){
//             res("Pizza Delivered")

//         }
//         else{
//             rej("Order cancelled")
//         }
//     },2000)
// })

// .then((order) => {
//     console.log(order)
// })
// .catch((error) => {
//     console.log(error);
// })

const morning = new Promise((res) =>{
    res("Good morning")
})

.then((wish) => {
    console.log(wish)
})