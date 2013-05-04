
# empty

  empty an element.

## Installation

    $ component install yields/empty

## Example

```js
var el = document.createElement('div');
el.appendChild(document.createElement('ul'));
assert('' == empty(el).innerHTML);
```

## License

  MIT
