//1. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol skaičių suma bus mažesnė už 100.
  function rand(min, max) {   
  return Math.floor(Math.random()*(max-min+1)+min);
}
  let sum=0;
  while (sum<100) {
    sum += rand(1, 10);
    console.log(sum);
  }

//2. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol sugeneruotų skaičių suma bus dali iš 7.

console.log('------------------');
  function rand(min, max) {   
  return Math.floor(Math.random()*(max-min+1)+min);
}
  let suma = rand(1, 10);
  while (suma % 7) {
    suma +=rand(1,10);
    console.log (suma);
  }

//3. Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti. Knygoje yra m skyrių. 
//Pirmą dieną Tadas perskaitė 1 skyrių, antrą – 2, trečią – 3 ir t.t. Kiekvieną kitą dieną jis perskaito vienu skyriumi daugiau,
//negu prieš tai buvusią dieną. Programa turi apskaičiuoti, per kelias dienas d Tadas perskaitys visą knygą ir kelis skyrius
//s vidutiniškai per dieną perskaito Tadas. Paskutinei dienai gali likti mažiau skyrių.  Kontroliniai duomenys: Įveskite knygos
//skyrių skaičių: 8 Tadas visą knygą perskaitys per 4 dienas (-ų). Tadas vidutiniškai per dieną perskaitė 2 skyrius(-ų).
//Įveskite knygos skyrių skaičių: 17 Tadas visą knygą perskaitys per 6 dienas (-ų). 
//Tadas vidutiniškai per dieną perskaitė 2.83 skyrius (-ų). 
console.log('------------------');

//4. Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
//Paskutinis atspausdintas skaičius turi būti 5. 
console.log('------------------');

 function rand(min, max) {   
  return Math.floor(Math.random()*(max-min+1)+min);
}
let number = 0;
while (number != 5) {
    number = rand(0, 10);
    console.log(number);
}
//5. naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
// Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko.function rand(min, max) 

console.log('------------------');

 function rand(min, max) {   
 return Math.floor(Math.random()*(max-min+1)+min);
}
let number1 = 0;
let c = 0;
while ((number1 != 7) && (number1 != 5)) {
    number1 = rand(0, 10);
    console.log(number1);
    c++
} console.log(`Ciklas apsisuko ${c} kartų`);

