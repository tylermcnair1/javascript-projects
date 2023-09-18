let num = 1001;
num = 123.45;
//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
if (String(num).includes('.')){
    console.log(String(num).length-1);
} else {
    console.log(String(num).length);
}
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
 



let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
dna = dna.trim().toUpperCase();
console.log(dna);

dna = dna.replace('GCT','AGG')
console.log(dna);
console.log("The DNA strand is" , + dna.length , "characters long.");

let language = 'JavaScript';
console.log(language.slice(0,1)+language.slice(4,5));
let initials = "JS";
console.log(`The abbreviation for '${language} is '${initials}'.`);