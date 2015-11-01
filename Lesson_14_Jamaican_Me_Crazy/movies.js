function createList(){
	var s;
	s = "<ul>"
		+ "<li>Total Recall</li>"
		+ "<li>Lord of the Rings</li>"
		+ "<li>Kill Bill</li>"
		+ "</ul>";
	divMovies = document.getElementById("divMovies");
	divMovies.innerHTML = s;
}