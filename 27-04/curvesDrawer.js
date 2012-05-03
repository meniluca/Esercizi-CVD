/*
	###############
	curvesDrawer.js
	###############

	Draws curves. Each curve has its function.
	Each function can draw the respective curve, and optionally
	its control points and a polyline join them

*/

/*
	PARTS: number used to divide the segment which join curve's points
	SELECTOR: domain coordinate selector function
*/
var PARTS;
var SELECTOR;

/*
	FUNCTION: drawCubicHermite
	Draw a cubic hermite curve, takes an array of control points which first two elements are points
	and second two are vectors.

	USAGE:
	drawCubicHermite([[0,0],[3,1],[1,1],[1,2]]); //draws a black cubic hermite curve
	drawCubicHermite([[0,0],[3,1],[1,1],[1,2]], [0,0,0,1]); //same as before
	drawCubicHermite([[0,0],[3,1],[1,1],[1,2]], [1,0,0,1], yes); //draws a red curve with polyline
	drawCubicHermite([[0,0],[3,1],[1,1],[1,2]], [1,0,0,1], no, yes); //draws a red curve with control points
	drawCubicHermite([[0,0],[3,1],[1,1],[1,2]], [1,0,0,1], yes, yes); //draws a red curve with polyline and control points

*/
function drawCubicHermiteCurve(controlPoints, color, drawPolyline, drawControlPoints) {

	var color = color || [0,0,0,1];
	
	var selector = this.SELECTOR || S0;
	var parts = this.PARTS || 10;

	var curve = MAP(CUBIC_HERMITE(selector)(controlPoints))(INTERVALS(1)(parts));
	curve = COLOR(color)(curve);

	if ( drawControlPoints === "yes" ) {
		var points = getModelControlPoints([controlPoints[0],controlPoints[1]]);
		curve = STRUCT([curve, points]);
	}

	if ( drawPolyline === "yes" ) {
		var polyline = POLYLINE([controlPoints[0],controlPoints[1]]);
		curve = STRUCT([curve, polyline]);
	}

	return DRAW(curve);

}


/*
	FUNCTION: drawBezierCurve
	Draw a Bezier curve, takes an array of control points.

	USAGE:
	drawBezierCurve([[0,0],[3,1],[1,1],[1,2]]); //draws a black cubic hermite curve
	drawBezierCurve([[0,0],[3,1],[1,1],[1,2]], [0,0,0,1]); //same as before
	drawBezierCurve([[0,0],[3,1],[1,1],[1,2]], [1,0,0,1], yes); //draws a red curve with polyline
	drawBezierCurve([[0,0],[3,1],[1,1],[1,2]], [1,0,0,1], no, yes); //draws a red curve with control points
	drawBezierCurve([[0,0],[3,1],[1,1],[1,2]], [1,0,0,1], yes, yes); //draws a red curve with polyline and control points

*/
function drawBezierCurve(controlPoints, color, drawPolyline, drawControlPoints) {

	var color = color || [0,0,0,1];
	
	var selector = this.SELECTOR || S0;
	var parts = this.PARTS || 10;

	var curve = MAP(BEZIER(selector)(controlPoints))(INTERVALS(1)(parts));
	curve = COLOR(color)(curve);

	if ( drawControlPoints === "yes" ) {
		var points = getModelControlPoints(controlPoints);
		curve = STRUCT([curve, points]);
	}

	if ( drawPolyline === "yes" ) {
		var polyline = POLYLINE(controlPoints);
		curve = STRUCT([curve, polyline]);
	}

	return DRAW(curve);

}


function drawCubicalCardinalCurve(controlPoints, color, drawPolyline, drawControlPoints) {

	var color = color || [0,0,0,1];
	
	var selector = this.SELECTOR || S0;
	var parts = this.PARTS || 10;

	var struct =STRUCT([]);

	if ( drawControlPoints === "yes" ) {
		var points = getModelControlPoints(controlPoints);
		struct = STRUCT([points]);
	}

	if ( drawPolyline === "yes" ) {
		var polyline = POLYLINE(controlPoints);
		struct = STRUCT([struct, polyline]);
	}

	var firstElem = controlPoints.shift();
	var lastElem = controlPoints.pop();
	controlPoints.unshift(firstElem,firstElem);
	controlPoints.push(lastElem,lastElem);

	var curve = SPLINE(CUBIC_CARDINAL(INTERVALS(1)(parts)))(controlPoints);
	curve = COLOR(color)(curve);

	struct = STRUCT([curve, struct]);

	return DRAW(struct);

}


function drawCubicalUbsplineCurve(controlPoints, color, drawPolyline, drawControlPoints) {

	var color = color || [0,0,0,1];
	
	var selector = this.SELECTOR || S0;
	var parts = this.PARTS || 10;

	var struct =STRUCT([]);

	if ( drawControlPoints === "yes" ) {
		var points = getModelControlPoints(controlPoints);
		struct = STRUCT([points]);
	}

	if ( drawPolyline === "yes" ) {
		var polyline = POLYLINE(controlPoints);
		struct = STRUCT([struct, polyline]);
	}

	var firstElem = controlPoints.shift();
	var lastElem = controlPoints.pop();
	controlPoints.unshift(firstElem,firstElem);
	controlPoints.push(lastElem,lastElem);
	
	var curve = SPLINE(CUBIC_UBSPLINE(INTERVALS(1)(parts)))(controlPoints);
	curve = COLOR(color)(curve);

	struct = STRUCT([curve, struct]);

	return DRAW(struct);

}


function getModelControlPoints(controlPoints) {

	var cells = [];

	for (var i = 0; i < controlPoints.length; i++) {
		cells.push([i]);
	}
	
	return SIMPLICIAL_COMPLEX(controlPoints)(cells);

}

