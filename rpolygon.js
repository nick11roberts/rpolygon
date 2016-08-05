/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */
module.exports = {

	fillCanvas: function(document, color) {

		var paper = require('node_modules/paper');

		var NUM_ROW_POLYGONS = getRandomInt(20, 40);
      var NUM_COLUMN_POLYGONS = getRandomInt(20, 40);
      var NUM_VERTICES = getRandomInt(2, 5);

      // Get a reference to the canvas object
		var canvas = document.getElementById('rpolygonCanvas');

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
            	paths[k].strokeColor = '#adeba8';
            }
         }
      }

   }

	// Only executed our code once the DOM is ready.
	window.onload = function() {



	}

	},

};
