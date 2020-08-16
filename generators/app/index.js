'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
var mkdirp = require('mkdirp');
var path = "";
// In your generator


module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    console.log("Start");
    this.log(yosay(
      'Welcome to the ' + chalk.red('jean-module') + ' generator123!'
    ));

    const prompts = [{
      type: 'list',
      name: "type",
      message: "All Plattforms, CommonJS or AMD + Global variable ? ",
      choices: ["All", "CommonJS", "AMD + Global variable"],
      default: "All"
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the name of this module: ",
      default: ""
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe the functionality of this module: ',
      default: "Please provide additional information"
    },
    {
      type: 'input',
      name: 'constr',
      message: 'What is the name of this modules main class: ',
      default: ""
    }, {
      type: 'list',
      name: "optimize",
      message: "Would you like to optimize your module for build process: ",
      choices: ["none", "uglify2"],
      default: "none"
    },
    {
      type: 'list',
      name: "example",
      message: "Would you like to add an example playground: ",
      choices: ["yes", "no"],
      default: "no"
    }];
    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    // TODO: Erzeugung eines Ordners und Kopieren der Daten dort rein.
    var keywords = [];
    var args = {
      name: this.props.name,
      description: this.props.description,
      keywords: JSON.stringify(keywords),
      optimize: this.props.optimize,
      constr: this.props.constr,
      type: this.props.type,
      example: this.props.example
    };
    path = this.props.constr;
    console.log("writing: " + path);
    mkdirp.sync(path);
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath(path + '/package.json'),
      args
    );
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath(path + '/README.md'),
      args
    );
    this.fs.copyTpl(
      this.templatePath('_LICENSE.md'),
      this.destinationPath(path + '/LICENSE.md'),
      args
    );
    this.fs.copyTpl(
      this.templatePath('gitignore'),
      this.destinationPath(path + '/.gitignore'),
      args
    );
    switch (args.type) {
      case "All":
        this.fs.copyTpl(
          this.templatePath('build.all.js'),
          this.destinationPath(path + '/build.js'),
          args
        );
        break;
      case "CommonJS":
        this.fs.copyTpl(
          this.templatePath('build.backend.js'),
          this.destinationPath(path + '/build.js'),
          args
        );
        break;
      case "AMD + Global variable":
        this.fs.copyTpl(
          this.templatePath('build.frontend.js'),
          this.destinationPath(path + '/build.js'),
          args
        );
        break;
    }
    var specPath = path + "/spec";
    mkdirp.sync(specPath);
    this.fs.copyTpl(
      this.templatePath('spec/_.spec.js'),
      this.destinationPath(specPath + '/' + args.constr + '.spec.js'),
      args
    );
    this.fs.copyTpl(
      this.templatePath('spec/_spec-runner.html'),
      this.destinationPath(specPath + '/spec-runner.html'),
      args
    );
    var srcPath = path + "/src";
    mkdirp.sync(srcPath);
    this.fs.copyTpl(
      this.templatePath('src/_.js'),
      this.destinationPath(srcPath + '/' + args.constr + '.js'),
      args
    );

    if (args.example === "yes") {
      var examplePath = path + "/example",
        imgPath = examplePath + "/img",
        libPath = examplePath + "/lib";
      mkdirp.sync(examplePath);
      mkdirp.sync(libPath);
      this.fs.copyTpl(
        this.templatePath('example/index.html'),
        this.destinationPath(examplePath + '/index.html'),
        args
      );
      this.fs.copyTpl(
        this.templatePath('example/index.js'),
        this.destinationPath(examplePath + '/index.js'),
        args
      );
      this.fs.copyTpl(
        this.templatePath('example/require.config.js'),
        this.destinationPath(examplePath + '/require.config.js'),
        args
      );
      this.fs.copy(
        this.templatePath("example/lib"),
        this.destinationPath(libPath)
      );
      this.fs.copy(
        this.templatePath("example/img"),
        this.destinationPath(imgPath)
      );
    }
    var elementDir = process.cwd() + '/' + path;
    process.chdir(elementDir)
    this.installDependencies({
      bower: false,
      npm: true,
      callback: function () {
        console.log('Everything is ready!');
      }
    });
  }
};
