'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  // constructor: function() {
  //   yeoman.Base.apply(this, arguments);

  //   // inside your generator's constructor
  //   this.on('end', function () {
  //     this.installDependencies({
  //       skipInstall: options['skip-install'],
  //       bower: false
  //     });
  //   });
  // },

  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-vscode-typescript-mocha-wallaby') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Enter project name',
      default: this.appname
    }, {
      type: 'input',
      name: 'author',
      message: 'Enter author name'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var files = [{
      src: '_.gitignore',
      dst: '.gitignore'
    }, {
      src: '_package.json',
      dst: 'package.json',
      props: {
        name: this.props.name.toLowerCase(),
        author: this.props.author
      }
    }, {
      src: '_tsconfig.json',
      dst: 'tsconfig.json'
    }, {
      src: '_tslint.json',
      dst: 'tslint.json'
    }, {
      src: '_typings.json',
      dst: 'typings.json'
    }, {
      src: '_wallaby.js',
      dst: 'wallaby.js'
    }, {
      src: '_.vscode/_settings.json',
      dst: '.vscode/settings.json'
    }, {
      src: '_test/_mocha.opts',
      dst: 'test/mocha.opts'
    }, {
      src: '_src/_app.ts',
      dst: 'src/app.ts'
    }, {
      src: '_src/_app.spec.ts',
      dst: 'src/app.spec.ts'
    }];

    files.forEach(function(file) {
      if (file.props) {
        this.fs.copyTpl(
          this.templatePath(file.src),
          this.destinationPath(file.dst),
          file.props
        );
      } else {
        this.fs.copy(
          this.templatePath(file.src),
          this.destinationPath(file.dst)
        );
      }
    }.bind(this));
  },

  install: function () {

    this.installDependencies({
      bower: false,
      npm: true,
      callback: function () {
        console.log('Everything is ready!');
      }
    });
  }
});
