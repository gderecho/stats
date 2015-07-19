var mod = angular.module('one_var_stats',[])

mod.factory('get_ovar_stats', function() {
    var get = function(list) {
        add = function(a,b){return a+b};
        square = function(a) {return a*a;}
        sum = list.reduce(add)
        avg = sum/list.length
        subavg = function(a) {return a-avg;}
        s2 = list.map(subavg).map(square).reduce(add) / (list.length-1);
        s = Math.sqrt(s2);
        return { n:list.length,
                avg:avg,
                s:s,
                s2:s2,
                sum:sum,
                max:Math.max.apply(null,list),
                min:Math.min.apply(null,list)
        };

    };
    var get_detail_desc = function() {
        return {
        n:"Number of elements",
        sum:"Sum of elements",
        avg:"Arithmetic mean of elements",
        max:"Greatest value in the list of elements",
        min:"Least value in the list of elements",
        s2:"Sample variance with Bessel\'s correction",
        s:"Sample standard deviation with Bessel\'s correction"
        };
    }; 
    var get_symbolic_desc = function() {return {
        n:"n",
        sum:"\\sum_i x_i",
        avg:"\\overline{x}",
        max:"\\textrm{max}(x_i)",
        min:"\\textrm{min}(x_i)",
        s2:"s^2_{n-1}",
        s:"s_{n-1}",
    }};
    return {get:get,
        get_detail_desc:get_detail_desc,
    get_symbolic_desc:get_symbolic_desc};
});
