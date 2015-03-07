//"use strict";

var app = {

    init: function() {

        app.cache = {};

        this.resize_home_header();
        this.header_typed_subtitle();
        //this.header_scroll_down_actions();
        this.resize_content_sections();
        //this.circle_progress_bar();
        //this.line_progress_bar();
        this.scroll_action();

        //manage scrollbars
        if (app.check_if_scrolled_into_view('#skills-section')) {
            app.circle_progress_bar();
            app.line_progress_bar();
        } else {
            
        }

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
        
        $(".home-content > .section").css('height', o_vph+'px');

        $(window).on('resize', function() {

            $(".home-content > .section").css('height', o_vph+'px');
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
                    
        var circle_0 = new ProgressBar.Circle("#skills-0", {
            color: '#1abc9c',
            strokeWidth: 2,
            trailWidth: 1,
            duration: 500
            
        });

        circle_0.animate(0.85, function() {
            //circle.animate(0);
        });

        var circle_1 = new ProgressBar.Circle("#skills-1", {
            color: '#1abc9c',
            strokeWidth: 2,
            trailWidth: 1,
            duration: 1000
        });

        circle_1.animate(0.75, function() {
            //circle.animate(0);
        });

        var circle_2 = new ProgressBar.Circle("#skills-2", {
            color: '#1abc9c',
            strokeWidth: 2,
            trailWidth: 1,
            duration: 1500
        });

        circle_2.animate(0.80, function() {
            //circle.animate(0);
        });

        var circle_3 = new ProgressBar.Circle("#skills-3", {
            color: '#1abc9c',
            strokeWidth: 2,
            trailWidth: 1,
            duration: 2000
        });

        circle_3.animate(0.90, function() {
            //circle.animate(0);
        });
        
    },

    destroy_progress_bars: function () {
        $("#skills-0, #skills-1, #skills-2, #skills-3, #other-skills, #frameworks").html("");
    },

    line_progress_bar: function () {

        var Line_0 = new ProgressBar.Line("#other-skills", {
            color: '#1abc9c',
            strokeWidth: 1,
            trailWidth: 1,
            duration: 2500
            
        });

        Line_0.animate(1);

        var Line_1 = new ProgressBar.Line("#frameworks", {
            color: '#1abc9c',
            strokeWidth: 1,
            trailWidth: 1,
            duration: 3000
            
        });

        Line_1.animate(1);
    },

    scroll_action:function () {

        $('.scroll_action').on('click', function() {
            var target = $(this).attr('href');    
            $.smoothScroll({
              scrollElement: null,
              scrollTarget: target,
              afterScroll: function() {
                if(target == '#skills-section') {
                    app.circle_progress_bar();
                    app.line_progress_bar();
                }
              },
              beforeScroll: function() {
                app.destroy_progress_bars();
              }
            });
            return false;
        });

    },

    check_if_scrolled_into_view: function (elem) {

        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
};

$(function() {

    app.init(); 

});