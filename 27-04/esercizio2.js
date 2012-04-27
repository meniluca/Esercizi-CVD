/*

	CUBIC_HERMITE

	draw a cubical hermite curve with the following control points:

	C(0):  (1,0)
	C(1):  (1,1)
	C'(0): (1,0)
	C'(1): (1,1)

*/

var domain = INTERVALS(1)(20);

var controlpoints = [[1,0],[1,1],[1,0],[1,1]];

var curveMapping = CUBIC_HERMITE(S0)(controlpoints);

var curve = MAP(curveMapping)(domain);