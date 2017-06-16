# Giorno 1 - Parte 4 - funzioni e variabili

## le variabili
Come abbiamo visto precedentemente p5.js ci mette a disposizione delle variabili che possiamo usare nel nostro sketch al posto di numeri specifici.
Possiamo ovviamente creare anche delle variabili nostre ed utilizzarle nel programma.

```javascript
var positionX;
var positionY;

void setup(){
  //quì il codice di setup
}

void draw(){
  //quì il codice di draw
}
```

## le funzioni
Le funzioni servono proprio a contenere il codice che scriviamo in blocchi riutilizzabili. Utilizzarle aumenta la leggibilità del programma e la sanità mentale dei programmatori che dovranno guardare il codice.
Ovviamente le abbiamo già usate ogni volta che abbiamo disegnato qualcosa sullo schermo, per esempio `rect(x,y,w,h)` è una funzione già esistente dentro p5.js che al suo interno descrive come deve essere disegnato un rettangolo sul canvas.
I valori tra parentesi sono delle variabili che dobbiamo passare alla funzione per definire alcune proprietà del rettangolo che vogliamo disegnare.
** Come creo una nuova funzione in js? **

```javascript
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

```javascript
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

```javascript
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

Quarda [il codice dell'esercizio 4](https://github.com/lorenzoromagnoli/p5js_workshop/blob/master/giorno1/4_funzioni/sketch.js) dove ho creato un po' di funzioni varie e vedi il risultato dello sketch [qui](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/4_funzioni)

### appunti del giorno 1:
- [configurare un local server](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/setup_atom-live-server.html)
- [parte 1 - setup ](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte1-setup.html)
- [parte 2 - primitive grafiche](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte2-primitive-grafiche.html)
- [parte 3 - interazione con mause](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte3-interazioni_col_mouse.html)[
- [parte 4 - funzioni](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte4-funzioni.html)
- [parte 5 - interazioni con tastiera](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte5-interazioni-con-tastiera.html)
- [parte 6 - collision detection](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte6-collision-detection.html)
- [parte 7 - punteggio](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte7_punteggio.html)
