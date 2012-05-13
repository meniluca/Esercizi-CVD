// BISHOP

function POLYPOINT(points) {
	return SIMPLICIAL_COMPLEX(points)(
		points.map( function (p,i) {
			return [i];
		}
		));
}

// dominio rotazione
var domain = DOMAIN([[0,1],[0,2*PI]])([50,50]);

// base
var ctrlPoints = [[2.3,0,0],[2.3,0,0.4]];
var profile = BEZIER(S0)(ctrlPoints);
var mapping = ROTATIONAL_SURFACE(profile);
var base = MAP(mapping)(domain);

DRAW(base);

// part01
ctrlPoints = [[2.3,0,0.4],[2.1,0,0.6]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part01 = MAP(mapping)(domain);

DRAW(part01);

// part02
ctrlPoints = [[2.1,0,0.6],[2.7,0,1],[1.5,0,1.4],[1.5,0,2.4]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part02 = MAP(mapping)(domain);

DRAW(part02);

// part03
ctrlPoints = [[1.5,0,2.4],[1.3,0,2.6]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part03 = MAP(mapping)(domain);

DRAW(part03);

// part04
ctrlPoints = [[1.3,0,2.6],[0.9,0,3.5],[0.8,0,5.2]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part04 = MAP(mapping)(domain);

DRAW(part04);

// part05
ctrlPoints = [[0.8,0,5.2],[1.5,0,5.2],[1.5,0,5.2],[1.7,0,6],[1.1,0,6]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part05 = MAP(mapping)(domain);

DRAW(part05);

// part06
ctrlPoints = [[1.1,0,6],[1.1,0,6.25],[1.1,0,6.25],[0.9,0,6.4],[0.6,0,6.4],[1.35,0,6.4],[1,0,6.7]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part06 = MAP(mapping)(domain);

DRAW(part06);

//DRAW(POLYPOINT(ctrlPoints));
//DRAW(POLYLINE(ctrlPoints));
//DRAW(POLYLINE([[1.1,0,6],[1.1,0,6.7]]));
/*
var domain1 = INTERVALS(1)(30);
var c2 = BEZIER(S0)(ctrlPoints);
var wing = MAP(c2)(domain1);
DRAW(wing); 
*/