# Giorno 1 - Parte 5 - interazioni con tastiera

## la tastiera
Come per il mouse, p5.js ci mette a disposizione anche delle funzioni per interfacciarci con la tastiera.

```javascript
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
     //fai qualcosa
  }

  if (key=='A'){
    /fai altro
  }
}
```
la funzione `keyPressed()`, richiamata fuori da setup() e draw() è invocata da p5 ogni volta che viene premuto un tasto sulla tastiera. Dentro alla funzione `keyPressed()` posso controllare quale tasto è stato premuto con il costrutto `if (key=='A'){}` per caratteri semplici o `if (keyCode === LEFT_ARROW)` per tasti speciali della tastiera.

### Muoviamo il nostro personaggio con la tastiera
vogliamo che il nostro personaggio (gino) si muova autonomamente ad ogni frame, e con la tastiera vogliamo controllare la direzione. Un po' come funzionava [snake](https://www.youtube.com/watch?v=wr9r2_jVrHk), ricordate?

Iniziamo a creare altre due variabili che definiscono la velocità del nostro personaggio. Come in fisica, la velocità deve essere aggiuta alla posizione del nostro oggetto ad ogni istante.

Ridefiniamo dunque la funzione aggiornaPosizione()

```javascript

var positionX;
var positionY;

var speedX=1;
var speedY=0;

function aggiornaPosizione(){ //aggiorna le variabili con la posizione del mouse
  positionX+=speedX; //somma a positionX speedX => positionX=positionX+speedX
  positionY+=speedY
}

```


integrando con la tastiera otteniamo
```javascript
var positionX;
var positionY;

var speedX=1;
var speedY=0;

void setup(){
 createCanvas(640,480);
}

void draw(){
  background(255);
  aggiornaPosizione();
  disegnaGino(positionX,positionY)
}

function disegnaGino(x,y){
  rect (x-50,y,-50, 100,100)
  ellipse (x-20,y,-20, 20,20)
  ellipse (x-70,y,-20, 20,20)
}

function aggiornaPosizione(){ //aggiorna le variabili con la posizione del mouse
  positionX+=speedX; //somma a positionX speedX => positionX=positionX+speedX
  positionY+=speedY
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
     speedX=-1;
     speedY=0;
  }else if(keyCode === RIGHT_ARROW){
     speedX=1;
     speedY=0;
  }else if(keyCode === UP_ARROW){
     speedX=0;
     speedY=-1;
  }else if(keyCode === DOWN_ARROW){
     speedX=0;
     speedY=1;
  }
}

```

[Quarda il codice dell'esercizio 5](https://github.com/lorenzoromagnoli/p5js_workshop/blob/master/giorno1/5_interazioni-con-tastiera/sketch.js)

[vedi il risultato dello sketch](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/5_interazioni-con-tastiera)

### appunti del giorno 1:
- [configurare un local server](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/setup_atom-live-server.html)
- [parte 1 - setup ](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte1-setup.html)
- [parte 2 - primitive grafiche](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte2-primitive-grafiche.html)
- [parte 3 - interazione con mause](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte3-interazioni_col_mouse.html)[
- [parte 4 - funzioni](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte4-funzioni.html)
- [parte 5 - interazioni con tastiera](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte5-interazioni-con-tastiera.html)
- [parte 6 - collision detection](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte6-collision-detection.html)
- [parte 7 - punteggio](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte7_punteggio.html)
