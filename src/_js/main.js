import Schwifty from './schwifty.js';

let $ = (selector, context = document) => context.querySelector(selector);
let $$ = (selector, context = document) => context.querySelectorAll(selector);

function init() {
  $$('nav a').forEach(a => {
    if (a.href == location.href)
      a.setAttribute('aria-current', true);
  })
}

new Schwifty({
  onload: init
})