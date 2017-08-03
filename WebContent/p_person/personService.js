/**
 * 
 */
app.factory('personService', function($http) {
	console.log('starting personService')
	var BASE_URL = "http://localhost:8080/api"

	var personService = this;
	personService.listAllPersons = function() {
		console.log('entering getAllPerson')
		return $http.get(BASE_URL + "/persons").then(
				function(response) {
					return response.data
				}, function(errorResponse) {
					console.error('Error while getting all Persons')
					return errorResponse.data
				});
	};

	personService.createPerson = function(person) {
		console.log('entering addPerson')
		return $http.post(BASE_URL + "/addperson", person).then(
				function(response) {
					return response.data
				}, function(errorResponse) {
					console.error('Error while Creating Persons')
					return errorResponse.data
				});
	};

	personService.updatePerson = function(id, person) {
		console.log('entering update : ' + id)
		console.log('entering update  :' + person)
		console.log(BASE_URL + "/updateperson/", id, person)
		return $http.put(BASE_URL + "/updateperson/" + id, person).then(
				function(response) {
					return response.data
				}, function(errorResponse) {
					console.error('Error while Updating Persons')
					return errorResponse.data
				});
	};

	personService.deletePerson = function(id) {
		console.log('entering service delete')
		return $http['delete'](BASE_URL + "/deleteperson/" + id).then(
				function(response) {
					console.log(response.status)
					return response.data
				}, function(errorResponse) {
					console.log(errorResponse.status)
					return errorResponse.data
				})
	};


	personService.getPersonById = function(id) {
		return $http.get(BASE_URL + "/person/" + id).then(
				function(response) {
					console.log(response.status)
					return response.data
				}, function(errorResponse) {
					console.log(errorResponse.status)
					return errorResponse.data
				})
	};

	return personService;

})
	