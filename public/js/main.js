//"use strict";

var app = {

    init: function() {

        app.cache = {};

        this.resize_home_header();
        this.header_typed_subtitle();

        this.resize_content_sections();

        this.scroll_action();
        this.check_if_scrolled_into_view();
        this.off_canvas_menu_scroll();
        

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
                $(".header-home ul.social-links").fadeIn();
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
                    app.destroy_progress_bars();
                    app.circle_progress_bar();
                    app.line_progress_bar();
                } else if(target == "#expertise-section") {
                    app.hide_expertise_gifs();
                    app.show_expertise_gifs();
                }
              },
              beforeScroll: function() {
                app.destroy_progress_bars();
                app.hide_expertise_gifs();
              }
            });
            return false;
        });

    },

    off_canvas_menu_scroll: function () {
        $("#mmenu a").on("click", function(e) {

            e.preventDefault();
            var target = $(this).attr("href");

            $("#mmenu").trigger("close.mm");

            $("#mmenu").on("closed.mm", function () {

                //setTimeout(function() {

                    $.smoothScroll({
                        scrollElement: null,
                        scrollTarget: target,
                        afterScroll: function() {
                            if(target == '#skills-section') {
                                app.destroy_progress_bars();
                                app.circle_progress_bar();
                                app.line_progress_bar();
                            } else if(target == "#expertise-section") {
                                app.hide_expertise_gifs();
                                app.show_expertise_gifs();
                            }
                        },
                        beforeScroll: function() {
                            app.destroy_progress_bars();
                            app.hide_expertise_gifs();
                        }
                    });

                    

                //}, 1000); //eo settimeout

                
                //return false;
            });
        
        });



    },

    check_if_scrolled_into_view: function () {

        $('#skills-section').waypoint(function(direction) {
            app.destroy_progress_bars();
            app.circle_progress_bar();
            app.line_progress_bar();
            app.header_items_dark();
        }, {
          offset: '25%'
        });

        $('#about-section').waypoint(function(direction) {
            
            app.header_items_dark();
            app.hide_expertise_gifs();
        });

        $('#expertise-section').waypoint(function(direction) {
            
            app.header_items_light();
            app.show_expertise_gifs();
        });

        $('.header-home').waypoint(function(direction) {
            
            app.header_items_light();
            app.hide_expertise_gifs();
        });
    },

    header_items_light: function () {
        $('.home-header-nav a').removeClass('color-light');
        $('.home-header-nav a').removeClass('color-dark');
        $('.home-header-nav a').addClass('color-light');
    },

    header_items_dark: function () {
        $('.home-header-nav a').removeClass('color-dark');
        $('.home-header-nav a').removeClass('color-light');
        $('.home-header-nav a').addClass('color-dark');
    },
    show_expertise_gifs: function () {
        $('.expertise-gif').show();
    },
    hide_expertise_gifs: function () {
        $('.expertise-gif').hide();
    }
};

$(function() {

    app.init(); 

    $("#mmenu").mmenu();

});