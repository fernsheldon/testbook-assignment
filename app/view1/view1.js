'use strict';

/**
 * Validation for form - moiblie only 10 digits
 * functionality
 *
 * secondary goals: Edit the table, delete an entry.
 * Solution that scale
 */

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl as vm'
    });
  }])

  .controller('View1Ctrl', ['$interval',function($interval) {

    var vm = this;

    vm.messageObj = {
      "name": "",
      "number": "",
      "message": "",
      "timer": ""
    }

    vm.messageArr = [];
    vm.formSubmitted = false


    vm.processData = function(isValid) {

      vm.formSubmitted = true

    if(isValid){
      vm.messageArr.push(vm.messageObj);
      //clearing out the model
      //TODO: extract into a method.
      vm.messageObj = {
        "name": "",
        "email": "",
        "message": "",
        "time": ""

      }

      vm.formSubmitted = false
    }



    }


    $interval(function() {
      angular.forEach(vm.messageArr, function(value, key) {
          var time = value.time;

          if(value.time>1){
            value.time--;
          }else{
            alert(value.message);
            vm.messageArr.splice(key,1);
          }
      });
    }, 1000);









  }]);
