//"use strict";

var app = {

    init: function() {

        app.cache = {};

        this.resize_home_header();
        this.header_typed_subtitle();
        this.header_scroll_down_actions();

    },

    resize_home_header: function () {
        
        //get window inner height
        var vph = $(window).height();
        
        $(".header-home").css('height', vph+'px');

        $(window).on('resize', function() {

            $(".header-home").css('height', vph+'px');
        });
    },

    header_typed_subtitle: function () {
        
        //typed.js
        $(".typed-header-sub-title").typed({
        strings: ["Developer", "Designer", "Code Ninja", "Thinker", "Foodie", "Software Architect" ],
        typeSpeed: 25,
        startDelay: 1000,
        backSpeed: 25,
        backDelay: 1000,
        showCursor: true,
        cursorChar: '|',
        callback: function() {
            setTimeout(function() {

                $(".home-title").addClass('animated pulse');
                $(".header-home .scroll-down").show();
                //$(".typed-header-sub-title").css('padding-bottom', (200 - $(".header-home .scroll-down").height()) + 'px');
            }, 1000);
            
        }
      });
    },

    header_scroll_down_actions: function () {
        //mouseover
        $(document).on('mouseover', ".scroll-down", function() {
            $(this).addClass('animated bounce');
           
        });
        //mouseout
        $(document).on('mouseout', ".scroll-down", function() {
            $(this).removeClass('animated bounce'); 

        });
    }
};

$(function() {

    app.init(); 

});