var hyptests = angular.module('hyptests',[
        'ui.bootstrap' ]
        );
var hyptests_ctrl = hyptests.controller('choose_test_ctrl', function() {
            this.tests=['Two-sample z-test for proportions','Other test'];
 });

phatdiff_svg='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39pt" height="13pt" viewBox="0 0 39 13" version="1.1"> <defs> <g> <symbol overflow="visible" id="glyph0-0"> <path style="stroke:none;" d=""/> </symbol> <symbol overflow="visible" id="glyph0-1"> <path style="stroke:none;" d="M 2.921875 -8.296875 L 1.359375 -6.671875 L 1.546875 -6.484375 L 2.921875 -7.71875 L 4.296875 -6.484375 L 4.484375 -6.671875 Z M 2.921875 -8.296875 "/> </symbol> <symbol overflow="visible" id="glyph1-0"> <path style="stroke:none;" d=""/> </symbol> <symbol overflow="visible" id="glyph1-1"> <path style="stroke:none;" d="M 2.375 2.46875 C 2.3125 1.84375 2.265625 0.6875 2.265625 0.125 L 2.375 0.03125 C 2.609375 0.09375 2.84375 0.125 3.078125 0.125 C 4.9375 0.125 6.1875 -1.8125 6.1875 -3.5625 C 6.1875 -4.453125 5.765625 -5.5625 4.546875 -5.5625 C 3.734375 -5.5625 3 -5.1875 2.359375 -4.671875 L 2.265625 -4.71875 C 2.21875 -5.25 2.015625 -5.625 1.484375 -5.625 C 0.953125 -5.625 0.328125 -5.1875 -0.140625 -4.8125 L 0.03125 -4.578125 C 0.3125 -4.75 0.640625 -4.921875 0.890625 -4.921875 C 1.25 -4.921875 1.359375 -4.296875 1.359375 -3.765625 L 1.359375 -1.125 C 1.359375 -0.4375 1.34375 2.015625 1.296875 2.703125 L 1.40625 2.828125 Z M 2.28125 -0.78125 C 2.28125 -0.796875 2.265625 -2.03125 2.265625 -3.015625 C 2.265625 -3.140625 2.296875 -4.046875 2.296875 -4.125 C 2.859375 -4.5625 3.34375 -4.8125 3.953125 -4.8125 C 4.71875 -4.8125 5.1875 -3.890625 5.1875 -2.859375 C 5.1875 -1.71875 4.78125 -0.34375 3.328125 -0.34375 C 2.9375 -0.34375 2.5625 -0.53125 2.28125 -0.78125 Z M 2.28125 -0.78125 "/> </symbol> <symbol overflow="visible" id="glyph2-0"> <path style="stroke:none;" d=""/> </symbol> <symbol overflow="visible" id="glyph2-1"> <path style="stroke:none;" d="M 2.5 -5.078125 C 2.5 -5.296875 2.484375 -5.296875 2.265625 -5.296875 C 1.9375 -4.984375 1.515625 -4.796875 0.765625 -4.796875 L 0.765625 -4.53125 C 0.984375 -4.53125 1.40625 -4.53125 1.875 -4.734375 L 1.875 -0.65625 C 1.875 -0.359375 1.84375 -0.265625 1.09375 -0.265625 L 0.8125 -0.265625 L 0.8125 0 C 1.140625 -0.03125 1.828125 -0.03125 2.1875 -0.03125 C 2.546875 -0.03125 3.234375 -0.03125 3.5625 0 L 3.5625 -0.265625 L 3.28125 -0.265625 C 2.53125 -0.265625 2.5 -0.359375 2.5 -0.65625 Z M 2.5 -5.078125 "/> </symbol> <symbol overflow="visible" id="glyph2-2"> <path style="stroke:none;" d="M 2.25 -1.625 C 2.375 -1.75 2.703125 -2.015625 2.84375 -2.125 C 3.328125 -2.578125 3.796875 -3.015625 3.796875 -3.734375 C 3.796875 -4.6875 3 -5.296875 2.015625 -5.296875 C 1.046875 -5.296875 0.421875 -4.578125 0.421875 -3.859375 C 0.421875 -3.46875 0.734375 -3.421875 0.84375 -3.421875 C 1.015625 -3.421875 1.265625 -3.53125 1.265625 -3.84375 C 1.265625 -4.25 0.859375 -4.25 0.765625 -4.25 C 1 -4.84375 1.53125 -5.03125 1.921875 -5.03125 C 2.65625 -5.03125 3.046875 -4.40625 3.046875 -3.734375 C 3.046875 -2.90625 2.46875 -2.296875 1.515625 -1.34375 L 0.515625 -0.296875 C 0.421875 -0.21875 0.421875 -0.203125 0.421875 0 L 3.5625 0 L 3.796875 -1.421875 L 3.546875 -1.421875 C 3.53125 -1.265625 3.46875 -0.875 3.375 -0.71875 C 3.328125 -0.65625 2.71875 -0.65625 2.59375 -0.65625 L 1.171875 -0.65625 Z M 2.25 -1.625 "/> </symbol> <symbol overflow="visible" id="glyph3-0"> <path style="stroke:none;" d=""/> </symbol> <symbol overflow="visible" id="glyph3-1"> <path style="stroke:none;" d="M 8.421875 -2.828125 L 8.484375 -3.296875 L 0.640625 -3.296875 L 0.546875 -2.828125 Z M 8.421875 -2.828125 "/> </symbol> </g> </defs> <g id="surface1"> <g style="fill:rgb(0%,0%,0%);fill-opacity:1;"> <use xlink:href="#glyph0-1" x="1.764" y="8.859"/> </g> <g style="fill:rgb(0%,0%,0%);fill-opacity:1;"> <use xlink:href="#glyph1-1" x="1.164" y="9.199"/> </g> <g style="fill:rgb(0%,0%,0%);fill-opacity:1;"> <use xlink:href="#glyph2-1" x="8.218" y="10.993"/> </g> <g style="fill:rgb(0%,0%,0%);fill-opacity:1;"> <use xlink:href="#glyph3-1" x="15.607" y="9.199"/> </g> <g style="fill:rgb(0%,0%,0%);fill-opacity:1;"> <use xlink:href="#glyph0-1" x="27.902" y="8.859"/> </g> <g style="fill:rgb(0%,0%,0%);fill-opacity:1;"> <use xlink:href="#glyph1-1" x="27.301" y="9.199"/> </g> <g style="fill:rgb(0%,0%,0%);fill-opacity:1;"> <use xlink:href="#glyph2-2" x="34.355" y="10.992"/> </g> </g> </svg>'

tooltip_table_1='<table class="table table-hover"><thead><th>' + phatdiff_svg +'</th></thead>' + 
    '<tbody><tr><th>Value:</th><td><span>';
tooltip_table_2='</span></td></tr><tr><th>z-score:</th><td>'
tooltip_table_3='</td></tr></tbody>'


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
    for(k=1;;k++) {
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
    return .5*(1+erf(x/Math.sqrt(2)));
}

/* calculates the normal probability
 * density function with the standard
 * normal distribution
 * */
function pdf_norm(x)
{
    return Math.exp(-x*x/2)/(Math.sqrt(2*Math.PI));
}

/* an array with the normal distribution */
normal_dist_values=[]
for(x=-6;x<=6;x+=.02)
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
    this.calculations_collapsed=true;
    this.show = function () {
        if( !(this.x1
            && this.x2
            && this.n1
            && this.n2
            && this.n2>=this.x2
            && this.n1>=this.x1) ) {
            throw "Error: not all values detected";
        }
        this.x1_old=this.x1;
        this.x2_old=this.x2;
        this.n1_old=this.n1;
        this.n2_old=this.n2;
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
        this.ex_suc_and_fail = [this.phat_pooled*this.n1_old,
            this.n1_old-this.phat_pooled*this.n1_old,
            this.n2_old*this.phat_pooled,
            this.n2_old*(1-this.phat_pooled),
        ];
        this.indassum_collapse=true;
        this.ssa_collapse=true;
        this.ssa_valid = this.ex_suc_and_fail.map(function(x) {return x>=5;}).reduce(function(a,b) {return a && b;});
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
                    text:'Sampling Distribution of  <span style="font-size:80%"><script type="math/tex">\\hat{p}_1-\\hat{p}_2</script></span>',
                    useHTML:true,
                },
                plotOptions:{
                    series:{
                        dataLabels: {
                            useHTML:true,
                        },
                        turboThreshold: 10000,
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
                    name:'<script type="math/tex">\\hat{p}_1-\\hat{p}_2</script>',
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
                tooltip:{
                    headerFormat:'',
                    useHTML:true,
                    backgroundColor:'none',
                    borderWidth:0,
                    shadow:false,
                    padding:0,
                    //pointFormat:'<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.x}</b><br/>',
                    pointFormatter: function() {return tooltip_table_1 +
                        tpzt_ctrl.diff + tooltip_table_2 + tpzt_ctrl.zscore + tooltip_table_3;},
                    //positioner: function(a,b,point) {return {x:point.plotX, y:point.plotY+100};},
                }, 
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

hyptests.directive('tpztCalculations', function() {
    return {
        require:'^ngController',
        template:'<div id="tpzt_calculations"></div>',
        link:function(scope,elem,attrs,tpzt_ctrl) {
            scope.$watchGroup(['tpzt_ctrl.phat_pooled','tpzt_ctrl.se_pooled','tpzt_ctrl.zscore','tpzt_ctrl.pvalue'],
                    function()
                    { 
                        var line1='<script type="math/tex">\\begin{align*}';
                        var line2='\\hat{p}_1 - \\hat{p}_2 & : & \\frac{'
                            + 'x_1' + '}{' + 'n_1' + '}'
                            + '-' + '\\frac{' + 'x_2' + '}'
                            + '{' +'n_2'+'} & =  ' + tpzt_ctrl.diff + '\\\\[1em]';
                        var line3='\\hat{p}_\\textrm{pooled} & : & \\frac{'
                            + 'x_1' + '+' + 'x_2' + '}{'
                            + 'n_1' + '+' + 'n_2' + '} & =  '
                            + tpzt_ctrl.phat_pooled + '\\\\[1em]';
                        var line4='\\textrm{SE}_{\\hat{p}_1-\\hat{p}_2} & : & '
                            + '\\sqrt{\\frac{(\\hat{p}_\\textrm{pooled})(1-\\hat{p}_\\textrm{pooled})}{n_1} + \\frac{(\\hat{p}_\\textrm{pooled})(1-\\hat{p}_\\textrm{pooled})}{n_2}} & =  ' + tpzt_ctrl.se_pooled + '\\\\[1em]';
                        var line5='z&:&\\frac{(\\hat{p}_1 - \\hat{p}_2)-(p_1-p_2)_{H_0}}{\\textrm{SE}_{\\hat{p}_1 - \\hat{p}_2}}&=' + tpzt_ctrl.zscore + '\\\\[1em]';
                        var line6='p\\textrm{-value}&:&1+\\textrm{erf}\\left(-\\frac{|z|}{\\sqrt{2}}\\right)&=' + tpzt_ctrl.pvalue
                        var end = '\\end{align*}</script>';
                        document.getElementById('tpzt_calculations').innerHTML
                            = line1+line2+line3+line4+line5+line6+end;
                        MathJax.Hub.Queue(["Typeset",MathJax.Hub,'tpzt_calculations']);
                    })
        }

    };
})

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

