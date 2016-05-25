/**
 * add
 */
class add {
    constructor(public a:number , public b:number) {
        
    }
    getsum(){
        return this.a + this.b;
    }
}
let addition = new add(1,1);
addition.getsum()