/*
	
	Each curves has its function.
	Each function can draw the respective curve, and optionally
	its control points and a polyline join them

*/

var PARTS;
var SELECTOR;

function drawCubicHermite(controlPoints, color, drawPolyline, drawControlPoints) {

	var color = color || [0,0,0,1];
	
	var selector = this.SELECTOR || S0;
	var parts = this.PARTS || 10;

	var domain = INTERVALS(1)(parts);

	var curve = MAP(CUBIC_HERMITE(selector)(controlPoints))(domain);
	var curve = COLOR(color)(curve);

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


function drawBezier(controlPoints, color, drawPolyline, drawControlPoints) {

	var color = color || [0,0,0,1];
	
	var selector = this.SELECTOR || S0;
	var parts = this.PARTS || 10;

	var domain = INTERVALS(1)(parts);

	var curve = MAP(BEZIER(selector)(controlPoints))(domain);
	var curve = COLOR(color)(curve);

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


function drawCubicalCardinalSpline(controlPoints, parts, color, selector) {

	var parts = parts || 10;
	var color = color || [0,0,0,1];
	var selector = selector || S0;

	var domain = INTERVALS(1)(parts);

	var points = getModelControlPoints(controlPoints);
	var polyline = POLYLINE(controlPoints);

	var firstElem = controlPoints.shift();
	var lastElem = controlPoints.pop();
	controlPoints.unshift(firstElem,firstElem);
	controlPoints.push(lastElem,lastElem);

	var curve = SPLINE(CUBIC_CARDINAL(domain))(controlPoints);
	var curve = COLOR(color)(curve);

	var struct = STRUCT([curve, points, polyline]);

	return DRAW(struct);

}

function drawCubicalUbspline(controlPoints, parts, color, selector) {

	var parts = parts || 10;
	var color = color || [0,0,0,1];
	var selector = selector || S0;

	var domain = INTERVALS(1)(parts);

	var points = getModelControlPoints(controlPoints);
	var polyline = POLYLINE(controlPoints);

	var firstElem = controlPoints.shift();
	var lastElem = controlPoints.pop();
	controlPoints.unshift(firstElem,firstElem);
	controlPoints.push(lastElem,lastElem);

	console.log(controlPoints);
	
	var curve = SPLINE(CUBIC_UBSPLINE(domain))(controlPoints);
	var curve = COLOR(color)(curve);

	var struct = STRUCT([curve, points, polyline]);

	return DRAW(struct);

}

function getModelControlPoints(controlPoints) {

	var cells = [];

	for (var i = 0; i < controlPoints.length; i++) {
		cells.push([i]);
	}
	
	return SIMPLICIAL_COMPLEX(controlPoints)(cells);

}

