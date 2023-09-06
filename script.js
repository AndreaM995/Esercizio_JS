// Esempio: Scrivi un programma che dati quattro numeri, restituisca in output il maggiore e il minore. 
// Input: a = 3, b = -1, c = 4, d = -2
// Output: maggiore = 4, minore = -2

// let a = 3;
// let b = -1;
// let c = 4;
// let d = -2;
// let Max = Math.max(a, b, c, d);
// let Min = Math.min(a, b, c, d);
// console.log(Max);
// console.log(Min);

// _________________________________________________________

// Scrivi un programma che dato l’anno corrente e un anno di nascita determini:

// l’età della persona
// quanti anni sono necessari per raggiungere i 100
// Esempio:
// Input: anno corrente = 2021, anno di nascita = 1996
// Output: età = 25, anni mancanti = 75

// let anno = 2021;
// let nascita = 1996
// let età = anno - nascita;
// let annimancanti = 100 - età;
// console.log("il tizio in questione ha " + età + " anni");
// console.log("per arrivare a 100 anni, mancano " + annimancanti + " anni");

// ___________________________________________________________


// Progetta un algoritmo in Javascript che stampi tutte le coppie di numeri naturali la cui somma è un numero intero a scelta.

// Esempio
// Input: numero 7
// Output: 
// - 0-7
// - 1-6
// - 2-5
// - 3-4
// - 4-3
// - 5-2
// - 6-1
// - 7-0

// function coppie(num){
//     for(let i = 0; i <=num; i++){
//     let j = num - i;
//     console.log(i + "-" + j);

// }}
// coppie(7);

// ____________________________________________________________


// Il conta cifre
// Scrivi un programma che dato un numero conti da quante cifre è formato.

// Esempio
// Input: numero: 245
// Output: numero cifre: 3

// function numero(num){
//     let numstringa = num.toString();
//     let tot = numstringa.length;
//     console.log(tot);
// }
// numero(88935453);



// ES1: Scrivere un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
// se v e’ minore di 18,  stampare in console  “insufficiente”
// se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
// se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
// se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
// se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
// se v e’ uguale a 30, stampare in console:  “eccellente”
//   Esempio:
//   let v = 29;
//   Output: Ottimo
// Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch, case.


// let v = prompt("inserisci voto ");
// if(v < 18){
// console.log("Il voto è Insufficiente");
// }else if(v >= 18 && v < 21){
//     console.log("Il voto è Sufficiente");
// }else if(v >= 21 && v < 24){
//     console.log("Il voto è Buono");
// }else if(v >= 24 && v < 27){
//     console.log("Il voto è Distinto");
// }else if(v >= 27 && v <= 29){
//     console.log("Il voto è Ottimo");
// }else if(v == 30){
//     console.log("Il voto è Eccellente");
// }else{
//     console.log("Inserisci un voto valido che vada da 0 a 30");
// }


// let v = prompt("Inserisci voto ");
// switch (true) {
//     case v == 30:
//     console.log("Il voto è Eccellente");
//     break;
//     case v >= 27 && v <= 29:
//         console.log("Il voto è Ottimo");
//         break;
//         case v >= 24 && v < 27:
//             console.log("Il voto è Distinto");
//             break;
//                 case v >= 21 && v < 24:
//                 console.log("Il voto è Buono");
//                 break;
//                     case v >= 18 && v < 21:
//                     console.log("Il voto è Sufficiente");
//                     break;
//                         default:
//                             console.log("Il voto è Insufficiente");
// }



// ES2:  Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente.

// let n = 2;
// for(let i = 0; i <= 10; i++){
//     console.log("Il risultato è " + n*i);
// }






// EXTRA: Creare un programma che simuli il gioco di Super Mario Bros!
// Qui trovate un inizio del programma, lascio a voi la fantasia e la creativita’ di finire ed aggiungere il seguito di gioco!// INIZIO GIOCO
// let startGame = prompt(Sei pronto? \n (1) inizia partita \n (2) Esci dal gioco);

//     // E' stato premuto il tasto 1
//     if(startGame == '1') {
//         alert('Partita iniziata!');

//         // Introduciamo un nemico!
//         let enemy = prompt(Attento c'e' un nemico! Premi: \n (1) Salta e corri \n (2) Salta sopra al nemico ed eliminalo);
//         switch (enemy) {
//             case '1':
//                 alert(C'e' mancato poco! sei risducito a schivare il tuo primo nemico);
//                 break;
//             case '2':
//                 alert(Wow! Bravissimo! L'hai fatto fuori!);
//                 break;
//             default:
//                 alert(Peccato sei stato troppo lento... GAME OVER);
//                 break;
//         }
//     } else { // E' stato premuto il tasto 2
//         alert(sei uscito dal gioco! Mi spiace che tu non voglia giocare oggi!);
//     }



let continueGame = true; //variabile che indica che se esci dal gioco, esce totalmente dal gioco. 


function fire(){
    let num = prompt(`Selezione arma: \n (1) Una palla di fuoco \n (2) Tre palle di fuoco`);
    if(num==1){
        alert("Hai selezionato una palla di fuoco");
    }else if(num==2){
        alert("Hai selezionato tre palle di fuoco");
    }else{
        alert("Sei ritornato piccolo");
    }
}

let selector = ["Mario", "Luigi", "Princess", "Yoshi"];

while(continueGame){
    let startGame = prompt(`Sei pronto? \n (1) inizia partita \n (2) Esci dal gioco`);
    
    // E' stato premuto il tasto 1
    if(startGame == '1') {
        alert('Partita iniziata!');
        alert("Scegli il personaggio");
        let pg;
        let inputValido = false;
        while(!inputValido){
            pg = prompt("Inserisciun numero da 1 a 4 per selezionare il personaggio");
            pg = parseInt(pg)-1;
            if(pg >= 0 && pg < selector.length){
                inputValido = true;
            } else {
                alert("Selezione non valida! Riprova!");
            }
        }
            alert("Hai selezionato " +selector[pg]);
        
        
        // Introduciamo un nemico!
        let enemy = prompt(`Attento c'e' un nemico! Premi: \n (1) Salta e corri \n (2) Salta sopra al nemico ed eliminalo`);
        switch (enemy) {
            case '1':
            alert(`C'e' mancato poco! sei risducito a schivare il tuo primo nemico`);
            break;
            case '2':
            alert(`Wow! Bravissimo! L'hai fatto fuori!`);
            break;
            default:
            alert(`Peccato sei stato troppo lento... GAME OVER`);
            break;
        }
        
        // //  Salta le mattonelle e in base al numero di salti prende tot monete fino a un massimo di 5
        // let brick = prompt(`C'è un mattone! Se salti per 5 volte a ogni salto ti regala una moneta. Vuoi Saltare? Premi: \n (1) Salta e prendi le monete \n (2) Lascia perdere le monete`);
        //     switch (brick) {
        //         case '1':
        //             let money = prompt("Inserisci salti");
        //             for(let i=0; i<=4; i++) {
        //             }
        //             alert ("Hai raccolto " + money + " monete");
        //             break;
        //         case '2':
        //             alert("Non ci sono più monete");
        //             break;
        //         default:
        //             alert("Hai lasciato le monete");
        //             break;
        //     }
        
        let brick = prompt("C'è un mattone che contiene delle monete, vuoi saltare? Premi:\n(1) per saltare\n(2) per lasciar perdere e continuare");
        
        if (brick == 1) {
            let salti = prompt("Scrivi quante volte vuoi saltare sul mattone! Max 5!");
            for (let i = 0; i < salti; i++) {
                // Esegui azioni relative ai salti sul mattone
            }
            
            if (salti <= 5) {
                alert("Hai raccolto " + salti + " monete");
            } else if (salti > 5) {
                alert("Hai rotto il mattone!");
            }
            
        } else if (brick == 2) {
            alert("Hai perso le monete");
        }
        let enemy2 = prompt("C'è un nemico più forte! Premi: \n (1) Usa un fungo e diventa gigante \n (2) Lancia una tartaruga!  ")
        if (enemy2 == 1) {
            alert("Sei diventato grande! L'hai schiacciato!");
            fire();
            break;
        } else if (enemy2 == 2) {
            alert("La tartaruga l'ha colpito in testa! Bravissimo!");
            fire();
            break;
        } else {
            alert("Peccato! Sei stato troppo lento... GAME OVER");
            continueGame = false; // Esci dal ciclo e termina il programma
            break; // Esci dal ciclo while
        }
        
       

    }  else { // E' stato premuto il tasto 2 dell'inizio del gioco
        alert(`sei uscito dal gioco! Mi spiace che tu non voglia giocare oggi!`);
    }
}



















