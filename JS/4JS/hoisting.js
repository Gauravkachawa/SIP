//function calling before its declaration is called hoisting

greet();
function greet (){
    console.log("Hello");
}

console.log(name);

const name = "Gaurav";