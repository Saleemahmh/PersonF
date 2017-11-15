/**
 * 
 */
app.controller('personController', function($scope, personService, $window,
		$location) {
	console.log('entering person controller')

	$scope.person = {
		id : '',
		name : '',
		age : '',
		city : ''
	};

	$scope.personUpdate = {
		id : '',
		name : '',
		age : '',
		city : ''
	};
	$scope.swaggerdata={

		basePath:'',
		host:'',
		info:[]
	}
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
	$scope.getSwaggerData=function() {
		personService.getSwaggerData().then(function(data) {
			console.log('swagger file')
			$scope.swaggerdata = data;
			$scope.swaggerdata.info=data.info;
		},function(error){
			console.log('Error : ' +error)
		});
	};
$scope.getSwaggerData();


	$scope.createPerson = function() {
		console.log('create Student...')
		personService.createPerson($scope.person).then(function(data) {
			console.log('reloading')
			$window.location.href = '#/';
			listAllPersons();
			/*$window.location.reload();*/

		}, function(errResponse) {
			console.error('Error while Creating Student')
		});
	};

	$scope.updatePerson = function(id) {
		console.log('entering  updatePerson in controller' + id)
		personService.updatePerson(id, $scope.personUpdate).then(
				function(data) {
					listAllPersons();
				}, function(errResponse) {
					console.error('Error while updating : ' + errResponse)
				});
	};

	$scope.updatePersonLog = function(person) {

		console.log('updating', person)
		$scope.personUpdate = person;

	}
	
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
		$scope.person = {
			id : '',
			name : '',
			age : '',
			city : ''
		};
		$scope.myForm.$setPristine();
	};

});