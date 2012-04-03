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

var drawFullCylinder = function (r,h,n,m,h){

	var asseY = r;
	var asseZ = h;

	// definizione dominio
	var domain = SIMPLEX_GRID([ REPEAT(n)(2*PI/n), REPEAT(m)(asseY/m), REPEAT(h)(asseZ/h) ]);

	var mapping = function(point) {
		var x = point[0];
		var y = point[1];
		var z = point[2];

		return [y*SIN(x), y*COS(x), z];
	}

	var mapped = MAP(mapping)(domain);

	DRAW(mapped);
	return mapped;

};