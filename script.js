// var a=12;//ye fn scoped hai window mein attach global hai sab jagah chalega 
//  var a=13; ek bar var define krke value de diya dubara reassign kr sakte hai ya same variable lekar phir de define kr diya  no error
//cons d;//error ata hai khali const d krne se define ke bad turant value deni hoti h
// const ek bar create kr diye dubara value badal  bhi nahi saktte h

// let a=13;
// let a=14; error lekin var ke case mein nahi


// var a sirf fn ko respect krta hai warna sab jagah acess lekin abad mein ek fn ke andar jata hai to chal jata hai;

// let cons mein temporal zone hota hai var mein nahi

// hoisting let var kahte jab tak initillization nahi honga tab acess nahi reference error ;var kahta hai acess honga undefined denga ;hosiitng mein




// var sirf fn ko respect jaha ffn nahi waha wah global ban jayega if block statement ko not respect because they are not fn
// let blockscope hota hain boss; curly bracket ko respect

// const mein object ke property change kr sakte hai lekin reasign nahi kr sakte hai



//var mein temporaral zone nahi hota ocnst let mein hota hain


// let x=null;
//let y  //undefined ayega y krne pa


// let obj={
//   uid:1,//=karke value nahi denge object : ye used karenge

// }
// let u1=Symbol("uid");//yaha hmne apna khud ka create kr liya ab ovewrite nahi marebga boss;
// obj[u1]=12;

// let a=[1,2,3];
// let b=a;
// b.pop();//ek value last se hta denga

// let a={ //fn se refrence copy se pass ya accept 
//   name:"ak"

// }
// let b=a;
// b.name="kk"

// let a=12;
// s="ak";
// a=[1,2,3];
// a=null;
// a='a';//dynamic typing js mein hota hain


// + keval add krta hai aur concatanation - keval subtract krta hai agar na hai type coercion hota hai js mein 

//nan null document all are false ;
//iske alwa baki sab true;

//nan aese matemical opertaion jo ho nahi sakta tha number ka operation failser numberoperation huwa to nan name  diya gya ;

//  function getgrade(score){
//   if(score<=100&&score>=90){
//     return "A++";
//   }
 
// }
// console.log(getgrade(90)); 


// loop java ki tarah chaalte
// yaha int ki jagah let used karte hai 
// ajgagj hakh
// yaha == ki jagah === used karet hai


// let val=prompt("number");//input aese lete hain
// // for(let i=1;i<=val;i++){
// //   if(i%2===0){
// //     console.log(i);
// //   }
// // }
//  let sum=0;
// while(val!=0){
//   val=Math.floor(val/10);//bach ke rehna ismein ye tricky hai 
//   sum++;
// }
// console.log(sum);


// dyanamic value 
// function abcd( v){//JavaScript mein function ke parameters define karte waqt hum let, var, ya const ka istemal nahi karte.
//   console.log(`${v} nach rga hau`)
// }
// abcd("heeran");
// abcd("gandu");
// function abcd( v=0){//jab value na mile to zero walo deafault parametr by default zero rakhte hain
//   console.log(v)
// }
// abcd();


// function abcd(a,b,c,...v ){
//   console.log(v)//array ke form mein ayenge; bache huwe ayenge v ke andar baki tin parametr hai tin argument le lege hi

// }
// abcd(1,2,3,4,5,6,7,8);



// // firts class fn ko value ki atarh treat
// function abcd(val){//val mein fn bheja fir use call out kiya wahi call lgaya 
// val();
// }
// abcd(function(){
//   console.log("hh")
// })


// upar wala abcd higher order fn hai because ye fn accept kr rahe hai ya fn ko rturn kr rahe hain 
// function abcd(val){
//  return function(){
//   console.log("akk");

//  }
// }
// abcd()();//pahla wala bracket return fn honga to dusra wala bracket usi fn ko call out kar denga

// let a=13;
// // function abcd(val){
// //   // a++; iske wajah se impure fn ban jayenga
// //   // console.log("a") iske wajah se koi fark nahi bahar wala to upar wala line na hota ta yah pure fn hota 
// // }
// // abcd();

// closer mip return hone wale fn mein parent fn ka koi variable hona chahiye
// function abcd(val){
//   let a=13;

// return function(){
//   console.log(a);
// }
// }
// abcd()();

// FN STATEMENT EXPRESION ARROW DEKH LO 

// let multi=(a,b) =>{ arrow 
//   console.log(a*b);
// }

// let multi=function(a,b){//expression
//   console.log(a*b);
// }
// function multi(a,b){
//    console.log(a*b);

// }
// multi(1,2);



// jab argument nahi diya lekin parameter le rahe hai to undefined honga hai ya phir parameter ko kuch value de do tab undefined nahi ayenga

// function getscore(...score){
//   let total=0;
//   score.forEach(function (val){//bari bari krke sari value ko lekar total return kar denga;
//     total=total+val;
//   });
//   return total;
// }
// console.log(getscore(10,20,30,40));

// function outer(){
//   let count=0;//return wale fn mein ye variable use hua isi ko closer kahte hain
//   return function(){
//     count++;
//     console.log(count);
//   }

// }
// const counter=outer();
// counter();
// counter();
   


// loop ke aur fn ke questions solve kro jyada se jayda gpt
















  let arr=[1,2,3,4];
//   arr[2]=4//update;
//   arr.push(7)//add honga 
//   arr.pop();//akhiri value hat jayegi
//   arr.shift();//shuru se value first hat jayengi;
// arr.unshift(0);//shuru mein add kar denga ise 0 ko
//    arr.splice(2,1)//kaha se hatani hai kitni hatani uske age ka use lekar ye bracket ke nadar pahla aur dusra decide karenge;
// let newarr=arr.slice(0,2);//zero se lkra 2-1 index ko apne andar new array bna lega purana array wahi return karenga;

// arr.reverse();//reverse kardenga array ko 




// let sr=arr.sort( function(a,b){ nam kuch bhi do a,b ya jon man kare vah do bas name dena pdta hai wah bhi do
//     return a-b// //ascending milega
//     return b-a //descending
// });
