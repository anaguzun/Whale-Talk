const input = 'Hey Humans, i want to be free!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for(let i = 0; i < input.length; i++){
 for( let v = 0; v < vowels.length; v++){
if(input[i] === vowels[v]){
  if(input[i] === 'e'){
    resultArray.push('ee');
  }if(input[i] === 'u'){
    resultArray.push('uu');}
}
}
};

console.log(resultArray.join('').toUpperCase());