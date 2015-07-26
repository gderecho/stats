inlist_module.directive('gdOnevarResults', function($compile) { return {
    require:'^ngController', //input_list_ctrl
    templateUrl:'app/views/onevar_results_table.html',
    link: function(scope,elem,attrs,ctrl) {
        scope.$watch('inctrl.stats', function(stats) {
            document.getElementById('onevar_results_main').innerHTML
                = '';
            innerdivstring = '';
            keys = Object.keys(stats);
            for(i=0; i<keys.length; i++) {
                var row = document.createElement('tr');
                var detail_desc = document.createElement('td');
                detail_desc.innerHTML = '<span popover-template="inctrl.popover_text[\''
                    + keys[i]
                    + '\']" popover-trigger="mouseenter" popover-placement="bottom"><a href="javascript:;">' + (ctrl.detail_desc[keys[i]]) + '</a></span>';
                row.appendChild(detail_desc);
                var symbol_desc = document.createElement('td');
                symbol_desc.innerHTML = 
                    '<script type="math/tex">' 
                    + ctrl.symbolic_desc[keys[i]] + '</script>';
                row.appendChild(symbol_desc);
                var data = document.createElement('td');
                if(!stats[keys[i]] && stats[keys[i]] != 0) {
                    data.innerHTML = 'Undefined'

                } else {
                    data.innerHTML = '<script type="math/tex">' + 
                        stats[keys[i]] + '</script>';
                }
                row.appendChild(data);
                document.getElementById('onevar_results_main')
                    .appendChild(row);

            }
            $compile(elem.contents())(scope);
            MathJax.Hub.Queue(['Typeset',MathJax.Hub,'onevar_table_main']);
        },true);
    },
}});
