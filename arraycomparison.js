"use strict";

let m1=[10, 20, 30, 40, 50];
let m2=[10, 20, 60, 40, 50];

console.log(compareArrays(m1,m2));

function compareArrays(m1,m2) {
    return ((m1.length===m2.length)&&(m1.every((v,i)=>v===m2[i])));
}


