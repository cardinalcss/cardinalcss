<a href="http://cardinalcss.com">
	<img src="http://cardinalcss.com/img/logo.png" width="150px">
</a>

# Cardinal - 0.3.7

Cardinal is a small, “[mobile first](http://cbrac.co/116bQqk)” CSS framework with some useful default styles, scalable typography, reusable modules, and a simple responsive grid system.

* [Read the documentation](http://cardinalcss.com)
* [View progress on Pivotal Tracker](https://www.pivotaltracker.com/s/projects/803361)

### What does that mean?

This framework is for building responsive web applications. It’s not meant to be simply “bolted on” to a project like [Twitter Bootstrap](http://getbootstrap.com) or [Zurb’s Foundation](http://foundation.zurb.com); it’s a starting point that you will want to customize and build upon to suit your application or project.

Cardinal provides a new approach to scaling web typography and layout across multiple devices. It places **little emphasis on pixel-precision**, but does not restrict its usage. Instead, Cardinal leverages the power of the `rem` unit to make it simpler to scale the type and layout of **the entire application** for different devices.

### Who should use this?

Designers and developers who want to build well-organized, responsive web applications *without losing their minds* should use Cardinal.

The purpose of this framework is to make it easier to rapidly prototype, build, scale, and maintain CSS for responsive web applications. Cardinal omits many aesthetic design decisions often bog down larger, more complicated CSS frameworks, leaving the design and creativity up to you.

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

I realize that for many web applications, IE8 cannot be ignored. By including the [REM unit polyfill](https://github.com/chuckcarpenter/REM-unit-polyfill) and Scott Jehl’s [Respond.js](https://github.com/scottjehl/Respond), Cardinal should work in IE8, but you will lose the scalable layout and typography because the REM unit polyfill converts all the `rem` values to pixels.

A better option might be to include an IE-only stylesheet that serves a “fixed-layout” version of your application, instead of bothering with polyfills and other bandaid solutions.

## Known issues

### “display: inline-block” whitespace hack

- [More info here](http://css-tricks.com/fighting-the-space-between-inline-block-elements/)

Since the `.grid-item` class uses `display: inline-block;` instead of floats, the `font-size: 0;` hack is used on the `.grid` element to remove the white space between `.grid-item` elements in modern browsers. However, this hack does not work in older versions of Safari, Android, and Internet Explorer (Safari < 6, Android < 4.2, IE8 and below).

If you need to support these older browsers, simply remove the white space in between each .grid-item manually, in the HTML, like so:

	<div class="grid">
		<div class="grid-item lap-one_half desk-one_fourth"></div
		><div class="grid-item lap-one_half desk-one_fourth"></div
		><div class="grid-item lap-one_half desk-one_fourth"></div
		><div class="grid-item lap-one_half desk-one_fourth"></div>
	</div>

**Alternatively**, if you use a build process (and you should) to minify your HTML for the production/live site, then the problematic white space is removed anyways. This way you can keep your HTML syntax normal in your development environment, and support a few more legacy browsers on the live site.

### Google Maps

- [More info here](https://github.com/cbracco/cardinal/issues/6)

Cardinal defines all images to have `max-width: 100%`, which can interfere with the Google Maps “info window.” To fix this issue, you must change `100%` to `none` for all images inside your Google Maps, like so:

	img[src*="gstatic.com/"],
	img[src*="googleapis.com/"] {
		max-width: none;
	}

### box-sizing: border-box; in IE9

There is a bug in IE9 (big suprise) when `box-sizing: border-box;`, `position: fixed;`, and `overflow: auto;` are declared on the same element. The scrollbar’s width is subtracted twice, making the element’s width incorrect. I came across this bug while making the off-canvas navigation for this project’s [documentation website](http://cardinalcss.com).

To fix this, simply change the element’s `box-sizing` value to `content-box` instead of `border-box`, and voila.

## Installing

* [Download it](https://github.com/cbracco/Cardinal/archive/master.zip)

There is a minified version of Cardinal that is included in the `css/` directory of this project, but I would recommend developing with the uncompressed version and using your own build process to minify your CSS for production. That way you only have one HTTP request, and you aren’t just slapping Cardinal onto your project (which sort of defeats the purpose of using the framework, anyways).

## Getting started

You can [read the full documentation](http://cardinalcss.com) to get started. It provides detailed explanations and examples. These docs will improve over time, but there is plenty of information already there to digest.

## Versioning

Cardinal will be maintained using the [Semantic Versioning](http://semver.org/) guidelines as best I can. From here on out, releases will be numbered using the following format:

`major.minor.patch`

* Breaking backwards compatibility increments `major`, while resetting `minor` and `patch`.
* New code that does not break backwards compatibility increments `minor`, while resetting `patch`.
* Bug fixes and other small changes increment `patch`.

## Contributing

Find something broken? Have ideas or feature requests? Please [submit an issue](https://github.com/cbracco/Cardinal/issues/new) here on Github. Or, if you are feeling especially motivated, write some code and submit a pull request!

When doing so, please checkout a new feature branch, and submit your pull request from it. Do not submit pull requests from your `master` branch. Please and thank you.

## Colophon

Cardinal is a project by [Chris Bracco](http://cbracco.me). Illustration by [Justin Varberakis](http://twitter.com/varberakis).
