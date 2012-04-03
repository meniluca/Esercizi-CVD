/*
	Per imparare a usare simplicial_complex e simplex_grid.

	In matematica e in topologia un complesso simpliciale è un'aggregazione ordinata di simplessi,
	ossia un'unione di un certo numero di simplessi che si intersecano fra loro solo su facce comuni.

	Un complesso simpliciale definisce quindi uno spazio topologico.
	Lo stesso spazio topologico è descritto da molti complessi simpliciali differenti,
	e ciascuno di questi è detto una triangolazione dello spazio.
	Questa descrizione combinatoria permette un calcolo agevole di molte proprietà dello spazio.

	Un politopo è insieme di punti convessi e limitati (definizione Paoluzzi).
	Un politopo d-dimensionale o d-politopo è l'analogo di un poligono nel piano (d=2)
	e di un poliedro nello spazio usuale (d=3) generalizzato ad uno spazio euclideo reale.
	
	In matematica, il simplesso n-dimensionale è il politopo n-dimensionale col minor numero di vertici.
	Il simplesso di dimensione zero è un singolo punto, il simplesso bidimensionale un triangolo e
	quello tridimensionale un tetraedro. Il simplesso n-dimensionale ha n + 1 vertici.

*/

/*
	SIMPLEX_GRID(quotes)
	Crea una grigli di complessi simpliciali
	quotes è un array di array per ogni dimensione. Ogni dimensione ha un array con valori positivi e negativi.
	Valori negativi sono degli spazi vuoti.
*/

var model = SIMPLEX_GRID([[1,-1,1]]);
DRAW(model);
HIDE(model);

var model = SIMPLEX_GRID([[2,-1,2],[2,-1,2,-1,2]]);
DRAW(model);
HIDE(model);

var model = SIMPLEX_GRID([[2,-1,2],[2],[-1,1]]);
DRAW(model);
HIDE(model);


/*
	Uso di REPLICA e REPEAT
	REPLICA(times)(elems)
	REPEAT(times)(elems)
*/

REPLICA(3)(1);				// [1,1,1]
REPLICA(3)([1,2]);			// [1,2,1,2,1,2]
REPLICA(2)([1,2],[1]);	 	// [1,2,1,2]
REPLICA(2)([[2,3,4]]); 		// [ [2,3,4], [2,3,4] ]
REPLICA(2)([[[2,3]]]);		// [ [[2,3]], [[2,3]] ]
REPLICA(2)([[5,6],[7,8]]); 	// [ [5,6],[7,8],[5,6],[7,8] ]

REPEAT(3)(1);				// [1,1,1]
REPEAT(3)([1,2]);			// [ [1,2],[1,2],[1,2] ]
REPEAT(2)([1,2],[1]);	 	// [ [1,2],[1,2] ]
REPEAT(2)([[2,3,4]]); 		// [ [[2,3,4]], [[2,3,4]] ]
REPEAT(2)([[[2,3]]]);		// [ [[[2,3]]], [[[2,3]]] ]
REPEAT(2)([[5,6],[7,8]]);	// [ [[5,6],[7,8]], [[5,6],[7,8]] ]


/*
	Primitiva STRUCT:
	STRUCT(items)
	Structure together plasm.Model and plasm.Struct.
	If a transformation is encountered in items, it is applied to all of the following items.
*/

var cube1 = CUBOID([1,1,1])
var cube2 = SIMPLEX_GRID([[-0.5,2],[-0.5,2],[2]])

DRAW(cube1);
DRAW(cube2);
HIDE(cube1);
HIDE(cube2);

var biCube = STRUCT([cube1,cube2]);
DRAW(biCube);
HIDE(biCube);


/*
	Traslazioni e cambiamenti di scala
*/

var cube1 = CUBE(3);
var cube2 = T([0])([1.3])(cube1);
var struct1 = STRUCT([cube1, cube2]);
var t = T([1])([1.3]);
var struct = STRUCT([struct1, t, struct1, t, cube1]); // != STRUCT([struct1, t(struct1), t(cube1) ]);
DRAW(struct);


// Altro esempio
var cube1 = CUBE(3);
var cube2 = T([2])([1.5])(cube1);
var struct1 = STRUCT([cube1, cube2]);
DRAW(struct1);
HIDE(struct1);
var translate = T([1])([2]);
var struct = STRUCT([struct1, translate, struct1, translate, struct1, translate, CUBE(3), SIMPLEX_GRID([[1],[1],[-3,1]])]);
DRAW(struct);
HIDE(struct);
// è diverso da...
var struct = STRUCT([struct1, translate(struct1), translate(struct1), translate(CUBE(3)), SIMPLEX_GRID([[1],[1],[-3,1]])]);
DRAW(struct);
HIDE(struct);
// ... che è uguale a:
var struct = STRUCT([struct1, translate(struct1), SIMPLEX_GRID([[1],[1],[-3,1]])]);
DRAW(struct);
HIDE(struct);