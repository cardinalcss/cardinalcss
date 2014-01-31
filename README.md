# Cardinal - 2.1.3

Cardinal is a small “[mobile first](http://cbrac.co/116bQqk)” CSS framework for front-end developers who build responsive web applications.

* [Download it](https://github.com/cbracco/cardinal/archive/master.zip)
* [Read the documentation](http://cardinalcss.com)
* [Review the CHANGELOG](https://github.com/cbracco/cardinal/blob/master/CHANGELOG.md)
* [Track the progress](https://www.pivotaltracker.com/s/projects/803361)

### What does that mean?

This framework includes a minimal file structure and useful CSS styles to kickstart your next responsive web project.

Cardinal focuses on performance, accessibility, and readability first. It’s a starting point that you will want to customize and build upon to suit your application or project.

As of version 2.1.0, **Cardinal supports the LESS preprocessor** (thanks [@brandonb927](https://github.com/brandonb927)), and includes **a simple [Grunt](http://gruntjs.com/) build process** to compile and minify the CSS.

### Who should use this?

Front-end web developers who want to build well-organized, responsive web applications *without losing their minds* should use Cardinal.

The purpose of this framework is to make it easier to rapidly prototype, build, scale, and maintain CSS for responsive web applications. Cardinal omits many aesthetic design decisions often bog down larger, more complicated CSS frameworks, leaving the design and creativity up to you.

## Installation

* [Download it](https://github.com/cbracco/cardinal/archive/master.zip)

## Documentation

You can [read the documentation site](http://cardinalcss.com) to help you get started. It provides detailed explanations, examples, and known issues. The site itself is a demo!

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

## Fix Github Gist rendering

There is an issue with Github Gist that causes the rendering to be alittle wonky. This is caused by the use of REM values and including this snippet in your CSS will fix it:

    /**
     * Fix Github Gist not rendoring correctly
     * 1. Reset margin and width of table used to house code
     * 2. Reset broken font-size from REM units
     */
    .gist {
        .gist-file {
            .gist-data {
                table {
                    margin: 0;       /* 1 */
                    width: auto;     /* 1 */
                    font-size: 13px; /* 2 */
                }
            }
        }
    }

## Versioning

Cardinal will be maintained using the [Semantic Versioning](http://semver.org/) guidelines. From here on out, releases will be numbered using the following format:

`major.minor.patch`

* Breaking backwards compatibility increments `major`, while resetting `minor` and `patch`.
* New code that does not break backwards compatibility increments `minor`, while resetting `patch`.
* Bug fixes and other small changes increment `patch`.

## Developing with [Grunt](http://gruntjs.com/getting-started)

When developing with Cardinal, you can use `grunt` to build the LESS files and output the minified and unminified `main.css` file in the CSS folder.

If you have `node`installed already, then change directories to project root  install `grunt` and `npm`.

	npm install grunt
	npm install -g grunt-cli

When you're in the root directory of the project, run the command `grunt` to compile the LESS files to output the project CSS.

## Contributing

Is something broken? Do you have ideas or feature requests? Please [submit an issue](https://github.com/cbracco/Cardinal/issues/new) here on GitHub. Or, if you are feeling especially motivated, write some code and submit a pull request!

When doing so, **please checkout a new feature branch, and submit your pull request from it.** Do not submit pull requests from your `master` branch. Please and thank you.

## License

Cardinal is licensed under the MIT Open Source license. For more information, see the [LICENSE.md](https://github.com/cbracco/cardinal/blob/master/LICENSE.md) file in this repository.

## Colophon

Cardinal is a project by [Chris Bracco](http://cbracco.me).
