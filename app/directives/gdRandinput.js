
inlist_module.directive('gdRandinput', function() {
    return {
        require:'^ngController',
        templateUrl:'app/views/onevar/rand_input_template.html',
        link:function(scope,b,c,inctrl) {
            scope.dist_options=[{key:0, name:'Uniform distribution'},
                {key:1, name:'Gaussian (normal) distribution'},
                {key:2, name:'Poisson distribution'}];
            scope.dist_selected=scope.dist_options[0];
            scope.uniform={minimum:0,maximum:10};
            scope.$watch("dist_selected", function(a) {
                console.log(a);
            });
        }
    }
});
