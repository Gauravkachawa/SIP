function Gaurav1(){
    console.log("Welcome ")
}
Gaurav1();

function Gaurav2(batch){
    console.log(`Welcome back ${batch} batch`)
}
Gaurav2(2026);

function Gaurav3(course, batch){
    console.log(`Welcome back ${course} ${batch} batch`)
}
Gaurav3("BCA", 2026)

//return type function

function totalStudent(BCA , Btech, BBA, BSC){
    return BCA + Btech + BBA +BSC
}
console.log(totalStudent(100, 200, 50 ,300));