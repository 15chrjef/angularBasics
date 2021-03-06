angular.module('myApp')
.controller('FilmController', FilmController)

function FilmController(FilmFactory, $routeParams){
	var vm = this;
	var id = $routeParams.id;
	FilmFactory.getOneFilm(id)
	.then(response => {
		vm.film = response
	})
}