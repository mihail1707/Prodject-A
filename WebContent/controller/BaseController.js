sap.ui.define([
    "sap/ui/core/mvc/Controller"

], function (Controller) {
    "use strict";
    return Controller.extend( "test.controller.BaseController", {
        onInit: function() {
            console.log( "BaseController controller onInit" );

        },
        onArrSearchNum : function() {
            var arr = [2,1,7,6,3];
            var n = 0;
            for(var i = 1; i <= arr.length; i++){
                    if(arr.indexOf(i) == -1) {
                        n = i;
                    }
            }
        }

    } );
} );