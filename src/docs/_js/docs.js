import Schwifty from './schwifty.js';

/**@returns {HTMLElement} */
let $ = (selector, context = document) => context.querySelector(selector);
let $$ = (selector, context = document) => context.querySelectorAll(selector);
let ls = (key, value) => value == undefined
  ? JSON.parse(localStorage.getItem(key))
  : localStorage.setItem(key, JSON.stringify(value));
let toggleGlobalClass = (className, force) => document.documentElement.classList.toggle(className, force);

function init() {
  toggleGlobalClass('dark', ls('dark'));

  $('#theme-toggle').addEventListener('click', () => {
    let isDark = ls('dark');
    toggleGlobalClass('dark', !isDark);
    ls('dark', !isDark);
  })

  $$('nav a').forEach(a => {
    if (a.href == location.href)
      a.setAttribute('aria-current', true);
  })
}

init();

new Schwifty({
  onload: init,
  preserveAttributes: true
})