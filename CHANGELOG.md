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
