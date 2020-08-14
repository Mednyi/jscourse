/**
 * Get all element's children  <DOM object>.children
 */

let children = document.children; // returns HTMLCollection
// children[n] - nth child
let childrenAndText = document.childNodes; // returns NodeList
// children[childrenAndText] - nth child

let firstChild = document.firstElementChild; // returns Element
let firstChildNode = document.firstChild; // returns Node

let lastChild = document.lastElementChild;
let lastChildNode = document.lastChild;

/**
 * Get parent element
 */

let parent = firstChild.parentElement;
let parentNode = firstChild.parentNode;

/**
 * Get element siblings
 */

let leftSibling = firstChild.previousElementSibling;
let rightSibling = firstChild.nextElementSibling;
let leftSiblingNode = firstChild.previousSibling;
let rightSibling = firstChild.nextSibling;

/**
 * HTML selectors (CSS)
 * #<element id> - select by id
 * .<class name> - by class
 * <tag name> - by tag
 * [<attribute name>=<attribute value>] - by attribute
 * <selector1><selector2> input[type=text] - will select all the text inputs
 * document.querySelectorAll(<selector>) - get all the elements match selector
 * document.querySelector(<selector>) - get first element that matches selector
 */

let toolbar = document.getElementById('toolbar');
let todos = document.getElementsByClassName('todo');
let titles = document.getElementsByName('title');
let inputs = document.getElementsByTagName('input');
