angular.module('myApp')
.controller('MainController', MainController)

function MainController($http, FilmFactory){
	var vm = this;
	FilmFactory.getAllFilms()
	.then(films => {
		vm.films = films
	})
	vm.name = "Jeff"

	vm.date1 = '12 February 2016'
	vm.date2 = '11 March 2016'
	vm.date3 = '03 January 2016'
	vm.date4 = '25 April 2016'

}