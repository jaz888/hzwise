// global. currently active menu item
var current_item = 0;

// few settings
var section_hide_time = 800;
var section_show_time = 800;


// jQuery stuff
jQuery(document).ready(function ($) {

    $('#plax-sphere-1').plaxify({"xRange": 40, "yRange": 40})
    $('#plax-logo').plaxify({"xRange": 20, "yRange": 20})
    $('#plax-sphere-2').plaxify({"xRange": 10, "yRange": 10})
    $('#plax-sphere-3').plaxify({"xRange": 40, "yRange": 40, "invert": true})
    $.plax.enable()

    // Switch section



    $("a.triggle").click(function () {
        if (!$(this).hasClass('active')) {
            current_item = this;
            // close all visible divs with the class of .section
            //$('.section:visible #shell').slideToggle();
            $('.section:visible').fadeOut(section_hide_time, function () {
                $('a', '.mainmenu').removeClass('active');
                $(current_item).addClass('active');
                var new_section = $($(current_item).attr('href'));
                new_section.fadeIn(section_show_time);
            });
        }
        return false;
    });

    /* Downloads 2 GA */
    var baseHref = '';
    if ($('base').attr('href') != undefined)
        baseHref = $('base').attr('href');
    $('a.btn-download').each(function () {
        var href = $(this).attr('href');
        if (href && href.match(/\.zip$/i)) {
            $(this).click(function () {
                var filename = href.replace(/^.*[\\\/]/, '');
                ga('send', 'event', 'Download', filename);
                if ($(this).attr('target') != undefined && $(this).attr('target').toLowerCase() != '_blank') {
                    setTimeout(function () {
                        location.href = baseHref + href;
                    }, 200);
                    return false;
                }
            });
        }
    });




});