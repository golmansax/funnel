
var cur;
var next;

function swap() {
  var temp = cur;
  cur = next;
  next = temp;
}

function add_button() {
  var button = document.createElement('button');
  button.id = 'mybutton';
  button.innerText= 'click me';

  button.onclick = swap;
  document.getElementsByClassName('header-primary')[0].appendChild(button);
}

function load_css() {
  var elt = document.createElement('link');
  elt.rel = 'stylesheet';
  elt.href = 'http://localhost:3000/build/bundle.css';
  document.head.appendChild(elt);
}

function init() {
  var orig = document.getElementsByClassName('twitter-typeahead typeahead')[0];
  var new_input = document.createElement('div');
  new_input.id = 'content';
  //new_input.style.display = 'none';
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

window.setTimeout(function() {
  init();
  add_button();
  load_css();
  var script = _BuildJSScriptElement('', 'http://localhost:3000/build/bundle.js');
  document.documentElement.appendChild(script);
}, 5000);
