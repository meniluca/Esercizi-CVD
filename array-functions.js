
/*
	Scrivere una funzione che prendendo un array come parametro
	filtra tutti i numeri pari e restituisce l'array
*/

var evenFilter = function (array) {

	function isEven(elem) {
		return elem % 2 == 0;
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
					return prev + curr;
				}
			);

}

sumAllPositive([-1,2,-3,4,-5,6,-7,8,-9,10]);


/*
	Scrivere una funzione chiamata apply
	questa funzione prende come parametro una coppia di funzioni
	e restituiesce il valore della seconda applicata alla prima
	return f(g())
*/

var apply = function (pair) {
	if (typeof pair[0] == "undefined")
		return pair[1];
	if (typeof pair[1] == "undefined")
		return pair[0];
	return pair[0](pair[1]);
}

function funzioneA(fun) {
	if (typeof fun == "undefined")
		return "Questa è la funzione A";
	return "Questa è la funzione A che chiama la prossima funzione: " + fun;
}

function funzioneB(fun) {
	if (typeof fun == "undefined")
		return "Questa è la funzione B";
	return "Questa è la funzione B che chiama la prossima funzione: " + fun;
}

apply([funzioneA,funzioneB()]);
apply([funzioneB,funzioneA()]);
apply([funzioneA()]);
apply([,funzioneB()]);


/*
	Scrivere una funzione applyAll che prende come parametro una funzione f
	e un array di funzioni g e ritorni un array contenente i risultati della funzione g[i] applicati a f
	return [f(g[0],f(g[1]),...]
*/

var applyAll = function (fun, array){
	return array.map( function (curr) { return apply([fun,curr]) } );
}

applyAll(Math.cos,[Math.cos(1),Math.sin(1),Math.cos(2),Math.sin(2),Math.cos(3),Math.sin(3)])


/*
	Scrivere una funzione che preso come parametro una funzione 'fun'
	restituisca una funzione che preso un array come parametro applica 'fun' a tutti gli elementi dell'array
	applyAll2(g)(array) => return [g(array[0]),g(array[1]),g(array[2]),....]
*/

var applyAll2 = function(fun) {
	return function (array) {
		return array.map(
			function (elem) {
				return fun(elem);
			}
		);
	};
}

applyAll2(Math.cos)([Math.PI,0,1,Math.P1/2]);


/*
	Scrivere una funzione che presa una coppia di funzioni riporti la funzione composta
	return function f(g(elem))
*/

var apply2 = function (pair) {
	return function (elem) {
		return pair[0](pair[1](elem));
	};
}

// sincos = function sin(cos(x))
// sincos(1) => sin(cos(1))
var sincos = apply2([Math.sin,Math.cos]);
sincos;
sincos(1);


/*
	Scrivere una punzione che prende come input un array di funzioni e restituisce la funzione composta
	da tutte le funzioni dell'array
	applyN([sin,cos,tan]) => function sin(cos(tan()))
*/

var applyN = function (array) {
	return array.reduceRight(
		function (prev,curr) {
			return function (elem) {
				return curr(prev(elem));
			}
		}
	);
}

var sinCosTan = applyN([Math.sin,Math.cos,Math.tan]);
sinCosTan;
sinCosTan(1);


/*
	Scrivere una funzione chiamata cons
	che prende come parametro un valore 'x' restituisce una funzione che prende un array di funzioni
	e applica a ogni funzione dell'array 'x' restituendo i risultati con un array
	E' la simmetrica rispetto ad applyAll2
	cons(val)(arrayFun) => return [arrayFun[0](val),arrayFun[1](val),...]
*/

var cons = function (val) {
	return function (array) {
		return array.map(
			function (elem) {
				return elem(val);
			}
		);
	};
}

cons(1)([Math.sin,Math.cos,Math.tan]);

/*
	Scrivere la funzione distributeLeft
	funzione che prende una coppia di elementi
	e applica il primo elemento a ogni elemento del del secondo elemento
*/

//TODO