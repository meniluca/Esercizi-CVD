/*
	La funzione DOMAIN crea un dominio riportando una funzione che prende
	come input un array di intervalli e riporta una funzione che richiede
	un array con quante divisioni ci sono per ogni intervallo
*/

// Dominio unidimensionale
var domain1 = DOMAIN([[1.5,5.5]])([4])
DRAW(domain1);
HIDE(domain1);

// Dominio bidimensionale
var domain2 = DOMAIN([[1.5,5.5],[1,3]])([4,2]) 
DRAW(domain2);
HIDE(domain2);

// Dominio tridimensionale
var domain3 = DOMAIN([[1.5,5.5],[1,3],[0,1]])([4,2,1])
DRAW(domain3);
HIDE(domain3);