var mod = angular.module('one_var_stats',[])

mod.factory('get_ovar_stats', function() {
    var get = function(list) {
        add = function(a,b){return a+b};
        square = function(a) {return a*a;}
        sum = list.reduce(add)
        avg = sum/list.length
        subavg = function(a) {return a-avg;}
        k2 = list.map(subavg).map(square).reduce(add) / (list.length-1);
        s = Math.sqrt(k2);
        return { n:list.length,
                sum:sum,
                avg:avg,
                max:Math.max.apply(null,list),
                min:Math.min.apply(null,list),
                s:s,
                k2:k2
        };

    };
    return {get:get};
});
