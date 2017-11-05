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
    this.log(yosay(
      'Welcome to the ' + chalk.red('jean-module') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'name',
      message: "What is the name of this module: ",
      default: ""
    }, {
      type: 'input',
      name: 'description',
      message: 'Describe the functionality of this module: ',
      default: "Please provide additional information"
    }/* , {
      type: 'input',
      name: 'keywords',
      message: 'Describe this module with keywords (Splitted by comma): ',
      default: ""
    } */,
    {
      type: 'input',
      name: 'constructor',
      message: 'What is the name of this modules main class: ',
      default: ""
    }, {
      type: 'list',
      name: "optimize",
      message: "Would you like to optimize your module for build process: ",
      choices: ["none", "uglify2"],
      default: "none"
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
      constructor: this.props.constructor
    };
    path = args.constructor;
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
      this.templatePath('.gitignore'),
      this.destinationPath(path + '/.gitignore'),
      args
    );
    this.fs.copyTpl(
      this.templatePath('_build.js'),
      this.destinationPath(path + '/build.js'),
      args
    );
    var specPath = path + "/spec";
    mkdirp.sync(specPath);
    this.fs.copyTpl(
      this.templatePath('spec/_.spec.js'),
      this.destinationPath(specPath + '/' + args.constructor + '.spec.js'),
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
      this.destinationPath(srcPath + '/' + args.constructor + '.js'),
      args
    );
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
