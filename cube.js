/*
	Disegrare un cubo
*/

// Modello di un parallelepipedo con tutti i lati uguali
var cube = CUBOID([1,1,1]);

// Definizione di un dominio con tutti gli intervalli uguali
var cube = DOMAIN([[0,1],[0,1],[0,1]])([1,1,1]);

DRAW(cube);


/*
	Scrivere una funzione che dato un lato disegna un cubo
*/

function drawCube(side){
	var cube = CUBOID([1,1,1]);
	DRAW(cube);
	return cube;
}

drawCube(1);

/*
	Scrivere una funzione che dato un lato e un punto iniziale nello spazio
	disegna un cubo con un vertice basso in quel punto
*/

function drawCubeFromPoint(side, point){
	var cube = DOMAIN([[point[0],point[0]+side],[point[1],point[1]+side],[point[2],point[2]+side]])([1,1,1]);
	DRAW(cube);
	return cube;
}

drawCubeFromPoint(1,[2,1,3]);


/*
	Scrivere una funzione che alza un cubo in altezza di una lunghezza h 
*/

function liftupCube(cube,h){
	HIDE(cube);
	// [0] : dimensione x | [1] : y | [2] : z
	return DRAW(T([2])([h])(cube));
}

liftupCube(drawCube(1),3);
liftupCube(drawCubeFromPoint(1,[2,1,1]),3);


/*
	Scrivere una funzione che trasla il cubo in un punto determinato
*/

function translateCube(cube,point){
	//T(dims)(values)(model)
	HIDE(cube);
	return DRAW(T([0,1,2])([point[0],point[1],point[2]])(cube));
}

var cube = drawCube(1);
translateCube(cube, [2,2,2]);


/*
	Scrivere una funzione che cambi di scala le dimensioni di un cubo
*/

function changeScaleCube(cube,dims){
	HIDE(cube);
	return DRAW(S([0,1,2])([dims[0],dims[1],dims[2]])(cube));
}

var cube = drawCube(1);
changeScaleCube(cube,[-1,2,2])