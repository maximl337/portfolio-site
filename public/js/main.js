//"use strict";

var app = {

    init: function() {

        app.cache = {};

        this.resize_home_header();
        this.header_typed_subtitle();
        //this.header_scroll_down_actions();
        this.resize_content_sections();
        this.circle_progress_bar();

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
    },

    circle_progress_bar: function () {
                    
        var circle_0 = new ProgressBar.Circle("#expertise-0", {
            color: '#1abc9c',
            strokeWidth: 2,
            trailWidth: 0,
            duration: 1500,
            text: {
                // Initial value for text.
                // Default: null
                value: 'Full fledged, payment ready, socially integrated, online stores',

                // Text color.
                // Default: same as stroke color (options.color)
                color: '#FFFFFF',

                // Class name for text element.
                // Default: 'progressbar-text'
                className: 'progressbar__label',

                // If true, CSS is automatically set for container and text element.
                // If you want to modify all CSS your self, set this to false
                // Default: true
                autoStyle: false
            }
        });

        circle_0.animate(1, function() {
            //circle.animate(0);
        });

        var circle_1 = new ProgressBar.Circle("#expertise-1", {
            color: '#1abc9c',
            strokeWidth: 2,
            trailWidth: 0,
            duration: 1500
        });

        circle_1.animate(1, function() {
            //circle.animate(0);
        });

        var circle_2 = new ProgressBar.Circle("#expertise-2", {
            color: '#1abc9c',
            strokeWidth: 2,
            trailWidth: 0,
            duration: 1500
        });

        circle_2.animate(1, function() {
            //circle.animate(0);
        });

        var circle_3 = new ProgressBar.Circle("#expertise-3", {
            color: '#1abc9c',
            strokeWidth: 2,
            trailWidth: 0,
            duration: 1500
        });

        circle_3.animate(1, function() {
            //circle.animate(0);
        });
        
    }
};

$(function() {

    app.init(); 

});