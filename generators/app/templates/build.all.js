({
    baseUrl: '.',
    out: 'dist/<%= name %>.js',
    optimize: '<%= optimize %>',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/<%= constructor %>"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else if(typeof module === 'object' && module.exports) { \n" +
        "\t\t module.exports = factory(); \n " +
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
       
    },
    stubModules: ["css", "text", "normalize", "css-builder"]
})