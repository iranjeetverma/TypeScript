/**
 * HelloWorld
 */
class HelloWorld {
    constructor(public name: string) {
        
    }
    getMessage(){
        return 'Hello ' + this.name;
    }
}

let msg = new HelloWorld('Ranjeet Verma')
msg.getMessage()

let Name: String = "ranjeet";
let Age: number = 28;
let Getdiscription : string = "my name is"+(Name)+"and my age"+(Age);
console.log(Getdiscription);
