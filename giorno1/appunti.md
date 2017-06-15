# Appunti giorno 1
## 1a_Cosa è p5.js?
### Il browser
Quello che usi per andare su facebook. Nel dubbio usa [Chrome](https://www.google.com/chrome/browser/desktop/index.html?brand=CHBD&gclid=CjwKCAjw4IjKBRBrEiwAvnqkbZ6jCm1Ov575lIe20Uq7E7g-q94FqNN6DEiEOGVVnGcqu9GBxGRzDxoCIp8QAvD_BwE)

#### HTML CSS Javascript
**Con l'html ci fai le pagine web, con CSS le rendi carine e con javascript le rendi dinamiche.
**

... se vuoi capirne dipiù dai un'occhiata [quì](https://www.youtube.com/watch?v=URSH0QpxKo8&t=12s)


#### Il canvas
> The HTML `<canvas>` element is used to draw graphics, on the fly, via scripting (usually JavaScript).
>
> The `<canvas>` element is only a container for graphics. You must use a script to actually draw the graphics.
>
> Canvas has several methods for drawing paths, boxes, circles, text, and adding images.


#### p5.js
  [p5.js](https://p5js.org/) è una libreria javasctipt ispirata a processing con la quale possiamo disegnare nel canvas.

## dove iniziare?
- **opzione 1:**
fatti un giro sull'[editor online](https://alpha.editor.p5js.org/)

- **opzione 2:**
Scarica la libreria [qui](https://p5js.org/download/) e aggiungila al tuo progetto come faresti con jquery

- **opzione 3:**
Duplica la cartella empty-example e setta un webserver locale

#### Il webserver
> Il server serve i file al browser

Sebbene il browser si occupa di leggere e eseguire i comandi in javascript, abbiamo bisogno di configurare un server che si preoccupi di soddisfare le richieste di un browser.
Una volta che pubblicheremo il codice online sarà il server "remoto" a fornire i file al browser. Ma in locale (per testare le cose sul nostro computer) abbiamo bisogno di configurare un webserver locale.

Se avete già apache, ngnix o altro, benissimo!!! spostate la cartella del progetto dentro alla cartella del webserver

Per chi non vuole diventare uno sviluppatore professionista ed è interessato solo a giocare con p5 consiglio di scaricare [Atom](https://atom.io/) e munirsi del plugin [Atom Live Server](https://atom.io/packages/atom-live-server)
puoi seguire gli [steps di configurazione](https://lorenzoromagnoli.github.io/p5js_workshop/giorno1/setup_atom-live-server.html).

## Il nostro primo progetto
- Apri atom ed aggiungi all'albero l'intera cartella copiata da "p5js_workshop/giorno1/empty-example"
- Verifica che il webserver stia funzionando in locale navigando a [http://127.0.0.1:3000](http://127.0.0.1:3000)
- Se vedete un rettangolo grigio sta funzionando tutto! yeah!!!






- 1b_ Come si inizia un progetto?
  - Scarichiamo il template base
  - Avviare un server locale
  - testare il canvas
- 1c_ Iniziamo a disegnare
  - Le primitive base (costruiamo il primo personaggio)
  - le variabili
- 1d_ Animiamo lo sketch
  - setup() e draw()
  - il mouse
  - le funzioni
  - gli eventi della tastiera
- 1e_ dinamica di gioco
  - collision detection
  - i punteggi
- 1f_ moltiplichiamo i nostri personaggi
  - Gli oggetti
- **assignment:**
  - personalizza il gioco e cambia la dinamica
  - prepara delle sprite per il tuo personaggio (lo useremo nella prossima lezione)
