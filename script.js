var app = angular.module('ourModule', []);

app.controller('ourController', function($scope){
  $scope.toDoList = [];
  $scope.addTask = function(newTask){
    console.log(newTask);
    $scope.toDoList.push({ name: newTask.name});
  }



})
