/*

	BEZIER

	draw a bezier curve of degree 4 with following control points:

*/

var domain = INTERVALS(1)(30);

var controlpoints = [[0,0],[1,2],[3,2],[3,0],[5,-1],[6,1]];

var curveMapping = BEZIER(S0)(controlpoints);

var curve = MAP(curveMapping)(domain);

DRAW(curve);
