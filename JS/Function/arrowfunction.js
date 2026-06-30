const Gaurav1 = () =>{
    console.log("Welcome ")
}
Gaurav1();


const Gaurav2 = (batch) => {
    console.log(`Welcome back ${batch} batch`)
}
Gaurav2(2026);

const totalStudent = (BCA, Btech,  BBA, BSC) =>  BCA + Btech + BBA +BSC

console.log(totalStudent(100, 200, 50 ,300));

const totalStudent2 = (BCA, Btech,  BBA, BSC) => { 
    return (BCA + Btech + BBA +BSC)
}

console.log(totalStudent(100, 200, 50 ,300));