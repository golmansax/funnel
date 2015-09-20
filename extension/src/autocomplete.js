var AUTOCOMPLETE_CLASS = 'twitter-typeahead typeahead';
var cur;
var next;

function swap() {
  var temp = cur;
  cur = next;
  next = temp;
  cur.style.display = 'block';
  next.style.display = 'none';
}

function add_toggle_button() {
  var button = document.createElement('button');
  button.id = 'mybutton';
  button.innerText= 'Yo Quarry';
  button.style.position = 'absolute';
  button.style.top = '0';
  button.onclick = swap;
  document.getElementsByClassName('header-primary')[0].appendChild(button);
}

function load_quarry_css() {
  var elt = document.createElement('link');
  elt.rel = 'stylesheet';
  elt.href = 'http://localhost:3000/build/bundle.css';
  document.head.appendChild(elt);
}

function init_quarry() {
  var orig = document.getElementsByClassName(AUTOCOMPLETE_CLASS)[0];
  var new_input = document.createElement('div');
  new_input.id = 'content';
  new_input.style.display = 'none';
  new_input.style['z-index'] = 100;
  new_input.style.position = 'relative';
  orig.parentElement.appendChild(new_input);

  cur = orig;
  next = new_input;
}

// Copied from my other extension
function _BuildJSScriptElement(id, src, content) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  if (src) script.src = src;
  if (content) script.textContent = content;
  if (id) script.id = id;
  return script;
}

function init_after_autocomplete_load() {
  if (document.getElementsByClassName(AUTOCOMPLETE_CLASS).length > 0) {
    clearInterval(interval);
    init_quarry();
    add_toggle_button();
    load_quarry_css();
    var script = _BuildJSScriptElement('', 'http://localhost:3000/build/bundle.js');
    document.documentElement.appendChild(script);
  }
}

var interval = setInterval(init_after_autocomplete_load, 100);
