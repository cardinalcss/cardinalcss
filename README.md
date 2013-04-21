# Cardinal

Cardinal is a barebones, “mobile-first” CSS framework with some useful default styles, scalable typography, and a simple responsive grid system.

**Beware:** this is a work in progress. It’s pre-alpha nonsense, but feel free to help out, or watch the progress on [Pivotal Tracker](https://www.pivotaltracker.com/s/projects/803361).

## Introduction

Cardinal is for designers and developers who want to build responsive web applications without losing their minds.

The purpose of this framework is to make it easier to prototype, build, maintain, and scale CSS for responsive web applications. Cardinal omits the aesthetic design decisions that bog down larger, more complicated front-end frameworks, leaving the design and creativity up to you!

This way, instead of deleting portions of a framework that you don't need, you start with a solid foundation that you can customize and build upon.

## Overview

Cardinal's main focus is readable typography and layout that can be scaled globally for a wide range of devices.

It uses a combination of modular scale, unit-less line-heights, and REM units so that all the typography and layout elements can be scaled up or down proportionally.

What follows is a breakdown of the CSS file.

## Table of contents

1. [Reset](#reset)
2. [Base](#base)
3. [Fonts](#fonts)
4. [Typography](#typography)
5. [Non-typography](#non-typography)
6. [Grids](#grids)
7. [Layout](#layout)
8. [Prompts](#prompts)
9. [App](#app)
10. [Helpers](#helpers)
11. [Queries](#queries)
12. [Print](#print)

## <a name="reset"></a> Reset

Instead of a traditional CSS reset, Cardinal includes a minified version of [normalize.css](http://cbrac.co/11gtlnj) by [Nicolas Gallagher](http://cbrac.co/10l8rJQ) to help render HTML elements more consistently across modern browsers, as well as Internet Explorer 8 and above.

## <a name="base"></a> Base

Cardinal declares some useful default styles to the `<html>` and `<body>` elements to get them to play nice across browsers. It also adds basic styles to text selections, and applies `box-sizing: border-box;` to everything to fix the flawed CSS box model.

## <a name="fonts"></a> Fonts

To make adding custom fonts a bit quicker, Cardinal includes an example code snippet for [bulletproof @font-face declarations](http://cbrac.co/U4mSbc), so that you don’t have to worry about looking it up each time you want to use custom fonts in your project.

## <a name="typography"></a> Typography

As mentioned above, Cardinal uses a combination of modular scale, unit-less line-heights, and REM units so that it is easy to scale the type and layout across your entire project. It's built so that you do not have to keep track of complicated decimal `em` values, but can still build a web application that is flexible, zoom-friendly, and pixel precise when needed.

In order to achieve this scalability, the `font-size` property on the `<html>` element is set as a percentage value.

Next, the `font-size` property on the `<body>` element is set as `1rem`, which inherits the percentage declaration on the `<html>` element as the base font size for your entire project.

With media queries, you can then change the `font-size` property on the `<html>` element to a different percentage value, depending on the width of the device/viewport. This changes the base font size of the entire project, so that any other elements using the REM unit will scale proportionally.

Following a "mobile-first" approach, Cardinal starts with small devices and works its way up to desktop and larger screen resolutions.

### Scalability with REMs and unit-less line-heights

The root `font-size` is first set as 75%, or 12px, which feels comfortable on small feature phones (mobile devices with a viewport width less than 320px).

	html { font-size: 75%; }

A fallback for IE8 is included immediately afterwards, which instead sets the root `font-size` to 100%, or 16px, since IE users will likely be using a desktop device of some sort.

	html.lt-ie9 { font-size: 100%; }

Then, using media queries, Cardinal increases the root `font-size` percentage at some common device widths. You can tweak these media queries and percentage values to suit your project. This is how the type and layout scale globally.

	@media only screen and (min-width: 320px) { html { font-size: 81.25%; } }
	@media only screen and (min-width: 480px) { html { font-size: 87.5%;  } }
	@media only screen and (min-width: 768px) { html { font-size: 100%;   } }
	@media only screen and (min-width: 960px) { html { font-size: 112.5%; } }

After the root `font-size` is declared for different device widths, the `font-size` on the `<body>` element is set to `1rem`, and the `line-height` is given a unit-less value.

	body {
		color: #444;
		font-size: 1rem;
		font-family: "Helvetica Neue", sans-serif;
		line-height: 1.777;
	}

In other words, 1rem = the percentage on the `<html>` element, which is why all the `rem` units in your application scale as that base percentage value changes at different device/viewport widths.

Instead of trying to maintain a baseline grid, Cardinal uses unit-less line heights on the `<body>` element and some other common typographical elements. This means that the line height is a multiple of the base font size, so it scales proportionally when the base font size changes.

### Modular scale

By default, Cardinal's root font size ranges from 12px to 18px  depending on the device width/viewport. A [modular scale](http://modularscale.com/scale/?px1=12&px2=18&ra1=1.333&ra2=0) is then calculated with [this tool](http://modularscale.com) based on the minimum and maximum base font-size values, and uses the "perfect fourth" ratio (1:1.333) found commonly in music to generate values that can be used for sizing type and layout elements across the project. **The values in the second column entitled "Ems" are the values you want to use.**

### Pixel precision

If you need pixel precision for a particular element or property (eg. 16px font-size for menu buttons regardless of device or viewport width), simply use the `px` unit instead of the `rem` unit and it will remain constant regardless of the base font size.

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

Based on the clever ideas of Matt Berridge, Cardinal’s grid system uses fluid column widths and fixed column gutters. Nesting grid elements is a breeze, and you can dictate the grid’s behavior by adding CSS classes to items within the grid.

The columns widths are set in percentages, and the gutters are set in REMs. Due to the change in the root font-size above, the fixed gutters increase/decrease proportionally, depending on the width of the viewport.

### Usage

- `.grid` - makes element a grid wrapper.
- `.grid_item` - makes element a grid column.
- `.one_half`,
`.two_thirds`, etc - makes element a specific width of its parent.
- `.lap-*` - grid breakpoint for devices you hold in your lap.
- `.desk-*` - grid breakpoint for desktop devices.

The following example can be described as: “a grid with four 100% width items, which become 50% width items on lap devices, and 25% width items on desktop devices.”

	<div class="grid">
		<div class="grid_item lap-one_half desk-one_fourth"></div>
		<div class="grid_item lap-one_half desk-one_fourth"></div>
		<div class="grid_item lap-one_half desk-one_fourth"></div>
		<div class="grid_item lap-one_half desk-one_fourth"></div>
	</div>

## <a name="layout"></a> Layout

Cardinal also includes some reusable classes for common layout modules, like page wrappers, content wells, and 100% width containers.

	.strip {
		margin: 0;
		margin-bottom: 1.333rem;
		padding: 0;
		background: #efefef;
		list-style: none;
	}

	.wrapper {
		width: 90%;
		max-width: 1280px;
		margin: 0 auto;
	}

	.island {
		padding: 1.333rem;
		-webkit-border-radius: 5px;
		-moz-border-radius:    5px;
		border-radius:         5px;
		background: #efefef;
	}

	.well {
		padding: 1.333rem;
		-webkit-border-radius: 5px;
		-moz-border-radius:    5px;
		border-radius:         5px;
		background: #efefef;
		-webkit-box-shadow: inset 0 0 0.317rem hsla(0, 0%, 0%, 0.10);
		-moz-box-shadow:    inset 0 0 0.317rem hsla(0, 0%, 0%, 0.10);
		box-shadow:         inset 0 0 0.317rem hsla(0, 0%, 0%, 0.10);
	}

## <a name="prompts"></a> Prompts

By default, Cardinal includes two small prompts: one that shows up for users who have Javascript disabled, and one for the IE6 Chrome Frame. These are hidden by default unless the user has Javascript disabled, or is using IE6 and below.

## <a name="app"></a> App

This is where your code goes!

## <a name="helpers"></a> Helpers

A bunch of helpers from the fantastic [HTML5 Boilerplate](http://cbrac.co/Zt9YqM) are used here, along with some custom helpers for quick text alignment, margins, paddings, and floats.

## <a name="print"></a> Print

This was also copy and pasted directly from [HTML5 Boilerplate](http://cbrac.co/Zt9YqM), and inlined to avoid an extra HTTP request.