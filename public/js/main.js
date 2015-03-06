//"use strict";

var app = {

    init: function() {

        app.cache = {};

        this.resize_home_header();

    },

    resize_home_header: function () {
        
        //get window inner height
        var vph = $(window).height();
        console.log(vph);
        $(".header-home").css('height', vph+'px');

        $(window).on('resize', function() {

            $(".header-home").css('height', vph+'px');
        });
    }
};

$(function() {

    app.init();

});