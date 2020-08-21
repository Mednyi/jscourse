'use strict';
// Create element
const element = document.createElement('div');
element.className = 'task';
element.innerHTML = '<span>Hello</span>'; // span will appear inside div
element.innerText = 'Innertext'; // sets inner text content

// Add element to html
const parent = document.getElementsByTagName('main')[0];
//add children
parent.appendChild(element); // add element(s) to the end of the parent node
parent.append(element); // adds string(s) or node(s) to the end of parent content
parent.prepend(element); // adds string(s) or node(s) to the beginning of parent content
// add before or after
parent.before(element); // add before parent
parent.after(element); // add after parent
parent.replaceWith(element); // replaces parent
//
parent.insertAdjacentElement('beforebegin', element); // [beforebegin, beforeend, afterbegin, afterend]

// Remove element
element.remove();
