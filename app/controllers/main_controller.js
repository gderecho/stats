var stats_app = angular.module('stats_app',[
        'input_list',
        'one_var_stats',
        'ui.bootstrap',
        'ngRoute']
        );

stats_app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/onevar', {
        templateUrl:'app/views/onevar.html',
        controller:'input_list_ctrl'
    }).
    otherwise({
        redirectTo:'/onevar'
    });
}]);
