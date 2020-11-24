Imports are small chunks of HTML (or Markdown) you can reuse throughout your static site project. These are the cornerstone of Ingrid.

> If you've used React or something similar, it might be helpful to think of Imports like components.

Here's an example of how an Import might be used for a simple homepage:

```html
<Import from="/_imports/Template.html">
  <Title>Nostalgia Books</Title>
  <Content>
    <p>We sell those good books.</p>
  </Content>
</Import>
```

The Import above has a `Title` property and a `Content` property. It's `from` attribute points to an HTML file, so Ingrid will make sure that file exists, then import its contents.

*P.S. Only direct children of the Import will register as a property.*

Here's what the template might look like:

```html
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
Slots are placeholders for the properties of an Import.

When this file gets imported, Ingrid tries to match up Slots with their corresponding Import properties.

The resulting file will look like this:

```html
<body>
  <h1>Nostalgia Books</h1>
  <main>
    <p>We sell those good books.</p>
  </main>
  <footer>...</footer>
</body>
```

Slots can also have a default value, in case the Import property is missing.

```html
<!-- Contents are rendered if no property by that name --> 
<Slot name="Title">Default Title</Slot>
```

## Default Import Properties
- ### `sys.href`
The relative path of the current file (e.g. the href of `src/about/index.html` would be `/about`)

- ### `sys.content`
The raw text/html content of the current file