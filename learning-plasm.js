/*
	Per imparare a usare Plasm.js
	Aprire la console con chrome visitando la pagina:
	http://dia.uniroma3.it/~cvdlab/plasm.js
*/

// Definizione di un cubo
var cuboUnitario = CUBOID([1,1,1]);

// cuboUnitario è un oggetto model
cuboUnitario;

// Per disegnare un oggetto model
DRAW(cuboUnitario);

// Per nasconderlo
HIDE(cuboUnitario);

// Per colorarlo
DRAW(cuboUnitario);
COLOR([1,1,0])(cuboUnitario);