//Javascript behaving synchrounously

console.log("Gaurav")
console.log("Aditya")
console.log("Samiran")


function greet (){
    console.log("Hello Gaurav")
}
greet();

//Asynchronous settimeout

console.log("Gaurav")
console.log("Aditya")
console.log("Samiran")

console.log("Start")
setTimeout(() => {
    console.log("Hello Gaurav")
}, 500)


let count = 0;
let time = setInterval(()=>{
    console.log("Dikh mat Jaiyo")
    console.log(count);
    count--;
    if(count<1){
        clearInterval(time);
        setTimeout(() => {
            console.log("Samne mat Aaiyo")
        },3000)
    }
} ,4000)


setTimeout(()=>{
    console.log("Kya kar sakte ho")
    setTimeout(() => {
        console.log("Kuch nahi")
        setTimeout(() => {
            console.log("Kuch toh kar sakte honge")
            setTimeout(() => {
                console.log("Timepass kar sakta hoon")
            },1000)
        },1000)
    },1000)
},1000)



