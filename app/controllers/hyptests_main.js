var hyptests = angular.module('hyptests',[
        'ui.bootstrap' ]
        );
var hyptests_ctrl = hyptests.controller('choose_test_ctrl', function() {
            this.tests=['Two-sample z-test for proportions','Other test'];
 });
