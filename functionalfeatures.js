"use strict";
let mas=[10,20,30,40,50];

let mas1=mas.map(x=>x*x);
console.log(mas1);
//[ 100, 400, 900, 1600, 2500 ]

let mas2=mas.filter(x=>x>10);
console.log(mas2);
//[ 20, 30, 40, 50 ]

mas.forEach(x=>console.log(x));

let res=mas.reduce((s,y)=>s+y,0);
console.log(res);

