interface name{
    firstName?:string;
    lastName?:string;
    
}
function printName(fullname:name):{firstName: string  ; myLastName: string}{
    let knowmyName = {firstName:"ranjeet" , myLastName:"verma"};
    if (fullname.firstName) {
        knowmyName.firstName = fullname.firstName;
    }
    if (fullname.lastName) {
        knowmyName.myLastName = fullname.lastName;
    }
    return knowmyName;
}
let printMyName = printName({firstName:"ranjeet" , lastName:"verma"});
console.log(printMyName);