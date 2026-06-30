// let student = {
//     name : "Gaurav",
//     age : 20,
//     course : "BCA",
//     city : "kota",
//     // greet: function(){
//     //     console.log(`Hello!, this side ${this.name}, and my age is ${this.age}`);
//     // }
// }

// //print object
// console.log(student);

// // console.log(student.greet());

// //Get value

// console.log(student.name);
// console.log(student["age"]);

// //update value

// student.city = "Indore"
// console.log(student);

// // Add key

// student.skill = "Javascript"
// console.log(student);

// //Add function

// student.greet = function(){
//     console.log("Hello");
// }
// console.log(student.greet());


let student = {
    name: "Gaurav",
    age : 20,
    
}

console.log(student);

student.skill = "Javascript";
student.marks = 75;


console.log(student);

student.greet = function(){
    console.log(`hello my name is ${this.name}`)
}


console.log(student.greet());