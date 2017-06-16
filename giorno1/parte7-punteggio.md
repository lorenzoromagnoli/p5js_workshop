# Giorno 1 - Parte 7 - punteggio

Non ci resta adesso che andare a contare i punteggi

Creiamo una variabile nella quale salveremo il punteggio effettuato e aggiorniamola ogni volta succede uan collisione

```javascript

var punti;

function checkTarget(){
  var distanceX=targetPositionX-positionX;
  var distanceY=targetPositionY-positionY;

  if (abs(distanceX)<50 && abs(distanceY<50)){
    updateTarget();
    punti++; //punti=punti+1
  }
}
```
Come visualiziamo questo numero sullo schermo? costruiamo una funzione che si preoccupi di visualizzare il punteggio.

Utilizzeremo per questo la funzione `text()` vedi la reference [qui](https://p5js.org/reference/#/p5/text)
```javascript
function disegnaPunteggio(){
  textSize(32); //definisco la dimensione del testo
  text("SCORE: "+punteggio, 40, 40); //scrivo il punteggio in alto a sinistra
}
```

## combiniamo il codice

```javascript
var positionX;
var positionY;

var speedX=1;
var speedY=0;

var punti; //creo la variabile per il punteggio

//la logica base del gioco
void setup(){
 createCanvas(640,480);
 updateTarget(); /
}

void draw(){
  background(0);
  aggiornaPosizione();
  disegnaGino(positionX,positionY)
  checkTarget();
  drawTarget();
  disegnaPunteggio(); //disegniamo il punteggio sullo schermo
}


//tutte le mie funzioni
function disegnaGino(x,y){
  rect (x-50,y,-50, 100,100)
  ellipse (x-20,y,-20, 20,20)
  ellipse (x-70,y,-20, 20,20)
}

function checkTarget(){
  var distanceX=targetPositionX-positionX;
  var distanceY=targetPositionY-positionY;

  if (abs(distanceX)<50 && abs(distanceY<50)){
    updateTarget();
    punti ++; //aumento il punteggio
  }
}

function updateTarget(){
  targetPositionX=random(width);
  targetPositionY=random(height);
}

function drawTarget(){
  fill(255,0,0);
  ellipse(targetPositionX,targetPositionY, 20,20);
}

function aggiornaPosizione(){ //aggiorna le variabili con la posizione del mouse
  positionX+=speedX; //somma a positionX speedX => positionX=positionX+speedX
  positionY+=speedY
}
function disegnaPunteggio(){
  textSize(32); //definisco la dimensione del testo
  text("SCORE: "+punteggio, 40, 40); //scrivo il punteggio in alto a sinistra
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

[Quarda il codice dell'esercizio 7](https://github.com/lorenzoromagnoli/p5js_workshop/blob/master/giorno1/7_punteggio.js)

[Vedi il risultato dello sketch](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/7_punteggio)


### appunti del giorno 1:
- [configurare un local server](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/setup_atom-live-server.html)
- [parte 1 - setup ](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte1-setup.html)
- [parte 2 - primitive grafiche](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte2-primitive-grafiche.html)
- [parte 3 - interazione con mause](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte3-interazioni_col_mouse.html)[
- [parte 4 - funzioni](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte4-funzioni.html)
- [parte 5 - interazioni con tastiera](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte5-interazioni-con-tastiera.html)
- [parte 6 - collision detection](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte6-collision-detection.html)
- [parte 7 - punteggio](punteggio)
