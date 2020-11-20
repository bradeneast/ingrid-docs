Asterisks inside of curly braces let you access a value that you've stored globally or in an Import property. These are generally less performant than Slots, but are sometimes necessary for things like `href` or `src` attributes.

```html
<img src="{*openExp*}FeaturedImage{*closeExp*}" />
```

## Expressions
Using the `%` symbol instead of an asterisk will tell Ingrid to evaluate their contents as a Javascript expression.

```html
This post is {% '{' + '% Body.split(" ").length %' + '}' %} words long

<!-- Result -->
This post is 255 words long.
```