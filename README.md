# Cardinal - 2.4.0

Cardinal is a small “[mobile first](http://cbrac.co/116bQqk)” CSS framework for front-end developers who build responsive web applications.

* [Download it](https://github.com/cbracco/cardinal/archive/master.zip)
* [Read the documentation](http://cardinalcss.com)
* [Review the CHANGELOG](https://github.com/cbracco/cardinal/blob/master/CHANGELOG.md)
* [Track the progress](https://www.pivotaltracker.com/s/projects/803361)

### What does that mean?

The purpose of this framework is to make it easier to rapidly prototype, build, scale, and maintain CSS for responsive web applications. Cardinal omits many aesthetic design decisions often bog down larger, more complicated CSS frameworks, leaving the design and creativity up to you.

Cardinal focuses on performance, accessibility, and readability first. It’s a starting point with a minimal file structure and useful CSS styles that you will want to customize and build upon to suit your application or project.

### Who should use this?

Front-end web developers who want to build well-organized, responsive web applications *without losing their minds* should use Cardinal.

The purpose of this framework is to make it easier to rapidly prototype, build, scale, and maintain CSS for responsive web applications. Cardinal omits many aesthetic design decisions often bog down larger, more complicated CSS frameworks, leaving the design and creativity up to you.

## Installation

* [Download it](https://github.com/cbracco/cardinal/archive/master.zip)

## Documentation

You can [read the documentation site](http://cardinalcss.com) to help you get started. It provides detailed explanations, examples, and known issues. The site itself is a demo!

## LESS Support / Grunt build script

As of version 2.1.0, **Cardinal supports the LESS preprocessor** (thanks [@brandonb927](https://github.com/brandonb927)), and includes **a simple [Grunt](http://gruntjs.com/) build process** to compile and minify CSS/JS files.

If you want to use Grunt to compile your LESS code, you must have Node, Grunt, and Grunt’s dependencies already installed on your machine.

```bash
npm install && npm install -g grunt-cli
```

To compile your LESS files and watch for future changes, simply run the `grunt` command from the root directory of your project. This will build and output your LESS code with proper vendor prefixes to the `dist/` directory.

Run the `grunt dist` command to compile and minify your finished code to the `dist/` directory.

## Browser support

Cardinal supports most modern browsers:

* Google Chrome 25+
* Mozilla Firefox 19+
* Safari 6.0+
* iOS Safari 4.0+
* Opera 12.1+
* Android 4.2+
* Internet Explorer 9+

### What about IE8?

I realize that for many web applications, IE8 and below cannot be ignored. By including the [REM unit polyfill](https://github.com/chuckcarpenter/REM-unit-polyfill) and Scott Jehl’s [Respond.js](https://github.com/scottjehl/Respond), Cardinal should work in IE8.

A better option might be to include an IE-only stylesheet that serves a “fixed-layout” version of your application, instead of bothering with polyfills and other band-aid solutions.

## Versioning

Cardinal will be maintained using the [Semantic Versioning](http://semver.org/) guidelines. From here on out, releases will be numbered using the following format:

`major.minor.patch`

* Breaking backwards compatibility increments `major`, while resetting `minor` and `patch`.
* New code that does not break backwards compatibility increments `minor`, while resetting `patch`.
* Bug fixes and other small changes increment `patch`.

## Contributing

Is something broken? Do you have ideas or feature requests? Please [submit an issue](https://github.com/cbracco/Cardinal/issues/new) here on GitHub. Or, if you are feeling especially motivated, write some code and submit a pull request!

**IMPORTANT**: Before doing a bunch of work, please consult the [CONTRIBUTING.md document](https://github.com/cbracco/cardinal/blob/master/CONTRIBUTING.md), which gives detailed instructions on how to contribute to this project. If you do not follow the instructions, your code will probably not make it into this project.

## License

Cardinal is licensed under the MIT Open Source license. For more information, see the [LICENSE.md](https://github.com/cbracco/cardinal/blob/master/LICENSE.md) file in this repository.

## Colophon

Cardinal is a project by [@cbracco](http://twitter.com/cbracco).
