// console.log(x);//it will give undefine
// getname();//it will give namste
//  getname2();  //undefined() AND it is not fn so on ivocation we get type error
// console.log(getName2());

// so code execute line by line one line at a time;


// function getname(){
//     console.log('namaste')
// }

// var getName2 = () => {
//     console.log('namaste');
// }
// var x=7


// Type	Before Initialization
// Function Declaration	 Works
// Arrow + var	TypeError
// Arrow + let/const	 ReferenceError
//in case of let const there is temporal zone

// {
//     var a=10;
//     let b=100;
// }
// console.log(a);
// console.log(b);

// closure;

function x(){
    var a=7;
    function y(){
        console.log(a);

    }
    a=100;
    return y;
}
var z=x();
console.log(z);
z();//100












