/*jslint browser: true, devel: true */

(function () {
    'use strict';

    requirejs.config({
        baseUrl: ".",
        paths: {
            // libraries path
            "json": "vendor/json2/json2",
            "jquery": "vendor/jquery/jquery.min",
            "util": "vendor/lodash/dist/lodash.min",
            "bootstrap": "vendor/bootstrap/dist/js/bootstrap.min",
            "backbone": "vendor/backbone/backbone-min",
            "hogan": "vendor/hogan/web/builds/2.0.0/hogan-2.0.0.amd",

            // require plugins
            "css": "vendor/require-css/css.min",
            "templ": "vendor/requirejs-hogan-plugin/hgn",
            "text": "vendor/requirejs-text/text"
        },
        shim: {
            "jquery": { exports: "jQuery" },
            "util": { exports: "_" },
            "json": { exports: "JSON" },
            "bootstrap": { deps: ["jquery", "css!assets/css/bootstrap"], exports: "$.fn.transition" },
            "backbone": { deps: ["jquery", "json", "util"], exports: "Backbone" }
        }
    });

    //libs
    require([
        "css",       //require plugins
        "templ",
        "text",
        "json",      //3rd libraries
        "jquery",
        "util",
        "backbone",
        "hogan",
        "css!assets/css/bootstrap",
        "bootstrap",
        "lib/util"  // app lib modules
        ],
        function () {
            var $ = require("jquery"),
            // the startmodule is defined on the same script tag of data-main.
            // example: <script data-main="main.js" data-start="pagemodule/main" src="vendor/require.js"/>
                startModuleName = $("script[data-main][data-start]").attr("data-start");

            if (startModuleName) {
                require([startModuleName], function (startModule) {
                    $(function () {
                        var fn = $.isFunction(startModule) ? startModule : startModule.init;
                        if (fn) { fn(); }
                    });
                });
            }
        });
} ());