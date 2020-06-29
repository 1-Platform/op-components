'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fs = require( 'fs' );

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the super ${chalk.red('generator-opc-generator')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'elementName',
        message: 'What would you like to call your element? ',
        default: 'my-element'
      },
      {
        type: 'input',
        name: 'authorName',
        message: 'Please enter the author name: '
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const elementName = this.props.elementName;

    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(`${elementName}/`),
      this.props
    );
  }

  install () {

    // this.installDependencies( {
    //   npm: true,
    //   bower: false,
    //   yarn: false
    // } );
  }
};
