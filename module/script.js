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
  // arr[2]=4//update;
  // arr.push(7)//add honga 
  // arr.pop();//akhiri value hat jayegi
  // arr.shift();//shuru se value first hat jayengi;
// arr.unshift(0);//shuru mein add kar denga ise 0 ko
  //  arr.splice(2,1)// bich se value hatayengi//kaha se hatani hai kitni hatani uske age ka use lekar ye bracket ke nadar pahla aur dusra decide karenge; ye slice new arr mein reurn purane arr mein kuch nahi return


// let newarr=arr.slice(0,2);//zero se lkra 2-1 index ko apne andar new array bna lega purana array wahi return karenga;

// arr.reverse();//reverse kardenga array ko 




// let sr=arr.sort( function(a,b){
// //  nam kuch bhi do a,b ya jon man kare vah do bas name dena pdta hai wah bhi do
//     return a-b// //ascending milega
//     return b-a //descending
// });



// scrollTo,map,foreach 


// arr.forEach(function(val){
//   console.log(val);

// })




//map ssrf tab use karna hai jab apko new array bnana hai pichle array ke data bases pr map dikhte man mein blank arr banao
//  let ans=arr.map(function(val){
//   return 12;
// })//save krna pdta hai let mein map ko 
// agar return nahi karenge retunt to undefined ayenga



//  let sr=arr.filter(function(val){
  // return false; 
// })



// let ar=arr.reduce(function(accumulator,val){
//   return accumulator+val;
// },0);
//bari bari karke arrray ke lement ka sum karke acccumulator meindenga intial accumulator 0 initallise kiya tha


// let va=arr.find(function(val){
//   return val===40;//agar val equal hua array wale elemnt se to wah elemnt return hokar store ho jayenga variable mein  pahla banda milega jo 40 ke eual hain
// })



// let a=arr.some(function(val){
//   return val>2;//koi banda hai 2 se bada to true koi bhi element true flse mein answer milenga;
// });



// let a=arr.every(function(val){
//   return val>0;//sare elemt agar 0 se bada tab true return hokar a mein stor ek bhi chota to false hi milenga
// });ye bhi true false mein answer dete hain


// let[a,b,,c]=arr;//destructuring
// // let arr2=arr;//reference copy
//   let arr2=[...arr];
// spred operator ...arr ka matlab sariarr ke elemnt uthao uso spread kr do square bracket mein
let a=[1,2,3];
a=[0,...a];

// let color=["greet"];
// color.splice(1,0,"red","blue")//1 index 0 hatana ek bhi hatana nahi age jo bheja us location ke age ye pass ho jayenge 

//  let name=["ak","am","ma","sum","golu","pro","khu"];
//  name.sort().reverse();



//  let obj={
//   name:"akash",
//   age:20,
//  }
// let aa="name";
// obj.aa//yahi name dhuda jayenga obj mein jo ki hai nahi
// obj[aa];//ab acess ab aa covert name mein ho jayega  variable name likhe hai aa ye convert ho jayenag
//  console.log(obj.age);//dot ke bad jo likheneg wah variable dhuda jayenga
//  console.log(obj['age']);//square bracket ke andar jab likhe to ' ' iska used kare variable ka name likhne mein

//  let user={
//   name:"ak",
//   adress:{
//     city:"jnp",
//     pincode:222161,
//     locations:{
//       lat:13,
//       long:12,
//     }

//   }

//  }
//  let{lat,long}=user.adress.locations;
//  console.log(lat)

// let obj={
//   name:"ak",//key value left side aur col ke rigth side wala structured;
//   age:20,

// }
// for(let key in obj){//key ek variable hai jaiske value change hogi
//   //console.log(obj.key);//
//   console.log(key,obj[key])
// }

// Object.key(obj);
// Object.entries(obj);



let obj={
  name:"ak",
  adress:{
    city:"jnp",
    pincode:222161,
    locations:{
      lat:13,
      long:12,
    },
  },
};
// let obj2=Object.assign({price:"infinity"},obj);

// obj2={...obj}
// obj2.adress.city="gkp";
//ab obj ka city gkp bn gay due to nested andar ke nested objected reference copy hone lgta hain bhale hi spread hi kyon na ue kiye ho to isase bachne ke liye deep copy kareneg

// let obj2=JSON.parse(JSON.stringify(obj))//stringfy krne sare string ka part reality mein parse ke dwara copy ban jayega
// obj2.adress.city="gkp"


