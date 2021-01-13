/*!
 * IMG Hover v0.0.1
 *
 * A tiny jQuery plugin for adding hover effects to images
 * Created by Taylor DiPentino <taylor@dipentino.xyz>
 *
 * Licensed under the MIT license, see README.md for more
 * 
 * https://github.com/taylordipentino/imghover
 */
;(function() {
    'use strict';

    // We cannot continue without jQuery
    if (window.jQuery === undefined) {
        throw "jQuery is not loaded! IMG Hover requires jQuery to work.";
    }

    // The jQuery instance
    var $ = window.jQuery;

    // The unique ID for the image's wrapper div
    var id = null;

    // Events to use for listeners
    var events = {};

    /**
     * Generate a unique (enough) ID.
     */
    function generateId() {
        id = 'imghover_';
        for (var i = 0; i < 16; i++) {
            var r = Math.random() * 16 | 0, 
                v = (r & 0x3 | 0x8);
            id += v.toString(16);
        }
    }

    /**
     * Generate the ID and create the wrapper.
     *
     * @param {object} target
     * @param {object|false} size
     */
    function initWrapper(target, size) {
        // Generate the id
        generateId();

        // Create the wrapper div
        $(target).wrap('<div id="' + id + '"></div>')

        var containerStyles = {};
        // Same image styling regardless
        var imageStyles = {
            'width': '100%',
            'height': '100%',
            'overflow': 'hidden'
        };

        // Wrapper max dimensions and overflow
        if (size === false) {
            // Default styling
            containerStyles = {
                'max-width': '100%',
                'max-height': 'auto',
                'width': '100%',
                'height': 'auto',
                'overflow': 'hidden'
            };
        }
        else if (typeof size === 'object') {
            // Explicit styling
            containerStyles = {
                'max-width': size.width,
                'max-height': size.height,
                'width': size.width,
                'height': size.height,
                'overflow': 'hidden'
            };
        }

        // Apply the styles
        $('#' + id).css(containerStyles).find('img').css(imageStyles);
    }

    /**
     * Apply a border radius to the image and the wrapper. 
     *
     * @param {object} target 
     * @param {string} radius 
     */
    function radius(target, radius) {
        // Apply the radius to both the image and the wrapper
        $(target).css('border-radius', radius); 
        $('#' + id).css('border-radius', radius); 
    }

    /**
     * Apply the zoom effect.
     *
     * @param {object} target
     * @param {float} scale
     */
    function zoom(target, scale) {
        // Target transition
        $(target).css('transition', 'transform 200ms ease-out'); 

        // Apply the appropriate transform for each event
        $(target)
            .on(events.start, function() {
                $(target).css('transform', 'scale(' + scale + ')');
            })
            .on(events.end, function() {
                $(target).css('transform', 'scale(1)');
            });
    }

    /**
     * Apply the grow effect.
     *
     * @param {object} target
     * @param {float} scale
     */
    function grow(target, scale) {
        // We need to get the ID directly from the parent
        var parent = '#' + $(target).parent().attr('id');

        // Target transition
        $(target).css('transition', 'transform 200ms ease-out'); 
        $(parent).css('transition', 'transform 200ms ease-out'); 

        // Apply the appropriate transform for each event
        $(target)
            .on(events.start, function() {
                $(target).css('transform', 'scale(' + scale + ')');
                $(parent).css('transform', 'scale(' + scale + ')');
            })
            .on(events.end, function() {
                $(target).css('transform', 'scale(1)');
                $(parent).css('transform', 'scale(1)');
            });
    }

    /**
     * Main plugin definition.
     *
     * @param {object} options
     * @returns {object} dfsdsfsdf
     */
    $.fn.imgHover = function(options) {
        // Merge default and custom options
        var options = $.extend({
            size: false,
            radius: false,
            grow: true,
            growScale: 1.05,
            zoom: true,
            zoomScale: 1.1,
            touch: true,
        }, options);

        events = {
            start: 'mouseenter',
            end: 'mouseleave'
        };

        // Check if touch events should be used
        if (options.touch === true) {
            events.start += ' touchstart';
            events.end += ' touchend';
        }

        // Only apply effects to images
        this.filter('img').each(function() {
            // Initialize the wrapper
            initWrapper(this, options.size);

            // Apply the radius
            if (options.radius !== false) {
                radius(this, options.radius);
            }

            // Add the grow effect
            if (options.grow === true) {
                grow(this, options.growScale);
            }

            // Add the zoom effect
            if (options.zoom === true) {
                zoom(this, options.zoomScale);
            }
        });

        return this;
    };
})();
