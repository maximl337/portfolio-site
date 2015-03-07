//"use strict";

var app = {

    init: function() {

        app.cache = {};

        this.resize_home_header();
        this.header_typed_subtitle();

    },

    resize_home_header: function () {
        
        //get window inner height
        var vph = $(window).height();
        console.log(vph);
        $(".header-home").css('height', vph+'px');

        $(window).on('resize', function() {

            $(".header-home").css('height', vph+'px');
        });
    },

    header_typed_subtitle: function () {
        
        //typed.js
        $(".typed-header-sub-title").typed({
        strings: ["Developer", "Designer", "Code ninja", "Thinker", "Foodie", "Software Architect" ],
        typeSpeed: 25,
        startDelay: 1000,
        backSpeed: 25,
        // time before backspacing
        backDelay: 1000,
        showCursor: true,
        // character for cursor
        cursorChar: '|'
      });
    }
};

$(function() {

    app.init(); 

});