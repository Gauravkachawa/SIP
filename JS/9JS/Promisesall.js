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
        }, 3000)
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

getData();