({
    baseUrl: "./",
    appDir: "../src/",
    dir: "../dist",
    modules: [
        {
            name: "main"
        },
        {
            // create a module for page1/main and include in it
            // all its dependencies (dep1, dep2, loadtemplate)
            name: "page1/main",
            // excluding any dependency that is already included on main module
            exclude: ["main"]
        }
    ],
    paths: {
        // libraries path
        "json": "vendor/json2/json2",
        "jquery": "vendor/jquery/jquery.min",
        "util": "vendor/lodash/dist/lodash.min",
        "bootstrap": "vendor/bootstrap/dist/js/bootstrap.min",
        "backbone": "vendor/backbone/backbone-min",
        "hogan": "vendor/hogan/web/builds/2.0.0/hogan-2.0.0.amd",

        // require plugins
        "css": "lib/require.css",
        "templ": "vendor/requirejs-hogan-plugin/hgn",
        "text": "vendor/requirejs-text/text"
    }
})