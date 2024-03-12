//oppgave 1

let num1 = ["a", "b", "c", "d", "e", "f"];

console.log(num1[0]);

//oppgave 2

let num2 = ["a", "b", "c", "d", "e", "f"];
var myL = num2.length;
console.log(num2[myL - 1]);

//oppgave 3

let num3 = [3, 66, 45];

function plussElementer(tall) {
  let s = 0;
  for (let i = 0; i < tall.length; i++) {
    s += tall[i];
  }
  return s;
}

console.log("Sum av alle tallene: ", plussElementer(num3));

function gangeElementer(tall) {
  let produkt = 1;
  for (let i = 0; i < tall.length; i++) {
    produkt *= tall[i];
  }
  return produkt;
}

console.log("Produkt av alle tallene: ", gangeElementer(num3));

//oppgave 4
let list1 = [1, 2, 3, 4, 5];
let list2 = [0, 1, 2, 3, 4];

function sumIndeksverdier(liste1, liste2) {
  let resultat = [];
  for (let i = 0; i < liste1.length; i++) {
    resultat.push(liste1[i] + liste2[i]);
  }
  return resultat;
}

let resultat = sumIndeksverdier(list1, list2);
console.log("Summen av hver enkelt indeksverdi: ", resultat.toString());