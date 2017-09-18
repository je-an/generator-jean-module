({
    baseUrl: '.',
    out: 'dist/<%= constructor %>.js',
    optimize: '<%= optimize %>',
    include: ["node_modules/almond/almond", "src/<%= constructor %>"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else { \n" +
        "\t \troot.<%= constructor %> = root.<%= constructor %> || {}; \n" +
        "\t \troot.<%= constructor %> = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/<%= constructor %>'); \n" +
        "}));"
    },
     paths:{
       
    }
})