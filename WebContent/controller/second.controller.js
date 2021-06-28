sap.ui.define([
    "sap/ui/core/mvc/Controller"

], function (Controller) {
    "use strict";
    return Controller.extend( "test.controller.second", {
        onInit: function() {
            console.log( "Second controller onInit" );
        }

    } );
} );
