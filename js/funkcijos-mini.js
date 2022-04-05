// 1. Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.
    
    function suma(a, b) {
        return a + b;

    }
    const s1 = suma(1, 2);{
        console.log(s1);
    }

//2. Parašyti funkciją, kuri priima du kintamuosius. Palygina tuos du skaičius ir grąžina rezultatą ar pirmas skaičius 
//yra didesnis, ar antras, ar jie yra lygūs.

    function skaiciuAnalize(a, b) {
        if (a > b) {
        return 'Pirmas skaičius yra didesnis';
    }
        if (a < b) {
        return 'Antras skaičius yra didesnis';
    }   
        if (a = b) {
        return 'Skaičiai yra lygūs';
        }
        
    }
     console.log(skaiciuAnalize(3, 3));
    
   
    
 // 3. Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.

    function arKeliamieji(metai) {
        if ((metai % 4 == 0) && (metai % 100 !== 0) || (metai % 400 == 0)){
            return `${metai} yra keliamieji`;
        }
        else {
            return `${metai} nėra keliamieji`;
        }
    }
     
    console.log(arKeliamieji(2020));
    console.log(arKeliamieji(1988));
    console.log(arKeliamieji(1986));
    

 //  4. Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą. 

 function skaiciusKvadratu(a) {
    
    if (typeof a !== 'number') {
        return 'ERROR: parametras turi būti skaičius';
    }
    if (isNaN(a)) {
        return 'ERROR: parametras turi būti tikras skaicius';
    }

    return a * a;
};

console.log(skaiciusKvadratu(16));
console.log(skaiciusKvadratu('labas'));

 //  5. Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. Funkcija turi grąžinti visų 
 //  skaičių sumą, nuo 1 iki įvesto skaičiaus. 

 function sumaIntervale(skaicius) {
    if (skaicius > 1) {
    let suma = 0;
    for (let i = 0; i <= skaicius; i++) {
        suma += i;
    
    } return `Skaičių suma nuo 1 iki ${skaicius} = ${suma}`;
}
}

console.log(sumaIntervale(6));


//  6. Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos  argumentas dalijasi be
// liekanos (išskyrus vienetą ir patį save).

    function sveikuSkaicuKiekis(skaicius1) {
        if (typeof skaicius1 !== 'number'){
            return 'ERROR: kintamasis nėra skaičius';
        }
        if (!isFinite(skaicius1)) {
            return 'ERROR: kintamasis turi būti tikras skaicius';
        }
            let count = 0;

        for (let i=-skaicius1; i<skaicius1; i++){
            if ((skaicius1 % i ===0) && (i !== 1)) {
                count++;
            }
        }
        return `Skaičius ${skaicius1} dalijasi iš ${count} sveikų skaičių be liekanos (išskyrus vienetą ir patį save).`
    }

        console.log(sveikuSkaicuKiekis(9));


 //   7. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Funkcija turi išvesti tekstą į ekraną ir dar papildomai
 //    parodyti jo ilgį (simbolių kiekį). 

        function tekstas(vardas) {
            
            return`Vardą ${vardas} sudaro ${vardas.length} simboliai`;
        }

        console.log(tekstas('Amelija'));

//   8. Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį – masyvą su 10 skaičių jame. 
 //  Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". 
 function telefonoNumeris(number) {
    if (typeof number !== 'object') {
        return 'ERROR: neteisingas numeris'
    }
    if (number.length !== 10) {
        return 'ERROR: Netinkamas skaitmenų kiekis'
    }
    for (let i = 0; i <= number.length; i++) {
         return `(${number[0]} ${number[1]} ${number[2]}) ${number[3]} ${number[4]} ${number[5]} - ${number[6]} ${number[7]} ${number[8]} ${number[9]}`;
        }
}

console.log(telefonoNumeris([3, 7, 0, 6, 8, 6, 3, 9, 3, 2]));
console.log(telefonoNumeris([3, 7, 0, 6, 8, 6, 3, 9, 3]));

 //    9. Parašyti funkciją, kuri priimtų du kintamuosius - tekstus. Palyginti kuris tekstas yra ilgesnis.
        function tekstoAnalize(tekstas1, tekstas2) {
            if (typeof tekstas1 !== 'string') {
                return 'ERROR: Tekstas yra netinkamo tipo.';
            }
            if (typeof tekstas2 !== 'string') {
                return 'ERROR: Tekstas yra netinkamo tipo.';
            }
            if (tekstas1 === '') {
                return 'ERROR: Tekstas negali buti tuscias.';
            }
            if (tekstas2 === '') {
                return 'ERROR: Tekstas negali buti tuscias.';
            }
            if (tekstas1.length > tekstas2.length) {
                return 'Pirmas tekstas yra ilgsenis';
            }
                if (tekstas1.length < tekstas2.length) {
                return 'Antras tekstas yra ilgesnis';
            }   
                if (tekstas1.length = tekstas2.length) {
                return 'Tekstai yra lygūs';
                }

        }

        console.log(tekstoAnalize('Labas', 'Labukas'));
        console.log(tekstoAnalize('Vakaras', 'Ilgas'));
        console.log(tekstoAnalize('Vakaras', 'Vakaras'));
        console.log(tekstoAnalize('', 'Vakaras'));
        console.log(tekstoAnalize(2, 'Vakaras'));


 //10. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Suskaičiuoti, kiek tekste yra ‚a‘ raidžių. 
        function raidziuAnalize(text) {
            if (typeof text !== 'string') {
                return 'ERROR: Tekstas yra netinkamo tipo.';
            }
                let countA = 0;
                for (let i=0; i<text.length; i++){
                    if((text[i] === 'a') || (text[i] === 'A')) {
                        countA++;
                    }
                }
            return `Tekste ${text} yra ${countA} "a" raidžių`
        }
        
        console.log(raidziuAnalize('Abrakadabra'));
        