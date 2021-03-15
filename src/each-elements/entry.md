Each's are placeholders for a list of pages you want to include. They're a rudimentary way to show all pages whose urls match a certain regular expression.

## Attributes
- `from`: A relative path to the template you want to use for each item
- `match`: The regular expression Ingrid will use to match page paths
- `sort`: The page property to sort by (can be reversed with a preceding `-`)

```html
<Each from="/_imports/Book.html" match="books/.+?/" sort="BookRating"></Each>
```

For the example above, Ingrid would import and hydrate the file below for each book.

```html
<!-- src/_imports/Book.html -->
<div>
  <h3>
    <Slot name="BookTitle"></Slot>
  </h3>
  Rating: <Slot name="BookRating"></Slot> stars
</div>
```

The result would look something like this:

```html
<div>
  <h3>The Giver</h3>
  Rating: 5 stars
</div>
<div>
  <h3>The Magician's Nephew</h3>
  Rating: 4 stars
</div>
<div>
  <h3>Where the Red Fern Grows</h3>
  Rating: 3.5 stars
</div>
```
