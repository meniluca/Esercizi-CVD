/*
	Funzione che disegna un cilindro a partire
	da un raggio e un numero n di intervalli
*/

var drawCylinder = function (r,h,n){

	var domain = DOMAIN([[0,2*PI],[0,h]])([n,1]);

	var mappingCylinder = function(p) {
		var u = p[0];
		var v = p[1];
		return [r*COS(u),r*SIN(u),v];
	}

	var mapped = MAP(mappingCylinder)(domain);

	DRAW(mapped)

	return mapped;
	
};

drawCylinder(2,3,100);


/*
	Funzione che disegna un cilindro pieno
*/

var drawFullCylinder = function (r,h,n){
	//TODO
};