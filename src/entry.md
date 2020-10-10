## 1. Do the npm thing in a new folder
```shell
npm init -y
...
npm i --save-dev ingrid-ssg
```

## 2. Run Ingrid
*Make sure to use `npx`, not `npm`, if you're slightly dyslexic like most of us.*
```shell
npx ingrid
```

## 3. Start dropping your HTML files in the `src` folder.

You can import components with [Brick elements](/brick-elements), or generate a content list with [Each elements](/each-elements).

To use a markdown file, just import it with a Brick. It will automatically be transformed into HTML.

```html
<Brick use="./content.md"></Brick>
```

That's it, yo. If you run into problems, [open an issue](https://github.com/bradeneast/ingrid/issues).