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
    var get_histogram_data = function(unsorted_values) {
        if(unsorted_values.length == 0)
            return;
        // Freedman-Diaconis rule
        values = unsorted_values.slice(0);
        values.sort(function(a,b) {return a-b;});
        console.log(values);
        var q1_index = (values.length-1)/4;
        var q1 = (values[Math.floor(q1_index)]
            + values[Math.ceil(q1_index)])/2;
        var q3_index = values.length-1-q1_index;
        var q3 = (values[Math.floor(q3_index)]
            + values[Math.ceil(q3_index)])/2;
        var iqr = q3-q1;
        var median_index = (values.length-1)/2;
        var median = (values[Math.floor(median_index)]
            + values[Math.ceil(median_index)])/2;

        //var bin_width = 2 * iqr * Math.pow((values.length),-1/3);
        //var num_bins = Math.ceil((values[values.length-1]-values[0])/bin_width);
        var num_bins = Math.ceil(Math.log(values.length)/Math.log(2) + 1)
        var bin_width = (values[values.length-1]-values[0])/num_bins
        if (bin_width == 0)
            return [{min:values[0],max:values[0],num:values.length}];
        // there are limits
        if(num_bins > 100)
        {
            bin_width = (values[values.length-1]-values[0])/6;
            num_bins = Math.ceil((values[values.length-1]-values[0])/bin_width);
        }

        bins = []
        for(i=0; i<num_bins; i++)
        {
            bins.push( {
                min: i*bin_width + values[0],
                max: (i+1)*bin_width + values[0],
                num:0
            } );
        }

        // O(n^2) please improve!!!!
        for(v_index in values)
        {
            for(b_index in bins)
            {
                var value = values[v_index]
                var min = bins[b_index].min
                var max = bins[b_index].max
                console.log(value)
                console.log(min)
                console.log(max)
                if(value >= min && value <= max) {
                    bins[b_index].num++;
                    console.log('yes');
                    break;
                }
            }
        }
        
        console.log("bin width")
        console.log(bin_width)
        console.log("num bins")
        console.log(num_bins)
        console.log("bins")
        console.log(bins)

        /*histogram_data = [];
        i=0
        for(b_index in bins)
        {
            histogram_data.push({x:i, y:bins[b_index].num});
            i++;
        }
        return histogram_data;*/
        return bins;
    };
    var get_points_from_bins = function (bins) {
        histogram_data = [];
        i=0
        for(b_index in bins)
        {
            histogram_data.push({x:i, y:bins[b_index].num});
            i++;
        }
        return histogram_data;
    };
    return {get:get,
        get_detail_desc:get_detail_desc,
    get_symbolic_desc:get_symbolic_desc,
    get_histogram_data:get_histogram_data,
    get_points_from_bins:get_points_from_bins};
});
