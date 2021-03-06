﻿(function (angular) {
    'use strict';

    angular
      .module('meet-me')
      .config(registerState);


    registerState.$inject = ['$stateProvider'];

    function registerState($stateProvider) {

        $stateProvider.state('calendar', {
            url: '/calendar',
            authenticate: true,
            templateUrl: 'app/calendar/calendarView.html',
            controller: 'CalendarController',
            controllerAs: 'vm'
        });
    }

})(angular);