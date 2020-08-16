({
    baseUrl: '.',
    out: 'dist/<%= name %>.js',
    optimize: '<%= optimize %>',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/<%= constr %>"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else if(typeof module === 'object' && module.exports) { \n" +
        "\t\t module.exports = factory(); \n " +
        "\t} else { \n" +
        "\t \troot.<%= constr %> = root.<%= constr %> || {}; \n" +
        "\t \troot.<%= constr %> = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/<%= constr %>'); \n" +
        "}));"
    },
     paths:{
       
    },
    stubModules: ["css", "text", "normalize", "css-builder"]
})