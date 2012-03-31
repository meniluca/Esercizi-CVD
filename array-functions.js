
/*
	Scrivere una funzione che prendendo un array come parametro
	filtra tutti i numeri pari e restituisce l'array
*/

var evenFilter = function (array) {

	function isEven(elem) {
		return elem%2==0;
	}

	return array.filter( isEven );

	// In una riga
	// return array.filter( function (elem) { return elem%2==0 } );
}

evenFilter([1,2,3,4,5,6,7,8,9,10]);

/*
	Riscrivere il prototipo degli arrai in modo tale da poter invocare la funzione in questo modo
	[1,2,3,4,5,6,7,8,9,10].evenFilter();
*/

Array.prototype.evenFilter = function() {
	return this.filter( function (elem) { return elem % 2 == 0 } );
};

[1,2,3,4,5,6,7,8,9,10].evenFilter();


/*
	Scrivere una funzione che filtri tutti i numeri positivi e ne restituisca la somma
*/

function sumAllPositive(array) {

	return array
			.filter( 
				function (elem){
					return elem > 0;
				}
			)
			.reduce(
				function (prev,curr){
					return prev+curr;
				}
			);

}

sumAllPositive([-1,2,-3,4,-5,6,-7,8,-9,10]);