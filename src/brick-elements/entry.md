Bricks are small chunks of HTML (or Markdown) you can reuse throughout your static site project. These are the cornerstone of Ingrid.

> If you've used React or something similar, it might be helpful to think of Bricks like components.

Here's an example of how a Brick might be used for a simple homepage:

```html
<!-- src/index.html -->
<Brick use="/_bricks/template.html">
  <Title>Nostalgia Books</Title>
  <Content>
    <p>We sell those good books.</p>
  </Content>
</Brick>
```

The brick above has a `Title` property and a `Content` property. <em>Only direct children of the Brick will register as a property.</em>

It's `use` attribute points to an HTML file, so Ingrid will make sure that file exists, then import its contents.

Here's what the template might look like:

```html
<!-- src/_bricks/template.html -->
<body>
  <h1>
    <Slot name="Title"></Slot>
  </h1>
  <main>
    <Slot name="Content"></Slot>
  </main>
  <footer>...</footer>
</body>
```

## What are those Slot thingys?
Slots are placeholders for the properties of a Brick.

When this file gets imported, Ingrid tries to match up Slots with their corresponding Brick properties.

The resulting file will look like this:

```html
<!-- dist/index.html -->
<body>
  <h1>Nostalgia Books</h1>
  <main>
    <p>We sell those good books.</p>
  </main>
  <footer>...</footer>
</body>
```

Slots can also have a default value, in case the Brick property is missing.

```html
<!-- Contents are rendered if no property by that name --> 
<Slot name="Title">Default Title</Slot>
```

## Default Brick Properties
- ### `sys.href`
The relative path of the current file (e.g. the href of `src/about/index.html` would be `/about`)

- ### `sys.content`
The raw text/html content of the current file