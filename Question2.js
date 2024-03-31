// The array is tasked to input and output prime numbers 
function generatingArray(begin,end){
    const result = [];
    const i = begin;
    if (i <= end){
        result.push(i);
    }return result;
}
console.log(generatingArray(4,7));