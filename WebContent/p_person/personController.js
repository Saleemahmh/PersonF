/**
 * 
 */
app.controller('personController', function($scope,$rootScope, personService, $location) {
	console.log('entering person controller')

	$rootScope.person = {
		id : '',
		name : '',
		age : '',
		city : ''	
	};

	$scope.persons;

	function listAllPersons() {
		console.log('entering fetchAll persons in controller')
		personService.listAllPersons().then(function(data) {
			$scope.persons = data;
		}, function(error) {
			console.log('Error : ' + error)
		});
	}
	;
	listAllPersons();

	$scope.createPerson = function(person) {
		console.log('create Student...')
		personService.createPerson(person).then(listAllPersons(),
				function(errResponse) {
					console.error('Error while Creating Student')
				});
	};

	$scope.updatePerson = function(id) {
		console.log('entering  updatePerson in controller' + id)
		personService.updatePerson(id, $rootScope.person).then(listAllPersons(),
				function(errResponse) {
					console.error('Error while updating : ' + errResponse)
				});
	};

/*	$scope.updatePerson = function() {
		
			console.log('updating', $scope.person.id)
			$scope.updatePerson($scope.person.id,$scope.person);
		
	}*/

	$scope.submit = function() {
		{
			console.log('saving Person' + $rootScope.person)
			$scope.createPerson($rootScope.person);
		}
		$scope.reset();
		$location.path("/add")
	};

	$scope.deletePerson = function(id) {
		console.log('entering deletePerson in controller id : ' + id)
		personService.deletePerson(id).then(function() {
			console.log('Deleted Successfully')
			listAllPersons();

		}, function() {
			console.log('Unable to delete')
		})
	};


	$scope.reset = function() {
		$rootScope.person = {
				id : 0,
				name : '',
				age : 0,
				city : ''
		};
		$scope.myForm.$setPristine();
	};

});