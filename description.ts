/**
 * Description
 */
class Description {
    constructor(public name:string ,age:number) {
        
    }
    Getdescription(){
        
        return "my name is "+this.name+"and age"+this.age;
    }
}
let about = new Description("ranjeet" , 28)
console.log(about);