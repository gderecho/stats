var inlist_module = angular.module("input_list", []);

inlist_module.controller("input_list_ctrl", function() {
   this.rows = [0,1,2];
   this.check_if_add = function(index) {
       if(index == this.rows.length-1) {
           this.rows.push(this.rows.length)
       }
   };
   this.button_model=""
});
