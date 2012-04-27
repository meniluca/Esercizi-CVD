/*

	CUBIC_CARDINAL, SPLINE

	draw a cubic cardinal spline with following control points:

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

var domain = INTERVALS(1)(30);

var controlpoints = [[0,0],[3,2],[4,-1],[7,3],[9,0],[11,1],[12,0]];

var curve = SPLINE(CUBIC_CARDINAL(domain))(controlpoints);

DRAW(curve);

