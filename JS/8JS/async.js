// function greet() {
//     return new Promise((res,rej) => {
//         const delivered = false;
//         if (delivered){
//             res("payment succeeds")
//         }
//         else{
//             rej("Payment failed");
//         }
//     })
// }


// async function print() {
//     try{
//         const msg = await greet();
//     console.log(msg);
//     console.log('hello')
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// print()




// let connection = new Promise ((res, rej) =>{
//     console.log("Connection is going on");
//     console.log("👌👌👌")
//     setTimeout(() => {
//         res("Woo the connecting has been maded")
//     },2000)
// })

// async function hello() {
//     const hey = await connection;
//     console.log(hey);
// }

// hello();




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



// async function print1() {
//     try{
//         const msg = await login("samiran@16" , 200516);
//     console.log(msg);
//     console.log('hello')
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// print1()

// // promise chaining
// function loginUser() {
//     return new Promise((res, rej) => {
//         console.log("Aap login ho rahe hai.");
//         setTimeout(() => {
//             console.log("Aap login ho chuke ho.");
//             res("Gaurav");
//         }, 1000);
//     });
// }

// function getProfile() {
//     return new Promise((res, rej) => {
//         console.log("Aapki profile fetch ho rahi hai.");
//         setTimeout(() => {
//             console.log("Aapki profile fetch ho chuki hai.");
//             res();
//         }, 1000);
//     });
// }

// function getOrder() {
//     return new Promise((res, rej) => {
//         console.log("Aapka order ready ho raha hai.");
//         setTimeout(() => {
//             console.log("Aapka order ready ho chuka hai.");
//             res();
//         }, 1000);
//     });
// }

// function payment() {
//     return new Promise((res, rej) => {
//         console.log("Payment kar dijiye.");
//         setTimeout(() => {
//             console.log("Aapka payment ho chuka hai.");
//             res();
//         }, 1000);
//     });
// }

// async function print2(){
//     try{
//         let msg1 = await loginUser();
//         let msg2 = await getProfile();
//         let msg3 = await getOrder();
//         let msg4 = await payment();
//         console.log(msg1);
//     }
//     catch (error){

//         console.log(error);
//     }
// }

// print2();

// function verifyNumber(number) {
//     return new Promise((res, rej) => {
//         console.log("Your number is being verified, wait for some time...");
//         setTimeout(()=> {
//             if(number == 9783532573){
                
//                 res(200516);
//             } else{
//                 rej("Envalid Number")
//             }
//         },2000)
//     })
// }

// function verifyOtp(userOTP, actualOtp) {
//     return new Promise((res, rej) => {
        
//         setTimeout(()=> {
//             if(userOTP == actualOtp){
//                 console.log("welcome");
                
//                 res();
//             } else{
//                 rej()
//             }
//         },2000)
//     })
// }



// async function otp(){
//     try {
//         const get = await verifyNumber(978353273)
        
//         const welcome = await verifyOtp(200516, otp)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// otp();

function Uber() {
    return new Promise((res, rej) => {
        console.log("Please Wait, Rider will be assigned to you shortly");
        setTimeout(() => {
            console.log("Your rider is Samiran");
            res("Rider assigned");
        }, 2000);
    });
}

function ridecompleted() {
    return new Promise((res, rej) => {
        console.log("you will reach to your destination in a short period of time");
        setTimeout(() => {
            console.log("Your ride is completed");
            res("Ride completed");
        }, 4000);
    });
}

function payment() {
    return new Promise((res, rej) => {
        console.log("Now its time for the Payment");
        setTimeout(() => {
            console.log("Pay the rider");
            res("Payment done");
        }, 2000);
    });
}

async function rider() {
    try {
        let msg1 = await Uber();
        let msg2 = await ridecompleted();
        let msg3 = await payment();

        console.log(msg1, msg2, msg3);
    } catch (error) {
        console.log(error);
    }
}

rider();


function getProfile1(){
    return new Promise((res,rej) => {
        console.log("Your Profile");
        setTimeout(() => {
            console.log("This is your profile");
            res("Profile")
        }, 2000)
    })
}

function getOrders(){
    return new Promise((res,rej) => {
        console.log("Your Orders");
        setTimeout(() => {
            console.log("This is your cart");
            res("Orders")
        }, 2000)
    })
}

async function getData(){
    try {
        const{ Profile, Orders} = 
        await Promise.all([
            getProfile1() , getOrders()
        ]);
    }
    catch(error){
        console.log(error);
    }
}