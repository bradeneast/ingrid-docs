let $ = (selector, context = document) => context.querySelector(selector);
let $$ = (selector, context = document) => context.querySelectorAll(selector);

for (let a of $$('nav a')) {
  if (a.href == location.href)
    a.setAttribute('aria-current', true);
}