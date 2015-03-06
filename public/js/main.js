"use strict";

var app = {

    init: function() {

        app.cache = {};

        this.repaint();

    },

    repaint: function () {
        
        $("h2").css('color', 'red');
    }
}

$(function() {

    app.init();

});