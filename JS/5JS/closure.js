// function outer (){
//     var x = 1;
//     function inner(){
//         x++;
//         console.log(x);
//     }
//     return inner;
// }

// const ans = outer();
// ans();
// ans();

function grandFather(){
    var x =1;
    return function parent(){
        x++;
    return function child(){
        x++;
        console.log(x);
    }
    }
}

const ans = grandFather();
const ans1 = ans();
ans1();
ans1();
ans1();


