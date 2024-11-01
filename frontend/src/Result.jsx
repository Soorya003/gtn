import React from 'react';

function Result({secretNum,term}) {

let result;
if(term){
if(term>secretNum){
result="higher"
}else if(term<secretNum){
    result="lower"
}else if(term==secretNum){
    result="yippee! correct"
}else{
    result="please enter a number"
}
}
    return <h3>you Guessed:{result}</h3>    
}


export default Result;