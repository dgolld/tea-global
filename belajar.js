// function topDouble(value, top) {
//     while(value * 2 <= top){
//         console.log(value);
//         value *= 2 ;
//     }
//     return value;
// }


// console.log(topDouble(2,100)); hari pertama sejak ini mulai ku record 

// function isEven(num) {
//     if(num % 2 === 0){
//         return true;
//     }
//     else 
//     return false
// }
// console.log(isEven(2));

// function smallerNumber(num1, num2) {
//     if(num1<num2){
//         return num1;
//     }else{
//         return num2
//     }
// }

//console.log(smallerNumber(20,10));

function isAllX(string) {
    if(string.length === 0){
        return false;
    }

    for(let i = 0;i < string.length;i++){
        if(string[i].toLowerCase() !== 'x' ){
            return false;
        }
    }
}

console.log(isAllX(xxxX));