//"use strict";

var app = {

    init: function() {

        app.cache = {};

        this.resize_home_header();
        this.header_typed_subtitle();
        //this.header_scroll_down_actions();
        this.resize_content_sections();

    },

    resize_home_header: function () {
        
        //get window inner height
        var vph = $(window).height();
        
        $(".header-home").css('height', vph+'px');

        $(window).on('resize', function() {

            $(".header-home").css('height', vph+'px');
        });
    },

    resize_content_sections: function () {
        
        //get view port height
        var o_vph = $(window).height();
        var vph = parseInt(o_vph) - 64;
        
        $(".home-content > .section").css('height', vph+'px');

        $(window).on('resize', function() {

            $(".home-content > .section").css('height', vph+'px');
        });
    },

    header_typed_subtitle: function () {
        
        //typed.js
        $(".typed-header-sub-title").typed({
        strings: ["Developer", "Designer", "Code Ninja", "Learner", "Thinker", "Foodie", "Software Architect" ],
        typeSpeed: 25,
        startDelay: 1000,
        backSpeed: 25,
        backDelay: 1000,
        callback: function() {
            setTimeout(function() {

                
                $(".header-home .scroll-down").fadeIn();
                //$(".typed-header-sub-title").css('padding-bottom', (200 - $(".header-home .scroll-down").height()) + 'px');
            }, 1000);
            
        }
      });
    }
};

$(function() {

    app.init(); 

});