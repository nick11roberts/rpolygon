var fillCanvas = function(
	canvas,
	color = '#000000',
	rows = 30,
	columns = 30,
	vertices = 3) {

	var NUM_ROW_POLYGONS = rows;
	var NUM_COLUMN_POLYGONS = columns;
	var NUM_VERTICES = vertices;

	// Create an empty project and a view for the canvas:
	paper.setup(canvas);

	// Must be odd so that there are no gaps on edge of the window
	var NUM_ROWS = (NUM_ROW_POLYGONS * 2) - 1;
	var NUM_COLUMNS = (NUM_COLUMN_POLYGONS * 2) - 1;
	var CELL_WIDTH = canvas.scrollWidth / (NUM_COLUMNS);
	var CELL_HEIGHT = canvas.scrollHeight / (NUM_ROWS);
	var rand = new Array(NUM_VERTICES);
	var paths = new Array(NUM_VERTICES)

	for(i = 0; i < NUM_COLUMNS; i+=2 ){
		for(j = 0; j < NUM_ROWS; j+=2 ){
			for( k = 0; k < NUM_VERTICES; k++ ){
				rand[k] = new paper.Point(
					(Math.random() * CELL_WIDTH) + (i * CELL_WIDTH),
					(Math.random() * CELL_HEIGHT) + (j * CELL_HEIGHT));
			}

			for( k = 0; k < NUM_VERTICES; k++ ){
				paths[k] = new paper.Path.Line(rand[k],
										 rand[(k + 1) % NUM_VERTICES]);
				paths[k].strokeColor = color;
			}
		}
	}

	}

	var randomFillCanvas = function(
	canvas,
	color = '#000000',
	rowsMin = 20,
	rowsMax = 40,
	columnsMin = 20,
	columnsMax = 40,
	verticesMin = 2,
	verticesMax = 5) {

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	if((rowsMin <= rowsMax) &&
		(columnsMin <= columnsMax) &&
		(verticesMin <= verticesMax)){
		fillCanvas(
			canvas,
			color,
			getRandomInt(rowsMin, rowsMax),
			getRandomInt(columnsMin, verticesMax),
			getRandomInt(verticesMin, verticesMax));
	}

}
