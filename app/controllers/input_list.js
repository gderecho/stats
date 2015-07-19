var inlist_module = angular.module("input_list", ['one_var_stats']);

inlist_module.controller("input_list_ctrl", ['get_ovar_stats',function(get_ovar_stats) {
    this.inputs = [];
    this.editing = [{id:1, text:""}];
    this.curid = 1;

    this.check_if_number = function(text) {
        return /^\d+$/.test(text)
    };
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
     * Otherwise, move to top */
    this.check_if_delete_editing = function(input) {
        index = this.editing.indexOf(input)
        if(index != this.editing.length-1 &&
                input.text == "") {
            this.editing.splice(index,1);
        } else if(input.text == "" ||
                !this.check_if_number(input.text)) {
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

    this.get_stats = function() {
        numbers=[];
        for (key in this.inputs) {
            text = this.inputs[key].text;
            if (text!="")
                numbers.push(Number(text));
        }
        return get_ovar_stats.get(numbers);
    };
    this.stats = {};
    this.detail_desc=get_ovar_stats.get_detail_desc();
}]);
