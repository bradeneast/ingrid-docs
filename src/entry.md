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

To use Ingrid's development mode, just run Ingrid with the `-dev` flag.
```shell
npx ingrid -dev
```

This will start a live server at [127.0.0.1:3000](http://127.0.0.1:3000/), which automatically refreshes when files are modified in your project.


## 3. Start dropping your HTML files in the `src` folder.

You can import components with [Brick elements](/brick-elements), or generate a content list with [Each elements](/each-elements).

To use a markdown file, just import it with a Brick. It will automatically be transformed into HTML.

```html
<Brick use="./content.md"></Brick>
```
