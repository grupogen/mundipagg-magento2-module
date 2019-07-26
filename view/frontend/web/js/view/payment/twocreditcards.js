/*browser:true*/
/*global define*/
define(
    [
        "MundiPagg_MundiPagg/js/view/payment/default",
        "MundiPagg_MundiPagg/js/core/models/TwoCreditcardsModel"
    ],
    function (Component, $t) {

        return Component.extend({
            defaults: {
                template: "MundiPagg_MundiPagg/payment/default"
            },
            getCode: function() {
                return "mundipagg_two_creditcard";
            },
            isActive: function() {
                return window.checkoutConfig.payment.mundipagg_two_creditcard.active;
            },
            getTitle: function() {
                return window.checkoutConfig.payment.mundipagg_two_creditcard.title;
            },
            getBase: function() {
                return "MundiPagg_MundiPagg/payment/twocreditcards";
            },
            getForm: function() {
                return "MundiPagg_MundiPagg/payment/creditcard-form";
            },
            getModel: function() {
                return 'twocreditcards';
            },
            initBin: function() {
                var _self = this;
                window.MundiPaggCore.initBin(this.getModel(), _self);
            },
            getMonthsValues: function () {
                return '';
            },
            getYearsValues: function () {
                return '';
            },
            getCvvImageHtml: function () {
                
            },
        });
    }
);