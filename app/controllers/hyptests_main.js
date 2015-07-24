var hyptests = angular.module('hyptests',[
        'ui.bootstrap' ]
        );
var hyptests_ctrl = hyptests.controller('choose_test_ctrl', function() {
            this.tests=['Two-sample z-test for proportions','Other test'];
 });

/* Calculates the error function of a real
 * argument to maximum precision based on
 * the maclaurin series for erf.
 * 
 * Based on an algorithm from
 * GNU MPFR: GNU multiple
 * precision floating point reliability
 *
 * http://www.mpfr.org/algorithms 
 * 4.5.1. Taylor expansion of error function*/

function erf(x) {
    if(!x && x!=0)
        throw "Bad erf input"
    if(x==0)
        return 0;
    if(x < 0)
        return -erf(-x);
    if(x > 3.994) // computation breaks down
        return 1;
    y=x*x;
    s=1;
    t=1;
    for(k=1;;k++)
    {
        t=y*t;
        t=t/k;
        u=t/(2*k+1);
        if(u==0)
            break;
        if(k%2 == 1) {
            s = s-u;
        } else {
            s = s+u;
        }
    }
    return 2*x*s/Math.sqrt(Math.PI);
}


/* calculates the upper-tail normal
 * probability given a standardized
 * (z-) score. known as normal cumulative
 * distribution function */
function ltp_norm(x)
{
    return .5*(1+erf(x/Math.sqrt(2)))
}

/* calculates the normal probability
 * density function with the standard
 * normal distribution
 * */
function pdf_norm(x)
{
    return Math.exp(-x*x/2)/(Math.sqrt(2*Math.PI))
}

/* an array with the normal distribution */
normal_dist_values=[]
for(x=-6;x<=6;x+=.05)
{
    normal_dist_values.push({x:x,y:pdf_norm(x)});
}


var tpzt_ctrl = 
        hyptests.controller('tpzt_controller',[ '$scope', function(scope) {
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    this.nulldiff=0;
    this.x1=undefined;
    this.x2=undefined;
    this.n1=undefined;
    this.n2=undefined;
    this.alpha=0.05;
    this.bool_show=false;
    this.test_statistic=undefined;
    this.se_pooled=undefined;
    this.phat_1=undefined;
    this.phat_2=undefined;
    this.pvalue=undefined;
    this.zscore=undefined;
    this.smallp=false;
    this.show = function () {
        if( !(this.x1
            && this.x2
            && this.n1
            && this.n2
            && this.n2>=this.x2
            && this.n1>=this.x1) ) {
            throw "Error: not all values detected";
        }
        this.phat_1=this.x1/this.n1;
        this.phat_2=this.x2/this.n2;
        this.phat_pooled=(this.x1+this.x2)/(this.n1+this.n2)
        this.diff = this.phat_1-this.phat_2;
        this.se_pooled = Math.sqrt((this.phat_pooled)*(1-this.phat_pooled)/this.n1 + 
            (this.phat_pooled)*(1-this.phat_pooled)/this.n2);
        this.zscore = (this.diff-this.nulldiff)/(this.se_pooled);
        neg_z = this.zscore < 0 ? this.zscore : -this.zscore;
        this.pvalue=2*ltp_norm(neg_z);
        if (this.pvalue<.0000001)
        {
            this.smallp = true;
            this.p_message = 'less than \\(10^{-7}\\)';
        }
        else
        {
            this.smallp = false;
            this.p_message = '$$' + this.pvalue.toString() + '$$';
        }
        this.bool_reject = this.alpha > this.pvalue;
        this.bool_show=true;
    };
}]);

hyptests.directive('gdTpztResults', function() {
    return {
        templateUrl: 'app/views/hyptests/tpzt_results_template.html',
        require:'^ngController',
        link: function(scope,elem,attrs,tpzt_ctrl) {
            zscore = tpzt_ctrl.zscore;
            chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'hc-tpzt-curve',
                },
                credits: {
                    enabled: false,
                },
                title: {
                    text:'Normal Distribution',
                },
                plotOptions:{
                    series:{
                        dataLabels: {
                            useHTML:true,
                        }
                    },
                },
                series: [{
                    type:'spline',
                        /* precalculated 
                         * normal distribution */
                    data:normal_dist_values,
                    marker:{
                        enabled:false,
                        states: {
                            hover: {
                                enabled:false,
                            },
                        },
                    },
                    enableMouseTracking:false,
                    name:'Gaussian curve',
                    color:'#2780e3',
                },      {
                    type:'areaspline',
                    data:[],/*normal_dist_values.filter(
                            function(coord){return (Math.abs(coord.x)>Math.abs(tpzt_ctrl.zscore)) && ((coord.x<0?-1:1) == (tpzt_ctrl.zscore<0?-1:1)) }),*/
                    fillColor:'rgba(255,0,0,.2)',
                    lineWidth:0,
                    marker: {
                        enabled:false,
                        states: {
                            hover: {
                                enabled:false,
                            },
                        },
                    },
                    enableMouseTracking:false,
                    showInLegend:false,
                },
                {
                    type:'areaspline',
                    data:[],/*normal_dist_values.filter(
                            function(coord){return (Math.abs(coord.x)>Math.abs(tpzt_ctrl.zscore)) && ((coord.x<0?-1:1) != (tpzt_ctrl.zscore<0?-1:1)) }),*/
                    fillColor:'rgba(255,165,0,.2)',
                    lineWidth:0,
                    marker: {
                        enabled:false,
                        states: {
                            hover: {
                                enabled:false,
                            },
                        },
                    },
                    enableMouseTracking:false,
                    showInLegend:false,
                },
                        {
                    type:'scatter',
                    data:[{x:zscore,y:pdf_norm(zscore)},],
                    color:'#000000',
                    tooltip:{
                        //pointFormat:'<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.x}</b><br/>',
                        pointFormatter: function() {
                            return '<span style="color:' 
                                + this.color
                                + '">\u25CF</span> '
                                + 'p\u0302<sub>1</sub>-p\u0302<sub>2</sub>'
                                + '<br /> <b>'
                                + 'Value:</b> ' 
                                + tpzt_ctrl.diff.toString()
                                + '<br /> <b>Test (z) statistic:</b> '
                                + this.x
                                + '<br/>'
                        },
                        headerFormat:'',
                        useHTML:true,
                    },
                    name:'p\u0302<sub>1</sub>-p\u0302<sub>2</sub>',
                    marker:{
                        symbol:'circle',
                    },
                },
                    ],
                legend: {
                    useHTML:true,
                },
                yAxis: {
                    gridLineWidth:0,
                    minorGridLineWidth:0,
                    min:0,
                    max:.4,
                    minorTickWidth:1,
                    tickWidth:1,
                    title:{
                        text:'Normal PDF'
                    }, // title
                }, // yaxis
                xAxis: {
                    plotLines:[{
                        color:'#FF0000',
                        width:2,
                        value:tpzt_ctrl.zscore,
                        id:'xline',
                    }, /*{
                        color:'rgba(255,165,0,1)',
                        width:2,
                        value:-tpzt_ctrl.zscore,
                    },*/
                    ], //plotlines

                    labels: {
                        formatter: function() {
                            return 'z-score: ' + this.value.toString() + '<br />'
                                + 'value: ' + (this.value*tpzt_ctrl.se_pooled+tpzt_ctrl.nulldiff).toPrecision(2) + '<br />';
                        },
                        useHTML: true,
                    },
                }, // xAxis

                spacingRight:25,
                spacingLeft:25,

            }); // chart

            scope.$evalAsync(function() {MathJax.Hub.Queue(["Typeset",MathJax.Hub,"hc-tpzt-curve"])})
            scope.$evalAsync(function () {MathJax.Hub.Queue(["Typeset",MathJax.Hub,"result-stats"]);});
            scope.$watch('tpzt_ctrl.zscore', function(zsc)
            {
                chart.series[chart.series.length-1].setData([{x:zsc, y:pdf_norm(zsc)}]);
                normaldist_copy = normal_dist_values.map(function (x) {return {x:x.x, y:x.y}});
                normaldist_copy2 = normal_dist_values.map(function (x) {return {x:x.x, y:x.y}});
                thisdata=normaldist_copy.filter(
                            function(coord){
                                return (Math.abs(coord.x)>Math.abs(tpzt_ctrl.zscore)) && ((coord.x<0?-1:1) == (tpzt_ctrl.zscore<0?-1:1)) });
                chart.series[1].setData(thisdata);
                        /*.sort(function(a,b) {return a.x-b.x})*/
                mirrordata=normaldist_copy2.filter(
                            function(coord){return (Math.abs(coord.x)>Math.abs(tpzt_ctrl.zscore)) && ((coord.x<0?-1:1) != (tpzt_ctrl.zscore<0?-1:1)) });
                console.log(mirrordata);
                chart.series[2].setData(mirrordata);
                        /*.sort(function(a,b) {return a.x-b.x});*/
                chart.xAxis[0].removePlotLine('xline');
                chart.xAxis[0].addPlotLine({color:'#FF0000',
                        width:2,
                        value:tpzt_ctrl.zscore,
                        id:'xline',
                });

                document.getElementById('pmessage').innerHTML = ((tpzt_ctrl.smallp?'less than \\(10^{-7}\\)':'\\(' + tpzt_ctrl.pvalue.toString() + '\\)'));
                document.getElementById('zmessage').innerHTML = ('\\(' + zsc.toString() + '\\)');
                scope.$evalAsync(function() {MathJax.Hub.Queue(["Typeset",MathJax.Hub,"hc-tpzt-curve"])})
                scope.$evalAsync(function () {MathJax.Hub.Queue(["Typeset",MathJax.Hub,"result-stats"]);});
            },true);
        },
    };
});

/* Makes sure that this
 * is less than the denominator
 */
hyptests.directive('gdDenom', 
        function() {
    return {
        scope:{
            denom:'=gdDenom',
        },
        require:'ngModel',
        link:function(scope,elem,attrs,ctrl) {
            ctrl.$validators.gdDenom= function(thisval) {
                console.log(thisval);
                console.log(scope.denom);
                if(!thisval || !scope.denom)
                    return true; // let the other 
                                 // error handlers do it
                a = parseInt(thisval) <= parseInt(scope.denom);
                if(!a)
                    //elem.attr('oninvalid',"this.setCustomValidity('Successes must be less than or equal to total observations.')");
                    elem[0].setCustomValidity('Value must not be greater than number of observations.');
                else
                    elem[0].setCustomValidity('');
                    //elem.removeAttr('oninvalid')
                return a;
            }
            scope.$watch('denom', function(){ctrl.$validate()},true);
        },
    }
});

