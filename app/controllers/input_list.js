var inlist_module = angular.module("input_list", []);

inlist_module.controller("input_list_ctrl", function() {
    this.inputs = [{id:1, text:""}];
    this.curid = 1;
    this.check_if_add = function(input) {
        index = this.inputs.indexOf(input)
        if(index == this.inputs.length-1) {
            this.curid++;
            this.inputs.push({id:this.curid, text:""})
       }
    };
    this.check_if_delete = function(input) {
        index = this.inputs.indexOf(input)
        if(index != this.inputs.length-1 &&
                input.text == "") {
            this.inputs.splice(index,1)
        }
    };
});
