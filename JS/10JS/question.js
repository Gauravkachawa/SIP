class User{
    constructor(name, mobile,balance){
        this.name= name;
        this.mobile = mobile;
        
        this.balance = balance;
        
    }
    BankDetails(){
        console.log(`Hii ${this.name}`)
        console.log(`Your Phone number ${this.mobile}`)
        console.log(`Your amount ${this.amount}`)
        console.log(`Your balance${this.balance}`)
    }
    details(){
        console.log(`Your Name Is ${this.name} and your Phone mumber is ${this.mobile}`)
    }
    withdraw(amount){
        this.balance = this.balance - amount
        console.log(`the amount remaining after you withdraw is ${this.balance}`)
    }
    deposit(amount){
        this.balance = this.balance + amount
        console.log(`Your updated balance after withdrawing ${this.balance}`)
    }
}


const account = new User("Gaurav", 9783532573, 10000)

account.details();
account.withdraw(5000);
account.deposit(10000);

