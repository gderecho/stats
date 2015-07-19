var inlist_module = angular.module("input_list", []);

inlist_module.controller("input_list_ctrl", function() {
    this.inputs = [{id:1, text:""}];
    this.curid = 1;

    /* if there is no last blank input
     * field, add a new one */
    this.check_if_add = function(input) {
        index = this.inputs.indexOf(input)
        if(index == this.inputs.length-1) {
            this.curid++;
            this.inputs.push({id:this.curid, text:""})
       }
    };

    /* if, when unfocused, the element is blank
     * but not the last element, remove it */
    this.check_if_delete = function(input) {
        index = this.inputs.indexOf(input)
        if(index != this.inputs.length-1 &&
                input.text == "") {
            this.inputs.splice(index,1)
        }
    };
});
