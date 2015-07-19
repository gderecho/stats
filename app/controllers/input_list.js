var inlist_module = angular.module("input_list", ['one_var_stats']);

inlist_module.controller("input_list_ctrl", ['get_ovar_stats',function(get_ovar_stats) {
    this.inputs = [];
    this.numbers=[];
    this.editing = [{id:1, text:""}];
    this.curid = 1;
    // this.NUM_PATTERN = /^\d+$/;
    this.NUM_PATTERN = /(?:^\d+\.?\d*$)|(?:^\d*\.?\d+$)/;
    this.NUM_PATTERN_STRING = this.NUM_PATTERN.toString();

    this.check_if_number = function(text) {
        return this.NUM_PATTERN.test(text)
    };
    this.histogram_data = [];
    /* if there is no last blank input
     * field, add a new one */
    this.check_if_add = function(input) {
        index = this.editing.indexOf(input)
        console.log(input.text)
        console.log(this.check_if_number(input.text))
        if(!this.check_if_number(input.text))
            return;
        if(index == this.editing.length-1) {
            this.curid++;
            this.editing.push({id:this.curid, text:""})
       }
    };

    /* if, when unfocused, the element is blank
     * but not the last element, remove it.
     * if it's invalid and there is a last element,
     * remove it
     * Otherwise, move to top */
    this.check_if_delete_editing = function(input) {
        index = this.editing.indexOf(input)
        if(index != this.editing.length-1 &&
                input.text == "") {
            this.editing.splice(index,1);
        } else if(input.text == "" ||
                !this.check_if_number(input.text)) {
            if(index != this.editing.length-1)
                this.editing.splice(this.editing.length-1,1)
        } else {
            this.inputs.push(input);
            this.editing.splice(index,1);
        }
    };
    this.check_if_delete_inputs = function(input) {
        index = this.inputs.indexOf(input)
        if(input.text == "") {
            this.inputs.splice(index,1);
        } 
    };

    this.texify= function(i) {
        return "$$" + i + "$$" 
    }

    this.get_stats = function() {
        this.numbers=[];
        for (key in this.inputs) {
            text = this.inputs[key].text;
            if (text!="")
                this.numbers.push(Number(text));
        }
        this.stats=get_ovar_stats.get(this.numbers);
        this.histogram_data=(get_ovar_stats.get_histogram_data(this.numbers));
        console.log(this.histogram_data);
        return this.stats;
    };
    this.stats = {};
    this.symbolic_desc = get_ovar_stats.get_symbolic_desc();
    this.detail_desc=get_ovar_stats.get_detail_desc();
}]);

inlist_module.directive('hcHistogram', function() {
    return {
        replace:true,
        restrict:'C',
        scope:{
            values:"=values"
        },
        controller:function($scope,$element,$attrs){
            console.log($scope)
        },
        template:'<div id="hist"></div>',
        link: function(scope,element,attrs) {
            if(scope.values.length < 1)
                return;
            var chart = new Highcharts.Chart({
                chart: {type: 'column',renderTo: 'hist'},
                series: [{data:scope.values}],
                plotOptions: {
                    column:{
                        shadow:false,
                        pointPadding:0,
                        groupPadding:0,
                        color:'rgba(205,205,205,.9)',
                        borderColor:'#666',
                        borderWidth:.4,
                    }
                }
            });
            scope.$watch("values", function(n) {
                chart.series[0].setData(n,true);
            },true);
        }
    };
});

/* The following directive was taken from
 * Ben Alpert's answer at stackoverflow:
 * http://stackoverflow.com/questions/16087146/   \
 * getting-mathjax-to-update-after-changes-to-angularjs-model
 *
 * Available under cc-by-sa 3.0:
 * http://creativecommons.org/licenses/by-sa/3.0/ 
 *
 * Modifications: changed only the name of the 
 * module and whitespace
 * */
inlist_module.directive("mathjaxBind", function() {
    return {
            restrict: "A",
            controller: ["$scope", "$element", "$attrs",
            function($scope, $element, $attrs) {
                $scope.$watch($attrs.mathjaxBind, function(texExpression) {
                    var texScript = angular.element("<script type='math/tex'>")
                        .html(texExpression ? texExpression :  "");
                $element.html("");
                $element.append(texScript);
                                                                                                                        MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
                                                                                                                                    });
                                                            }]
                };
});
