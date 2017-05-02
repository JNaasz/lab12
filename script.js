var app = angular.module('ourModule', []);

app.controller('ourController', function($scope){

  $scope.toDoListMonday = [];
  $scope.addTaskMonday = function(mon){
    console.log(mon);
    $scope.toDoListMonday.push({ name: mon.name});
  };

  $scope.toDoListTuesday = [];
  $scope.addTaskTuesday = function(tue){
    console.log(tue);
    $scope.toDoListTuesday.push({ name: tue.name});
  };

  $scope.toDoListWednesday = [];
  $scope.addTaskWednesday = function(wed){
    console.log(wed);
    $scope.toDoListWednesday.push({ name: wed.name});
  };

  $scope.toDoListThursday = [];
  $scope.addTaskThursday = function(thu){
    console.log(thu);
    $scope.toDoListThursday.push({ name: thu.name});
  };

  $scope.toDoListFriday = [];
  $scope.addTaskFriday = function(fri){
    console.log(fri);
    $scope.toDoListFriday.push({ name: fri.name});
  };


})
