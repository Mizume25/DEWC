Objectius didàctics
Practicar arrays simples amb índexs paral·lels.
Utilitzar bucles for, while i do...while.
Aplicar condicionals if/else i switch.
Fer càlculs amb operadors aritmètics.
Mostrar resultats amb console.log o alert.
Enunciat
Volem crear un programa en JavaScript que ajudi un professor a gestionar les notes d’una petita classe d’alumnes. Treballarem amb arrays simples i instruccions seqüencials, condicionals i bucles.

Menú interactiu

Fes un while (o do...while) que mostri un menú amb opcions:

1) Veure notes
2) Classificació aprovat/suspès
3) Veure nota mitjana
4) Veure millor i pitjor nota
0) Sortir
Usa un switch per executar cada apartat.

El menú es repeteix fins que l’usuari escrigui 0.

Aquest menú és adient crear-lo amb prompt().

Flux del programa: cada vegada que s’iniciï el programa es demanaran les notes dels 5 alumnes i a continuació es podrà interactuar amb el menú. Com que de moment no desem les dades en cada execució s’hauran de demanar de nou.

Variables inicials

Declara un array amb els noms dels alumnes, per exemple:

let alumnes = ["Anna", "Jordi", "Marta", "Pau", "Laia"];
Declara un altre array amb les notes corresponents (valors numèrics entre 0 i 10). Demana-les a l’usuari amb prompt(). Decideix si demanes una nota per cadascun dels alumnes o si demanes totes les notes de cop amb un separador, per exemple ;.

Mostrar totes les notes

Recorre l’array amb un bucle for i mostra el nom de l’alumne i la seva nota amb alert (també es podria fer amb console.log però com que crearem un menú amb un prompt() les dades no es veurien fins al final de l’execució del programa).
Classificació aprovat/suspès

Amb un altre bucle, comprova per a cada alumne si té nota >= 5 o < 5 i mostra el resultat amb un missatge:

Anna → Aprovat
Jordi → Suspès
Nota mitjana de la classe

Calcula la mitjana sumant totes les notes i dividint pel nombre d’alumnes.
Mostra el resultat amb dos decimals (toFixed(2)).
Millor i pitjor nota

Recorre l’array i guarda en dues variables la nota més alta i la nota més baixa.
Mostra quin alumne les ha tret.
Avaluació
Criteri avaluat	Descripció	Puntuació màxima
1. Menú interactiu funcional	Mostra correctament el menú amb while i switch, permet escollir opcions i no es tanca fins escriure 0.	2 punts
2. Entrada de notes	Les notes dels alumnes es demanen correctament amb prompt() i s’emmagatzemen en un array. Es controla que siguin nombres vàlids.	1 punt
3. Mostrar totes les notes	Mostra correctament noms i notes amb un bucle for. S’utilitza alert() o console.log() adequadament.	1 punt
4. Classificació aprovat/suspès	Utilitza un bucle per classificar i mostrar correctament si cada alumne està aprovat o suspès.	1 punt
5. Càlcul de la mitjana	Calcula la mitjana de les notes de forma correcta i mostra el resultat amb dos decimals.	1 punt
6. Millor i pitjor nota	Detecta correctament la nota més alta i més baixa i mostra quin alumne les ha tret.	1 punt
7. Ús correcte d’estructures	Fa servir adequadament arrays, condicionals (if), bucles (for, while) i switch.	1 punt
8. Llegibilitat i estructura del codi	Codi ordenat, amb noms de variables clars i comentaris bàsics si cal.	1 punt
9. Absència d’errors greus	El programa funciona sense errors que trenquin l’execució.	1 punt
