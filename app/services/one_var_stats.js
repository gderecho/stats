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
        sum:"\\sum_{i}^{n} x_i",
        avg:"\\overline{x}",
        max:"\\textrm{max}(x_i)",
        min:"\\textrm{min}(x_i)",
        s2:"s^2_{n-1}",
        s:"s_{n-1}",
    }};
    function fn_summary(sorted_values) {
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
        return {
            min:values[0],
            q1:q1,
            median:median,
            q3:q3,
            max:values[values.length-1]
        }

    }
    var get_histogram_data = function(unsorted_values) {
        if(unsorted_values.length == 0)
            return;
        // Freedman-Diaconis rule
        values = unsorted_values.slice(0);
        values.sort(function(a,b) {return a-b;});

        summary = fn_summary(values);
        median = summary.median;
        q1 = summary.q1;
        q3 = summary.q3;

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
                num:0,
                index:i,
            } );
        }

        var b_index = 0;
        for(v_index in values) {
            var value = values[v_index];
            var min = bins[b_index].min;
            var max = bins[b_index].max;
            if(value >= min && value <= max)
                bins[b_index].num++;
            else
            {
                b_index++;
                if(b_index >= bins.length)
                    break;
                bins[b_index].num++
            }
        }

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
    var get_boxplot_series = function(unsorted_values) {
        series = []
        values = unsorted_values.slice(0);
        values.sort(function(a,b) {return a-b;});
        fsummary = fn_summary(values);
        // check for outliers
        outliers=[]
        if( values.length > 2)
        {
            index = values.length-1;
            while(fsummary.max > fsummary.q3+1.5*(q3-q1))
            {
                index--;
                outliers.push([0,fsummary.max]);
                fsummary.max=values[index];
            }
            index=0;
            while(fsummary.min < fsummary.q1-1.5*(q3-q1))
            {
                index++;
                outliers.push([0,fsummary.min]); 
                fsummary.min=values[index];
            }
        }

        return [{data:[[fsummary.min,
                fsummary.q1,
                fsummary.median,
                fsummary.q3,
                fsummary.max]],
                color:Highcharts.getOptions().colors[0],
                name:'Values within range'},
                {data:outliers,
                    type:'scatter',
                    name:'Outliers',
                    color:Highcharts.getOptions().colors[0],
                    marker:{lineColor:Highcharts.getOptions().colors[0],lineWidth:1,fillColor:'white',symbol:'circle',},
                    tooltip:{pointFormatter:function() {return "<b>Outlier</b><br />Value: " + this.y.toString()}}}];
    };
    var get_expl_text= function() {
        return {
            n:'app/views/onevar/popover_exptext_n.html',
            avg:'app/views/onevar/popover_exptext_avg.html',
            sum:'app/views/onevar/popover_exptext_sum.html',
            s:'app/views/onevar/popover_exptext_s.html',
            s2:'app/views/onevar/popover_exptext_s2.html',
            min:'app/views/onevar/popover_exptext_min.html',
            max:'app/views/onevar/popover_exptext_max.html'
        };
    }
    return {get:get,
        get_detail_desc:get_detail_desc,
    get_symbolic_desc:get_symbolic_desc,
    get_histogram_data:get_histogram_data,
    get_boxplot_series:get_boxplot_series,
    get_points_from_bins:get_points_from_bins,
    get_expl_text:get_expl_text,};
});
