# colorpicker

This is a simple color picker designed to create color palettes that have predictable contrast and are colorblind-safe, inspired by [Stripe's work](https://stripe.com/blog/accessible-color-systems).

## Used packages

For color generation and analysis, we used two excellent libraries:

- [chroma.js](https://github.com/gka/chroma.js)
- [color-blind](https://github.com/skratchdot/color-blind)

The application was built using React + Tailwind with Parcel:

- [react](https://reactjs.org)
- [tailwind.css](https://tailwindcss.com)
- [parcel](https://parceljs.org)

Additional references used

- [Jamie Wong's post on color](http://jamie-wong.com/post/color/)

## Building

To build the production (minified) assets:

```bash
npm ci
npm run predeploy
npm run deploy
```

To develop with live reloading:

```bash
npm i
npm start
```
