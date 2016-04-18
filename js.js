$(document).ready(function() {


	createGrid();

	$("#clear-btn").click(function() {
		clear();
	});

	$("#new-btn").click(function() {
		createGrid();
	});
});

function createGrid() {

	$("#grid").empty();

	var width = $("#grid").width();
	var gridSize;

	do {
		gridSize = prompt("Enter a desired grid size between 1 and 64 inclusive.");
	} while (gridSize < 1 || gridSize > 64 || isNaN(gridSize))

	alert("Great. Creating a " + gridSize + "x" + gridSize + " grid.");
	var divpixels = width / gridSize;

	for (var i = 0; i < gridSize*gridSize; i++)
		$("#grid").append("<div class=\"square\"></div>");

	$(".square").css("height", divpixels).css("width", divpixels);

	var opacity = 0;

	$(".square").mouseenter(function() {

		var mode = $("#color-select").val();

		if (mode === "Black")
		{
			$(this).css("background-color", "black");
		}
		else if (mode === "Gradient")
		{
			opacity = Math.round(opacity*10)/10;
			if (opacity < 1)
				opacity += .1;
			else if (opacity >= 1)
				opacity = .1;
			console.log(opacity);
			$(this).css("background-color", "rgba(0,0,0," + opacity + ")");
		}
		else if (mode === "Random")
		{
			var red = Math.floor(Math.random() * 256);
			var green = Math.floor(Math.random() * 256);
			var blue = Math.floor(Math.random() * 256);
			$(this).css("background-color", "rgb(" + red + "," + green +"," + blue +")");
		}

	});
}

function clear() {
	$(".square").css("background-color", "");
}