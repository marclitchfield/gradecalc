(function() {
  'use strict';

  var lookup = {
    0: {
      current: 5,
      next: 5,
      scores: {
        5: { 5:5, 4:5, 3:5, 2:4, 1:4, 0:4 },
        4: { 5:5, 4:5, 3:4, 2:4, 1:4, 0:4 },
        3: { 5:4, 4:4, 3:3, 2:3, 1:3, 0:3 },
        2: { 5:3, 4:3, 3:3, 2:2, 1:2, 0:2 },
        1: { 5:3, 4:3, 3:2, 2:2, 1:1, 0:1 },
        0: { 5:2, 4:2, 3:2, 2:2, 1:1, 0:1 }
      }
    },
    1: {
      current: 5,
      next: 4,
      scores: {
        5: { 4:5, 3:5, 2:5, 1:4, 0:4 },
        4: { 4:5, 3:5, 2:4, 1:4, 0:4 },
        3: { 4:4, 3:4, 2:3, 1:3, 0:3 },
        2: { 4:3, 3:3, 2:2, 1:2, 0:2 },
        1: { 4:3, 3:2, 2:2, 1:1, 0:1 },
        0: { 4:2, 3:2, 2:2, 1:1, 0:1 }
      }
    }
  }
  
  var app = angular.module('GradeCalc', []);

  app.controller('GradeController', function($scope) {
    $scope.gradeLevels = ['Grades 1-4', 'Grade 5'];
    $scope.gradeLevel = 0;
    $scope.scoresAtCurrentLevel = function() { 
      return range(lookup[$scope.gradeLevel].current); 
    };
    $scope.scoresAtNextLevel = function() { 
      return range(lookup[$scope.gradeLevel].next); 
    };
    $scope.computedGrade = function() {
      if ($scope.currentScore !== undefined && $scope.nextScore !== undefined) {
        return lookup[$scope.gradeLevel].scores[$scope.currentScore][$scope.nextScore];
      }
    }
  });
  
  function range(n) {
    var numbers = [];
    for(var i=0; i<=n; i++) {
      numbers.push(i);
    }
    return numbers;
  }
  
})();