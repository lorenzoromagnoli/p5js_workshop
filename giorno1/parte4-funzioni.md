# Giorno 1 - Parte 4 - funzioni e variabili

## le variabili
Come abbiamo visto precedentemente p5.js ci mette a disposizione delle variabili che possiamo usare nel nostro sketch al posto di numeri specifici.
Possiamo ovviamente creare anche delle variabili nostre ed utilizzarle nel programma.

```
var positionX;
var positionY;

void setup(){
  //quì il codice di setup
}

void setup(){
  //quì il codice di draw
}
```

## le funzioni
Le funzioni servono proprio a contenere il codice che scriviamo in blocchi riutilizzabili. Utilizzarle aumenta la leggibilità del programma e la sanità mentale dei programmatori che dovranno guardare il codice.
Ovviamente le abbiamo già usate ogni volta che abbiamo disegnato qualcosa sullo schermo, per esempio `rect(x,y,w,h)` è una funzione già esistente dentro p5.js che al suo interno descrive come deve essere disegnato un rettangolo sul canvas.
I valori tra parentesi sono delle variabili che dobbiamo passare alla funzione per definire alcune proprietà del rettangolo che vogliamo disegnare.
** Come creo una nuova funzione in js? **

```
function disegnaGino(x,y){
  rect (x-50,y,-50, 100,100)
  ellipse (x-20,y,-20, 20,20)
  ellipse (x-70,y,-20, 20,20)
  //posso continuare ad aggiungere quì tutte le primitive grafiche che che fanno parte della funzione disegnaGino
}
```
!!! Attenzione !!! Le variabili (x,y) che passiamo in ingresso alla funzione sono utilizzate solo dentro alla funzione, al di fuori non hanno alcun valore.

Le funzioni vanno scritte al difuori dei blocchi di setup() e draw() in modo da essere accessibili a tutto il programma.

Una volta scritta la funziona la posso richiamare da dentro il codice di draw quante volte voglio

```
void setup(){
//...
}

void draw(){
  disegnaGino(20,20);
  disegnaGino(70,80);
  disegnaGino(70,200);
}

function disegnaGino(x,y){
  rect (x-50,y,-50, 100,100)
  ellipse (x-20,y,-20, 20,20)
  ellipse (x-70,y,-20, 20,20)
}
```

posso anche utilizzare le variabili che ho creato prima e definire altr funzioni:

```
var positionX;
var positionY;

void setup(){
 createCanvas(640,480);
}

void draw(){
  aggiornaPosizione();
  disegnaGino(positionX,positionY)
}

function disegnaGino(x,y){
  rect (x-50,y,-50, 100,100)
  ellipse (x-20,y,-20, 20,20)
  ellipse (x-70,y,-20, 20,20)
}

function aggiornaPosizione(){ //aggiorna le variabili con la posizione del mouse
  positionX=mouseX;
  positionY=mouseY
}
```

Quarda il codice dell'esercizio 4 dove ho creato un po' di funzioni varie e vedi il risultato dello sketch [qui](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/4_funzioni.html)
