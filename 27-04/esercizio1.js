var threeBuilding = POLYLINE([[0,0],[0,9],[3,9],[3,8],[1,8],[1,5],[3,5],[3,4],[1,4],[1,1],[3,1],[3,0],[0,0]]);

var secondThreeBuilding = T([0,1])([7,9])(R([0,1])(PI)(threeBuilding));


//DRAW(threeBuilding);

//DRAW(secondThreeBuilding);

var building = STRUCT([[threeBuilding],[secondThreeBuilding]]);

