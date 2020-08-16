({
    baseUrl: '.',
    out: 'dist/<%= name %>.js',
    optimize: '<%= optimize %>',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/<%= constr %>"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if(typeof module === 'object' && module.exports) { \n" +
        "\t\t module.exports = factory(); \n " +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/<%= constr %>'); \n" +
        "}));"
    },
     paths:{
       
    }
})