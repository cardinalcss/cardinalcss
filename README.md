# Cardinal

Cardinal is a small, “[mobile first](http://cbrac.co/116bQqk)” CSS framework with some useful default styles, scalable typography, reusable modules, and a simple responsive grid system.

## What does that mean?

“[Mobile first](http://www.lukew.com/resources/mobile_first.asp)”, a phrase coined by Luke Wroblewski [in 2009](http://www.lukew.com/ff/entry.asp?933), is a strategy for web development that focuses on building the mobile experience of a web application first, and [progressively enhancing](http://en.wikipedia.org/wiki/Progressive_enhancement) the application for users with larger devices, better browsers, and greater bandwidth.

The idea is that if you design for the smallest devices (and least capable browsers) first, it forces you to prioritize and determine what are the most important data and actions in your application. The end result is an application that is focused on the key tasks a user is supposed to complete, without the extraneous content and interface fluff that plagues many applications that take a top-down, “PC first” approach.

## Who should use this?

Designers and developers who want to build well-organized, responsive web applications *without losing their minds* should use Cardinal.

The purpose of this framework is to make it easier to rapidly prototype, build, scale, and maintain CSS for responsive web applications. Cardinal omits many aesthetic design decisions often bog down larger, more complicated CSS frameworks, leaving the design and creativity up to you.

Instead of deleting portions of a framework that you don’t need, you start with a solid foundation that you can customize and build upon.

## Table of contents

What follows is a detailed breakdown of the framework.

1. [Overview](#overview)
2. [Class-naming conventions](#class-names)
3. [Base](#base)
4. [Typography](#typography)
5. [Non-typography](#non-typography)
6. [Grids](#grids)
7. [Modules](#modules)
8. [Main](#main)
9. [Helpers](#helpers)
10. [Print](#print)
11. [Javascript](#js)
12. [Browser support](#browsers)

## <a name="overview"></a>Overview

Cardinal’s main goal is readable typography and layout that can be scaled globally for a wide range of devices. It uses a combination of [modular scale](http://alistapart.com/article/more-meaningful-typography), [unit-less line heights](http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/), and [REM units](http://snook.ca/archives/html_and_css/font-size-with-rem) so that all the typography and layout elements can be scaled up or down, proportionally.

## <a name="class-names"></a>Class-naming conventions

Cardinal uses simple naming conventions for CSS classes that are human readable and easier for developers to interpret. While inspired by the [BEM approach](http://bem.info/method/definitions/), the class-naming conventions used in Cardinal are far less complex.

	.block_name              {} /* Block */
	.block_name-element_name {} /* Element */
	.modifier_name           {} /* Modifier */

Use hyphens to separate the name of the block from the name of the element, and use underscores to separate words in long names. Here is an example of a simple “post” block:

### Example

	.post         {} /* Block */
	.post-image   {} /* Element */
	.post-title   {} /* Element */
	.post-date    {} /* Element */
	.post-excerpt {} /* Element */
	.post.last    {} /* Modifier */

## <a name="base"></a> Base

Instead of a traditional CSS reset, Cardinal includes a minified version of [normalize.css](http://cbrac.co/11gtlnj) by [Nicolas Gallagher](http://cbrac.co/10l8rJQ) to help render HTML elements more consistently across modern browsers, as well as IE9 and above.

Cardinal also declares some useful default styles on the `<html>` and `<body>` elements to get them to play nice across browsers. It also includes basic styles for text selections, and applies `box-sizing: border-box;` to [everything](http://gifboop.com/border-box.jpg) to fix the [flawed CSS box model](http://paulirish.com/2012/box-sizing-border-box-ftw/).

## <a name="typography"></a> Typography

As mentioned above, Cardinal uses a combination of modular scale, unit-less line-heights, and `rem` units so that it is easy to scale the type and layout across an entire project. It’s built so that you do not have to keep track of cascading `em` values in order make a web application that is flexible, zoom-friendly, and pixel precise when needed.

In order to achieve this scalability, the `font-size` property on the `<html>` element is **first** set as a percentage value.

**Next**, the `font-size` property on the `<body>` element is set as `1rem`, which inherits the percentage declaration on the `<html>` element as the root font size for your entire project.

With media queries, you can then change the `font-size` property on the `<html>` element to a different percentage value, depending on the width of the device/viewport. This changes the root font size of the entire project, so that any other CSS values using the `rem` unit will scale accordingly.

Following a “[mobile first](http://cbrac.co/116bQqk)” approach, Cardinal starts with small devices and cascades up to desktop and larger screen resolutions.

### Scalability with REMs and unit-less line heights

The root font size is first set to a value that feels comfortable on small feature phones (mobile devices with a viewport width < 320px).

	html { font-size: 75%; }

Then, using media queries, Cardinal increases the root font size percentage value at a few common viewport widths. **You can tweak these media queries and percentage values to suit your project.** This is how the typography and page layout scale globally.

	@media only screen and (min-width: 320px) { html { font-size: 81.25%; } } /* 13px */
	@media only screen and (min-width: 480px) { html { font-size: 87.5%;  } } /* 14px */
	@media only screen and (min-width: 768px) { html { font-size: 100%;   } } /* 16px */
	@media only screen and (min-width: 960px) { html { font-size: 112.5%; } } /* 18px */

After the root font size is declared for different viewport widths, the `font-size` property on the `<body>` element is set to `1rem`, and the `line-height` property is given a unit-less value.

	body {
		color: #444;
		font-size: 1rem;
		font-family: "Helvetica Neue", sans-serif;
		line-height: 1.5;
	}

In other words, `1rem` = the percentage on the `<html>` element, which is why all the `rem` units in your application scale when that initial percentage value changes at different viewport widths.

### Bye bye, baseline grid

**Instead of trying to maintain a [baseline grid](http://coding.smashingmagazine.com/2012/12/17/css-baseline-the-good-the-bad-and-the-ugly/)**, Cardinal uses a unit-less value for the `line-height` property on the `<body>` element, and other common typographical elements. A unit-less value is used on other common typographical elements in Cardinal too, like headings. This means that the line height is calculated as a multiple of the root font size, so it scales proportionally too when the root font size changes at different viewport widths.

### Modular scale FTW!

By default, Cardinal’s root font size ranges from `12px` to `18px`,  depending on the viewport width. A [modular scale](http://alistapart.com/article/more-meaningful-typography) is then [calculated](http://modularscale.com/scale/?px1=12&px2=18&ra1=1.333&ra2=0) with [this tool](http://modularscale.com) based on the minimum and maximum root font size values (in pixels), and uses the “perfect fourth” ratio (1:1.333) found commonly in music to generate values that can be used for sizing type and layout elements across the project. *The values in the second column entitled “Ems” are the values you want to use.*

### Pixel precision

If you need pixel precision for a particular element or property (eg. 1px border width on menu buttons), simply use the `px` unit instead of the `rem` unit and it **will not** be affected by the root font size.

## <a name="non-typography"></a> Non-typography

There are also some sensible default styles for non-typographical elements included with Cardinal. For instance, all `<img>` and `<video>` tags are given fluid properties, and `<textarea>` elements are restricted to vertical resizing only.

	img,
	video {
		max-width: 100%;
		width: auto\9;
		height: auto !important;
	}

	textarea {
		resize: vertical;
	}

## <a name="grids"></a> Grids

Inspired by the clever ideas of [Matt Berridge](http://cbrac.co/XYCKo9), Cardinal’s grid system uses *fluid* item widths and *fixed* gutters. Grid items can be divided into halves, thirds, fourths, fifths, or sixths. Nesting grid elements is a breeze, and you can change how a grid item behaves with human-readable CSS classes.

The item widths have percentage values, and the gutters have `rem` values. Due to the change in the root font size ([as described above](#typography)), the fixed gutters increase or decrease proportionally, depending on the width of the viewport.

The classes for default item widths are not grid-specific, **on purpose**, so that they can be used on any element in your project.

### Usage

- `.grid` - element becomes a grid wrapper.
- `.grid-item` - element becomes a grid item.
- `.one_half`, `.two_thirds`, etc - element becomes a specific width of its parent.
- `.lap-*` - element’s width changes on devices you hold in your lap.
- `.desk-*` - element’s width changes on desktop devices.

### Example

The following example can be described as: “a grid with four 100% width items, which become 50% width items on lap devices, and 25% width items on desktop devices.”

	<div class="grid">
		<div class="grid-item lap-one_half desk-one_fourth"></div>
		<div class="grid-item lap-one_half desk-one_fourth"></div>
		<div class="grid-item lap-one_half desk-one_fourth"></div>
		<div class="grid-item lap-one_half desk-one_fourth"></div>
	</div>

## <a name="modules"></a> Modules

Cardinal also includes some reusable classes for common layout modules like page wrappers, content wells, and 100% width containers.

### Strips

	.strip {}

A strip is useful when you want a background color, image, or content to span the entire width of the viewport.

### Wrappers

	.wrapper {}

A wrapper provides a `max-width` for the content within it, and centers the content.

### Islands

	.island {}

An island is a content block that you want to appear raised above its surrounding area.

### Wells

	.well {}

A well is a content block that you want to appear sunken underneath its surrounding area.

## <a name="main"></a> Main

This is where you put all of your uber-clever styles for your application/website/whatever!

## <a name="helpers"></a> Helpers

A bunch of helpers from the fantastic [HTML5 Boilerplate](http://cbrac.co/Zt9YqM) are included here, along with some custom helpers for floats, margins, paddings, and text alignment.

	/* Floats */
	.float_left  { float: left;  }
	.float_right { float: right; }
	.float_none  { float: none;  }

	/* Margins */
	.margin_top    { margin-top: 1rem !important;    }
	.margin_left   { margin-left: 1rem !important;   }
	.margin_bottom { margin-bottom: 1rem !important; }
	.margin_right  { margin-right: 1rem !important;  }
	.margin_none   { margin: 0 !important;           }

	/* Paddings */
	.padding_top    { padding-top: 1rem !important;    }
	.padding_left   { padding-left: 1rem !important;   }
	.padding_bottom { padding-bottom: 1rem !important; }
	.padding_right  { padding-right: 1rem !important;  }
	.padding_none   { padding: 0 !important;           }

	/* Text alignment */
	.text_left    { text-align: left;    }
	.text_right   { text-align: right;   }
	.text_center  { text-align: center;  }
	.text_justify { text-align: justify; }

## <a name="print"></a> Print

This was also copy and pasted directly from [HTML5 Boilerplate](http://cbrac.co/Zt9YqM), and inlined to avoid an extra HTTP request.

## <a name="js"></a> Javascript

Pulled from the [HTML5 Boilerplate](http://cbrac.co/Zt9YqM), the `plugins.js` file includes is a small function to avoid console errors in browsers that lack a console.

## <a name="browsers"></a> Browser support

Cardinal supports most modern browsers (Chrome, Mozilla Firefox, Safari, Opera, IE9+). For a quick look at device support for the `rem` unit, [visit here](http://caniuse.com/#search=rem).