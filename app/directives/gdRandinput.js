function rand_uniform(a,b)
{
    return b + (Math.random() * (a-b));
}

/* Box-Muller transform */
function rand_gaussian(mu,sigma)
{
    /* change [0,1) to (0,1) */
    var rand_1;
    do {
        rand_1 = Math.random();
    } while(rand_1 == 0);
    var rand_2
    do {
        rand_2 = Math.random();
    } while(rand_2 == 0);

    var standard_normal_rand = Math.sqrt(-2*Math.log(rand_1))
        * Math.sin(2*Math.PI*rand_2); // Math.log is ln
    return sigma*standard_normal_rand + mu;
}

inlist_module.directive('gdRandinput', function() {
    return {
        require:'^ngController',
        templateUrl:'app/views/onevar/rand_input_template.html',
        link:function(scope,b,c,inctrl) {
            MathJax.Hub.Queue(["Typeset",MathJax.Hub,'nrandn']);
            scope.dist_options=[{key:0, name:'Uniform distribution'},
                {key:1, name:'Gaussian (normal) distribution'},
                /*{key:2, name:'Chi squared distribution'}*/];
            scope.dist_selected=scope.dist_options[0];
            scope.uniform={minimum:0,maximum:10};
            scope.gaussian={mu:0,sigma:1};
            scope.chi2={k:1};
            scope.n = undefined;
            scope.get_random = function() {
                if(!scope.n)
                    scope.n=1
                if(scope.dist_selected.key == 0)  { //uniform
                    scope.prev_name='uniform distribution';
                    scope.generated_rand = []
                    if(!scope.uniform.maximum && scope.uniform.maximum != 0)
                        scope.uniform.maximum=1;
                    if(!scope.uniform.minimum && scope.uniform.minimum != 0)
                        scope.uniform.minimum=0;
                    for(var i=0;i<scope.n;i++) {
                        var r = rand_uniform(
                                scope.uniform.minimum,
                                scope.uniform.maximum);
                        scope.generated_rand.push(r);
                        inctrl.curid++;
                        inctrl.inputs.push({id:inctrl.curid,
                            text:r.toString()});
                    }
                } else if(scope.dist_selected.key == 1) { //gauss
                    scope.prev_name='normal distribution'
                    scope.generated_rand = []
                    if(!scope.gaussian.mu)
                        scope.gaussian.mu=0;
                    if(!scope.gaussian.sigma && scope.uniform.sigma != 0)
                        scope.gaussian.sigma=1;
                    for(var i=0;i<scope.n;i++) {
                        var r = rand_gaussian(
                                scope.gaussian.mu,
                                scope.gaussian.sigma);
                        scope.generated_rand.push(r);
                        inctrl.curid++;
                        inctrl.inputs.push({id:inctrl.curid,
                            text:r.toString()});
                    }
                }
            }
            scope.$watch("dist_selected.key", function(a) {
                console.log(a);
                if(a==1) {
                    MathJax.Hub.Queue(
                            ['Typeset',MathJax.Hub,'gauss_render']);
                } else if(a==2) {
                    MathJax.Hub.Queue(
                            ['Typeset',MathJax.Hub,'chi2_render']);
                }
            });
        }
    }
});
