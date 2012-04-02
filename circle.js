/*
	Funzione che disegna un cerchio a partire
	da un raggio e un numero n di intervalli
*/

var drawCircle = function (r,n){
	
	var domain = DOMAIN([[0,2*PI]])([n]);

	var mappingCircle = function (p) {
		var u = p[0];
		return [r*COS(u), r*SIN(u)];
	};
	
	var mapped = MAP(mappingCircle)(domain);
	DRAW(mapped);

};

/*
	Funzione che disegna un cerchio pieno a partire
	da un raggio e un numero n di intervalli
*/

var drawFullCircle = function (r,n){

	// TODO
	
};