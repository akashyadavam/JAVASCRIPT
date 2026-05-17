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

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);

//     }
//     a=100;
//     return y;
// }
// var z=x();
// console.log(z);
// z();//100



// function x() {

//     for (var i = 1; i <= 5; i++) {

//         function close(x) {

//             setTimeout(function () {
//                 console.log(x);
//             }, x * 1000);
//         }

//         close(i);
//     }

//     console.log("Namaste JavaScript");
// }

// x();//output 1 2 3 4 5 6




// function x() {

//     
// for(var i=1;i<=5;i++){

//    setTimeout(function(){
//       console.log(i);
//    },1000);
// }
//     }
// }
    
// x();// 6 6 6 6 6 6


// function x() {

// for(let i=1;i<=5;i++){

//    setTimeout(function(){
//       console.log(i);
//    },1000);
// }
// }
// x();//1 2 3 4 5 

// function outer(){

//     function inner(){
//         console.log(a);
//     }

//     var a = 10;

//     return inner;
// }

// var close = outer();

// close();


// function outest(){

//     var c = 20;

//     function outer(b){

//         function inner(){
//             console.log(a, b, c);
//         }

//         let a = 10;

//         return inner;
//     }

//     return outer;
// }

// let a = 100;

// var close = outest()("helloworld");

// close();//current scope
// ↓
// outer scope
// ↓
// outer's outer scope
// ↓
// global




//     function outer(b){

//         function inner(){
//             console.log(a, b, c);
//         }

//         // let a = 10;

//         return inner;
//     }

//     return outer;
// }

// let a = 100;

// var close = outest()("helloworld");

// close();



