angular.module('myApp').factory('FilmFactory', FilmFactory)

function FilmFactory($http){
	return {
		getAllFilms,
		getOneFilm
	}
	function getAllFilms(){
		return $http.get('/filmsData')
		.then(complete)
		.catch(failed)
	}
	function getOneFilm(id){
		return $http.get('filmsData/' + id)
		.then(complete)
		.catch(failed)
	}
	function complete(response){
		return response.data
	}
	function failed(err){
		return err.statusText
	}
}