# mebug.css

**me**dia query de**bug**

## About
useful for developing responsive layouts, `mebug` will — hopefully — give you somelow-key visual changes to the `<body />` element — and its `:before` and `:after` pseudo-elements — to show you which media query is currently being applied to your web page.

## How to use it
- Add `mebug.css` to your web page and add the `MEBUG` class to the `<body />` element of your page.
- When you first open the page in a web browser you should see that the `<body />` element's background colour has been tampered with and its `:before` and `:after` pseudo-elements are in the top left and right corners of the page with the `max-height` and `max-width` values of the current media queries being applied.
- When you resize the page the `<body />` element's background colour should change and the content of its `:before` and `:after` pseudo-elements should change to the `max-height` and `max-width` values of the current media queries being applied.
- If you want to support more/less/different media queries or use different visual queues then simply make the required changes to the `mebug.css` file; using what's there as a guide.

### mebug.qs.debug.js
If you also add this file to your web page — at the end of the `<body />` element, so that `document.body` is available — then you can not worry about manually adding the `MEBUG` class to the `<body />` element.
All you need to do is add `debug` to your web page URL's query string whenever you want to check which media queries are currently being applied.

## File size

- ≅ kb (gzipped)
- ≅ kb (unzipped)
