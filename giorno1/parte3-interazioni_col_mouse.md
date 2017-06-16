# Giorno 1 - Parte 3 - interazioni con il mouse

## mouseX e mouseY

Vogliamo che il personaggio che abbiamo disegnato segui la posizione del mouse.
p5.js così come progessing ci mette a disposizione due variabili che possiamo usare per conoscere la posizione del mouse. mouseX e mouseY.

Possiamo dunque modificare il codice dello sketch.js per disegnare il nostro oggetto non più nella posizione fissata al centro dello schermo (width/2, height/2), ma in posizione (mouseX, mouseY)

```javascript

function setup() {
  createCanvas(400, 300);
}

function draw() {
background(153);

strokeWeight(4);

fill(200,200,0);
rect(mouseX-50, mouseY-50, 100, 100);

fill (255);
ellipse(mouseX-50+25, mouseY-50+30, 20, 20)
ellipse(mouseX-50+70, mouseY-50+30, 30, 30)

stroke(0);
line(mouseX-30, mouseY+30, mouseX+30, mouseY+30)

noStroke();
rect(mouseX-30, mouseY+18, 10, 10);
rect(mouseX+20, mouseY+18, 10, 10);

push();
stroke(0);
translate(mouseX-60,mouseY-60);
fill(255,100,30);
triangle(0, 0, 0, 60, 60, 0);
pop();

}
```

Possiamo anche monitorare se il bottone del mouse è premuto oppure no con la variabile mouseIsPressed

```javascript
if (mouseIsPressed) {
    //fai una cosa
  } else {
    //fai qualcos'altro
  }
```

puoi vedere il risultato dello sketch [qui](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/3_interazioni-con-il-mouse)


### appunti del giorno 1:
- [configurare un local server](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/setup_atom-live-server.html)
- [parte 1 - setup ](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte1-setup.html)
- [parte 2 - primitive grafiche](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte2-primitive-grafiche.html)
- [parte 3 - interazione con mause](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte3-interazioni_col_mouse.html)[
- [parte 4 - funzioni](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte4-funzioni.html)
- [parte 5 - interazioni con tastiera](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte5-interazioni-con-tastiera.html)
- [parte 6 - collision detection](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/parte6-collision-detection.html)
- [parte 7 - punteggio](punteggio)
