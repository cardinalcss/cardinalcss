# 2.3.0 (February 17, 2014)

- Fix `border-radius` issue in buttons.less
- Fix `@viewport` issue in base.less
- Fix gruntfile to output `js` and and `less` to `dist/js` and `dist/js` respectively for easier integration into other projects
- Remove blank `img` folder

# 2.2.4 (February 7, 2014)

- Updated normalize.css to 3.0.0.

# 2.1.4 (February 7, 2014)

- Added a `bower.json` file so Cardinal can be added to the bower registry (thanks [@progsource](https://github.com/progsource)!).

# 2.1.3 (February 2, 2014)

- Changed IE conditional classes to use hyphens instead of underscores.

# 2.1.2 (January 30, 2014)

- Fixed LESS button size referencing the wrong variable, because I’m a bonehead (thanks [@progsource](https://github.com/progsource)!).

# 2.1.1 (January 22, 2014)

- Fix duplicate LICENSE line in README

# 2.1.0 (January 22, 2014)

- Added LESS support (thanks [@brandonb927](https://github.com/brandonb927))! `master` now ships with a `/less` directory and a simple [Grunt](http://gruntjs.com/) build process.
- Added an empty `img/` folder since I usually end up creating one anyways.
- Updated the Table Of Contents heading to include example project information instead.
- Removed `@media` query for extra padding on `<kbd>` elements.
- Nested `caption` styles inside the `table` element.
- Changed some `px` values to `rem` here and there.

# 2.0.2  (January 21, 2014)

- Removed `word-break: break-all` from common typographical elements because it was causing weird wrapping issues in Firefox ([more info here](https://miketaylr.com/posts/2014/01/word-break-break-word.html))

# 2.0.1  (January 17, 2014)

- Changed hr.asterisks to `hr.symbol` for better semantics.
- Added a bottom margin to `hr.symbol`.

# 2.0.0 (January 16, 2014)

- Updated the [documentation website](http://cardinalcss.com)!
- Updated jQuery to 1.10.2.
- Updated Modernizr to 2.7.1.
- Removed minified version of Cardinal.
- Added Chrome Frame support to IE rendering `<meta>` tag.
- Removed `@media` queries on `html` element to resize the entire project.
- Re-ordered and re-grouped styles in `main.css`.
- Added 5 carriage returns in between sections in `main.css` so its easier to see section breaks when scrolling.
- Fixed some overflow issues with form elements.
- Removed the “Helpers” section as well as some unused classes.
- Added practical font-sizing classes for headings (`.h1`, `.h2`, etc).
- Switched indentation from tabs to spaces.
- Updated `<blockquote>` styles and structure.
- Renamed `.lap-*` to `.medium-*`, and `.desk-*` to `.large-*`.
- Removed rounded and hollow variations of `.island` and `.well` classes.
- Changed default styles for form elements, and added a `.fieldset-border` class.
- Added a `.flex-video` class.
- Changed naming conventions to all hyphens (fuck BEM).
- Added boilerplate `humans.txt` and `robots.txt` files to the root directory.
- Added some default HTML elements with appropriate ARIA roles to `index.html`.
- Removed a bunch of `.button` classes and variations.
- Decreased `.wrapper`’s maximum width to `1024px`.
- Added an alternative `.asterisks` style for `<hr>` elements.
- Added `.drop-cap`, `.run-in`, and `.small-caps` classes for some more variety in typographical hierarchy.

# 1.4.0 (November 8, 2013)

- Removed some helper classes for alignment, margins, and paddings. Classes were cluttering HTML markup, and it started to feel like inline styling.
- Moved `.width_auto` classes into the Grid section, where they belong.
- Reverted Google Analytics tracking code back to the version found in [HTML5BP](https://github.com/h5bp/html5-boilerplate/blob/master).

# 1.3.0 (October 21, 2013)

- Updates to make form styles more consistent with `.button` styles.

# 1.2.4 (October 15, 2013)

- Updated word wrapping and hyphenation declaration to include `caption` element and use [a more bulletproof solution](http://kenneth.io/blog/2012/03/04/word-wrapping-hypernation-using-css/) that works in IE8+, Firefox 6+, iOS 4.2+, Safari 5.1+, and Chrome 13+.

# 1.2.3 (October 11, 2013)

- Added some default styles for the caption element.

# 1.2.2 (October 7, 2013)

- Fixed class conflict with `.font_normal` being used twice (derp). Changed the font sizing helper class to `.font_regular` instead.

# 1.2.1 (October 1, 2013)

- Added more helper classes for font weights.
- Changed `.font_thin` to `.font_light` for consistency.

# 1.2.0 (September 27, 2013)

- Added `.width_auto` class in case you want to change a width class to `width: auto;` at some breakpoint.
- Changed class-naming conventions to avoid possible conflicts. All class names for block/element modifiers are now prefixed with the name of that block/element (eg. `.button_chunky` instead of `.button.chunky`).
- Changed `.table_border_all` to `.table_border_cells` because that makes more sense.
- Removed the `inherit` property from font sizing helper classes because it was causing inheritance issues.

# 1.1.2 (September 20, 2013)

- Added `Arial` to the font stack for headings.

# 1.1.1 (September 17, 2013)

- Added a DNS prefetch to the `<head>` of `index.html` for the version of jQuery being retrieved from Google’s CDN.

# 1.1.0 (August 30, 2013)

- Removed `.h1`, `.h2`, etc. classes. Use `.font_[size]` instead.
- Replaced `.subheading` and `.subheading.muted` with `.font_thin` and `.font_muted`, added `.lap-*` and `.desk-*` versions, and moved the classes to the "Helpers" section. They can be used on any element now, not just headings.

# 1.0 (August 23, 2013)

- Scaled back `.button` classes, removing glossy style and hover states.
- Added `.h1`, `.h2`, `.h3`, `.h4`, `.h5`, `.h6` classes.
- Picked apart [normalize.css](https://github.com/necolas/normalize.css) and placed declarations in their appropriate sections, instead of lazily including the whole thing up top.
- Fixed issues with color consistency, and added their hex values to the top comment block.
- Removed `.table` class, instead applying Cardinal’s default table styles directly on the `<table>` element.
- Changed `.float_*` classes to `.align_*`, and added the `.align_center` class.
- Changed `.text_[size]` classes to `.font_[size]` to better distinguish between the text alignment and font sizing helper classes.
- Re-ordered the `@print` style declarations alphabetically.
- Fixed font-sizing issues with `code`, `figcaption`, `small`, `sup`, and `sub` elements so that they work better in nested situations.

# 0.3.7 (July 23, 2013)

- moved `.text_*` classes to the helpers section so they can be used on `.grid-item` classes
- resized `<h6>` from `1rem` to `0.75rem`
- added `!important` to some helper classes that needed them.

# 0.3.6 (July 18, 2013)

- Added `lap-*` and `desk-*` queries for helper classes.
- Fixed a small comment issue.

# 0.3.5 (July 12, 2013)

- Removed `margin-bottom: 1rem;` from the `.strip` and `.grid-item` classes.

# 0.3.4 (June 25, 2013)

- Updated comment line length to have a maximum of 72 characters.

# 0.3.3 (June 13, 2013)

- Removed IE7 fix for input button outlines.

# 0.3.2 (June 10, 2013)

- Added `.grid_gutter_none` classes so that you can create grids with no gutters, if desired.

# 0.3.1 (June 10, 2013)

- Added Arial to the font stack on the `body` element, and beefed up the font stack for `blockquote` elements.
- Removed some more support for IE ≤ 8.

# 0.3.0 (June 7, 2013)

- **NEW!** Added classes for table styles.

# 0.2.1 (June 1, 2013)

- Word-wrapped/hyphenated more elements per @danielzilli’s [suggestion](https://github.com/cbracco/Cardinal/issues/1).

# 0.2.0 (June 1, 2013)

- **NEW!** Added classes for button styles.
- Added a bottom margin to `.well` and `.island` classes.
- Updated Google Analytics snippet.

# 0.1.4 (June 1, 2013)

- Added .editorconfig file.

# 0.1.3 (May 31, 2013)

- Added conditional classes on the `html` element for IE9.

# 0.1.2 (May 31, 2013)

- Added blank lines to the end of each file, because old habits die hard.

# 0.1.1 (May 30, 2013)

- Removed default border-radius from pre, .island, and .well.

# 0.1.0 (May 30, 2013)

- First stable release! Time for a beer...
- Added LICENSE.md and CHANGELOG.md to the project.
- Updated README.md content.
- Reverted back to jQuery 1.10.0.
