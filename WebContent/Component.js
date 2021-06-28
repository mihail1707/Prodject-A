sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/m/BusyDialog"
], function (UIComponent, BusyDialog) {
	"use strict";

	return UIComponent.extend("test.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			sap.ui.core.UIComponent.prototype.init.apply( this, arguments);
			//var i18nModel = this.getModel('i18n');
			this.oBusy = new BusyDialog();
			this.oBusy.setBusyIndicatorDelay(0);
			this.getRouter().initialize();
		}
	});

});