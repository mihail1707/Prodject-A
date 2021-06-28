sap.ui.define([
    'sap/ui/core/XMLComposite'], 
    function( XMLComposite ) {
    "use strict";
    var test = XMLComposite.extend("test.fragment.test", {
        metadata: {
            properties: {
                text: { type: "string", defaultValue: "1111111111111111111111111"}
            }
        },
        onButtoPress: function(oEvent){
            let aItemsParent = oEvent.getSource().getParent().getAggregation("items")
            if(oEvent.getSource().getProperty("icon") !== "sap-icon://decline") {
                oEvent.getSource().setProperty("icon","sap-icon://decline");
                oEvent.getSource().setProperty("type","Reject");
                this._onChangeText(aItemsParent, "2")
               
            } else {
                oEvent.getSource().setProperty("icon","sap-icon://accept");
                oEvent.getSource().setProperty("type","Accept");
                this._onChangeText(aItemsParent, "1")
            }
        },
        _onChangeText:function(aItemsParent, text){
            aItemsParent.forEach(function(el){
                if(el.sId.indexOf("text") != -1){
                    el.setProperty("text", text);
                }
            })
        }
    });
    return test;
}, /* bExport= */true);