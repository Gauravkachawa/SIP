
// class student1{
//     constructor(name, age){
//         this.name = name ,
//         this.age = age
//     }
//     greet(){
//         console.log(`Hello ${this.name} Uth Jao `)
//     }
// }

// const student  = new student1("Samiran" ,20)

// console.log(student)

// student.greet();

class Person{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(`Hii ${this.name}`)
    }
}

class student extends Person {
    constructor(name, course){
        super(name);
        this.course = course;
    }
    study(){
        console.log(`${this.name} studies ${this.course}`)
    }
}

const studentt  = new student("Gaurav" ,"Mern")
studentt.greet();
studentt.study();

