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

let msg = new HelloWorld('Ranjeet')
msg.getMessage()