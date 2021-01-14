// @ts-nocheck
"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const _ = require("lodash");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the super ${chalk.red("opc-generator")} generator!`)
    );

    const prompts = [
      {
        type: "input",
        name: "componentName",
        message: "Component Name? ",
        default: "opc-my-component"
      },
      {
        type: "input",
        name: "componentDescription",
        message: "Briefly Describe your component: ",
        default: "Web component based on lit-html"
      },
      {
        type: "input",
        name: "authorName",
        message: "Author Name: ",
        default: this.user.git.name()
      },
      {
        type: "input",
        name: "authorEmail",
        message: "Author Email: ",
        default: this.user.git.email()
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props
      this.props = props;
    });
  }

  writing() {
    this.props = {
      ...this.props,
      authorName: this.props.authorName.trim(),
      authorEmail: this.props.authorEmail.trim(),
      componentName: this.props.componentName
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase(),
      componentClass: _.chain(this.props.componentName)
        .camelCase()
        .upperFirst()
        .value()
    };
    if (!this.props.componentName.startsWith("opc-")) {
      this.props.componentName = `opc-${this.props.componentName}`;
    }

    this.fs.copyTpl(
      `${this.templatePath()}/!(_)*`,
      this.destinationPath(`${this.props.componentName}/`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("src/_style.scss"),
      this.destinationPath(
        `${this.props.componentName}/src/${this.props.componentName}.scss/`
      ),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("src/_index.ts"),
      this.destinationPath(
        `${this.props.componentName}/src/${this.props.componentName}.ts/`
      ),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("demo/_story.js"),
      this.destinationPath(
        `${this.props.componentName}/demo/${this.props.componentName}.stories.js/`
      ),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("test/_test.ts"),
      this.destinationPath(
        `${this.props.componentName}/test/${this.props.componentName}.test.ts/`
      ),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath("demo/index.html"),
      this.destinationPath(`${this.props.componentName}/demo/index.html`),
      this.props
    );
    this.fs.copy(
      this.templatePath("_.npmignore"),
      this.destinationPath(`${this.props.componentName}/.npmignore`),
      this.props
    );
  }

  install() {
    process.chdir(this.props.componentName);
    this.npmInstall();
  }

  end() {
    this.spawnCommand("npm", ["run", "build"]);
  }
};
