"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-opc-generator:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ someAnswer: true });
  });

  it("has tsconfig file", () => {
    assert.file(["tsconfig.json"]);
  });

  it("has package.json file", () => {
    assert.file(["package.json"]);
  });

  it("has webpack config file", () => {
    assert.file(["webpack.config.js"]);
  });

  it("has README file", () => {
    assert.file(["README.md"]);
  });

  it("has index.html file in the dist folder", () => {
    assert.file(["dist/index.html"]);
  });

  it("has index.ts file src folder", () => {
    assert.file(["src/index.ts"]);
  });
});
