/*
	Disegnare dei pilastri per riprodurre l'architettura dedicata a Mies
*/

var pillars = SIMPLEX_GRID([ 
	REPLICA(3) ( [0.15, -6*2.4, 0.15] ),
	[0.15, -6*2.4, 0.15],
	[1.5, 3, 3]
]);


var beams = SIMPLEX_GRID([
	REPLICA(3) ([0.15, -6*2.4, 0.15]),
	[14.7],
	[-7.5, 1.5]
]);

var floors = SIMPLEX_GRID([
	REPLICA(3) (14.7),
	[-0.15, 14.4, -0.15],
	[-1.2, 0.3, -2.7, 0.3, -2.7, 0.3],
]);

var cantileverPillars = SIMPLEX_GRID([
	[0.15],
	[0.15, -14.4, 0.15],
	[1.5, 3, 3]
]);

var cantileverBeams = SIMPLEX_GRID([
	[0.15],
	[14.7],
	[-7.5,1.5]
]);

var countileverFloors = SIMPLEX_GRID([
	[0.15, 2*2.4, 0.15],
	[-0.15, 14.4, -0.15],
	[-1.2, 0.3, -2.7, 0.3, -2.7, 0.3]
]);


var building = STRUCT([pillars,beams,floors,cantileverPillars,cantileverBeams,countileverFloors]);

DRAW(building);