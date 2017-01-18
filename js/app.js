/* setup your angular app here */
var app = angular.module("FoodApp",[]);
app.controller('FoodCtrl',['$scope', function($scope) {
  $scope.foods = fruits.concat(vegetables);
  $scope.foods.sort(function(a, b) {
    return 0.5 - Math.random()
  });

  $scope.fruits = [];
  $scope.veggies = [];


  $scope.moveToFruit = function(foodIndex) {
    $scope.fruits.push($scope.foods[foodIndex]);
    $scope.foods.splice(foodIndex,1);
  }

  $scope.moveToVeggie = function(foodIndex) {
    $scope.veggies.push($scope.foods[foodIndex]);
    $scope.foods.splice(foodIndex,1);
  }

  $scope.moveToFood = function(foodType, index) {
    console.log(foodType);
    $scope.foods.push($scope[foodType][index]);
    $scope[foodType].splice(index,1);
  }

  $scope.checkCorrect = function(foodType, currentSelection) {
    if (foodType == 'fruit') {
      if (fruits.indexOf(currentSelection) === -1) {
        return true;
      } else if (fruits.indexOf(currentSelection) >= 0) {
        return false;
      }
    } else if (foodType == 'veggie') {
      if (vegetables.indexOf(currentSelection) === -1) {
        return true;
      } else if (vegetables.indexOf(currentSelection) >= 0) {
        return false;
      }
    }
  }

}])


// debug stuff to show the app is loading and fruit // veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
