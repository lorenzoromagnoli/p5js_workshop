# Giorno 1 - Parte 6 - collision detection
Come avrete capito vogliamo costruire una specie di snake, nell'esercizio precedente abbiamo capito come muovere il nostro personaggio, adesso dobbiamo capire come generare degli oggetti da raccogliere, e verificare che la posizione del nostro personaggio sia "sopra" all'oggetto.

## generiamo dei target da raccogliere
Creiamo due variabili per salvare la posizione dell'oggetto, una funzione per aggiornare la posizione e una funzione per disegnare il target sullo schermo

```javascript

var targetPositionX;
var targetPositionY;

//ogni volta che chiamo la funzione updateTarget() assegno una nuova posizione randomica al target.
//la funzione random genera numeri interi compresi tra zero e il parametro in ingresso
//nel mio caso il valore massimo che voglio per targetPositionX è width, ovvero la larghezza dello schermo
//lo stesso vale per targetPositionY, non voglio che il target finisca fuori dallo schermo
function updateTarget(){
  targetPositionX=random(width);
  targetPositionY=random(height);
}

function drawTarget(){
  fill(255,0,0);
  ellipse(targetPositionX,targetPositionY, 20,20);
}
```
## Collisioni
 Verifichiamo che il nostro personaggio incontri l'oggetto con una funzione che misura la distanza tra il personaggioe e il target. Nel caso la distanza è minore di 50 aggiorniamo la posizione del target.

```javascript
function checkTarget(){
  var distanceX=targetPositionX-positionX;
  var distanceY=targetPositionY-positionY;

  if (abs(distanceX)<50 && abs(distanceY<50)){ //la distanza tra i due oggetti può essere anche negativa uso abs() per ottenere il valore assoluto
    updateTarget();
  }
}
```

## combiniamo il codice

```javascript
var positionX;
var positionY;

var speedX=1;
var speedY=0;

//la logica base del gioco
void setup(){
 createCanvas(640,480);
 updateTarget(); //all'inizio del gioco genero una posizione randomica per i target
}

void draw(){
  background(0);
  aggiornaPosizione();
  disegnaGino(positionX,positionY)
  checkTarget(); //controllo che non ci sia stata collisione e nel caso cambio la posixione del target
  drawTarget(); //disegno il target sullo schermo
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

  if (abs(distanceX)<50 && abs(distanceY<50)){ //la distanza tra i due oggetti può essere anche negativa uso abs() per ottenere il valore assoluto
    updateTarget();
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

[Quarda il codice dell'esercizio 6](https://github.com/lorenzoromagnoli/p5js_workshop/blob/master/giorno1/6_collision-detection/sketch.js)

[Vedi il risultato dello sketch](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/6_collision-detection)

### appunti del giorno 1:
- [configurare un local server](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/setup_atom-live-server.html)
- [parte 1 - setup ](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte1-setup.html)
- [parte 2 - primitive grafiche](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte2-primitive-grafiche.html)
- [parte 3 - interazione con mause](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte3-interazioni_col_mouse.html)[
- [parte 4 - funzioni](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte4-funzioni.html)
- [parte 5 - interazioni con tastiera](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte5-interazioni-con-tastiera.html)
- [parte 6 - collision detection](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte6-collision-detection.html)
- [parte 7 - punteggio](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte7_punteggio.html)
