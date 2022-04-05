// 1. Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.
    
    function suma(a, b){
        return a + b;

    }
    const s1 = suma(1, 2);{
        console.log(s1);
    }

//2. Parašyti funkciją, kuri priima du kintamuosius. Palygina tuos du skaičius ir grąžina rezultatą ar pirmas skaičius 
//yra didesnis, ar antras, ar jie yra lygūs.

    function skaiciuAnalize(a, b){
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
     console.log(skaiciuAnalize(3, 4));
     console.log(skaiciuAnalize(4, 4));
     console.log(skaiciuAnalize(4, 5));
   
    
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

function isKiekDalinasi(skaicius1) {
    let daliklis = 0;
    for (let i = 0; i < skaicius1; i++) {
        if ((skaicius1 % i ===0) && (i !== 1)) {
        daliklis += i;
    }

    } return `Skaičius ${skaicius1} dalijasi iš ${daliklis} sveikų skaičių be liekanos (išskyrus vienetą ir patį save).`
}
    console.log(isKiekDalinasi(8));


 //   7. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Funkcija turi išvesti tekstą į ekraną ir dar papildomai
 //    parodyti jo ilgį (simbolių kiekį). 

        function tekstas(vardas) {
            
            return`Vardą ${vardas} sudaro ${vardas.length} simboliai`;
        }

        console.log(tekstas('Amelija'));


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


        
 //     //    8. Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį – masyvą su 10 skaičių jame. 
 //    Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". 
     
 //10. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Suskaičiuoti, kiek tekste yra ‚a‘ raidžių. 
        
       // function raidziuAnalize(text) {
       //     for (let i = 0; i <= text.length; i++) {
       //         if ((skaicius1 % i ===0) && (i !== 1)) {
       //         daliklis += i;
//
       // return`Tekste ${text} yra X a raidžių`
       // }
       // 
       // console.log(raidziuAnalize(Labas));
