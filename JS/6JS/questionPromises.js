// function login (email, password) {
//     return new Promise((res, rej) => {
//         console.log("your email is being verified wait for some time")

//         setTimeout(() => {
//             if(email=="gaurav@gmail.com" && password == "200516") {
//                 res({
//                     id : 1,
//                     name : "Gaurav"
//                 })
//             }
//             else{
//                 rej("Envaild email")
//             }
//         }, 2000)
//     })
// }
// login("gaurav@gmail.com", "200516")
// .then((myData) => {
//     console.log(myData.id)
// })

// .catch((error) => {
//     console.log(error)
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


function processPayment(amount) {
    return new Promise((res,rej) => {
        if (amount>0){
            res("payment succeeds")
        }
        else{
            rej("Payment failed");
        }
    })
}

processPayment(1)
.then((ok) => {
    console.log(ok)
})

.catch((error) => {
    console.log(error)
})



function processPayment1(amount) {
    return new Promise((res,rej) => {
        if (amount>=500){
            res("payment successfull")
        }
        else{
            rej("insufficient balance");
        }
    })
}

processPayment1(100)
.then((okk) => {
    console.log(okk)
})

.catch((error1) => {
    console.log(error1)
})

