// setInterval(Callback, delay)

// setInterval(function(){

// })

// let count = 9;
// const timer = setInterval(() => {
//     console.log(count);
//     count--;
//     if(count<0){
//         clearInterval(timer);
//     }
// },1000)

const time2 = setInterval(() =>{
    const now = new Date();
    console.log(now.toLocaleTimeString());

}, 1000)
