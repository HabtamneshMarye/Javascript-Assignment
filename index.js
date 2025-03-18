const str = "extravaganza";
console.log(str.slice(-4));


const food =" The quick fox jumped over the lazy dog";
const index =4;
const insert = " eat ";
const result = food.slice(0, index) + insert +food.slice(index);
console.log(result);

const story = " The quick brown fox jumps over the lazy dog";
console.log(story.toLowerCase().split("the").length - 1);
console.log(story.toLowerCase().split("brown").length - 1);


const string1 = " The pupils are reading in the library";
console.log(string1.includes("are"));

const string2 = " The child was sitting on the table before it fell";
console.log(string2.includes("sitting"));


const str1 =" wonderful";
console.log(str1.toUpperCase());

const str2= "amazing";
const str3= "UndERneath";
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());

function toTitleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
const str4 =" A wonderful world";
console.log(toTitleCase(str4));