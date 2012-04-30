/*
	build the roof of the labyrint using CUBOID
	extract the surface of the roof using BOUNDARY
	color the surface of the roof as a glass using COLOR
*/

var threeBuilding = POLYLINE([[0,0],[0,9],[3,9],[3,8],[1,8],[1,5],[3,5],[3,4],[1,4],[1,1],[3,1],[3,0],[0,0]]);

var secondThreeBuilding = T([0,1])([7,9])(R([0,1])(PI)(threeBuilding));

var building = STRUCT([threeBuilding , secondThreeBuilding]);

var extrudedBuilding = EXTRUDE([2])(building);

var coloredBuilding = COLOR([1,0.3,0.2,0.5])(extrudedBuilding);

DRAW(coloredBuilding);

var roof = CUBOID([7,9,0.2]);
var roof = T([2])([2])(roof);
var roof = BOUNDARY(roof);
var roof = COLOR([1,0.3,0.2,0.5])(roof);

DRAW(roof);