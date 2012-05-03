/*

	CUBIC_UBSPLINE, SPLINE

	Draw a cubic uniform b-spline with following control points:

	P(0): (-3,6)
	P(1): (-4,2)
	P(2): (-3,-1)
	P(3): (-1,1)
	P(4): (1.5,1.5)
	P(5): (3,4)
	P(6): (5,5)
	P(7): (7,2)
	P(8): (6,-2)
	P(9): (2,-3)

*/

// duplicare punto iniziale e punto finale.

var domain = INTERVALS(1)(50);

var controlpoints = [[-3,6],[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],
		[7,2],[6,-2],[2,-3],[2,-3]];

var drawControlPoints = SIMPLICIAL_COMPLEX(controlpoints)([[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11]]);

DRAW(drawControlPoints);

var curve = SPLINE(CUBIC_UBSPLINE(domain))(controlpoints);

var coloredCurve = COLOR([0.2,0.4,0.7,0.8])(curve);

DRAW(coloredCurve);