// Event types
// click
// contextmenu - right button click
// mouseover - mouse is over element
// mouseenter - mouse enters element's area
// mouseleave - mouse leaves element's area
// mousemove - mouse moves
// focus - focus if fired when we click select on element with 'tabindex' attribute
// input - fires on input to input field
// change - fires when input value changes
// blur - fires when we click on other place rather than focused element
// submit - fires when submit button is clicked
// keydown/keyup
//-----------------------------------------------------------------

// Event listeners
// 'this' in event listeners is the DOM object which generated the event
// 1. <[tag] [on<event>]="<listener(any valid js code)>">
// 2
/*const colors = ['red', 'green', 'blue', 'white'];
let j = 0;
const todos = document.getElementsByClassName('todo');
const secondTodo = todos[1];
const form = document.getElementsByTagName('main')[0];
form.onclick = function(e) {
    j %= 4;
    this.setAttribute('style', `background-color: ${colors[j]}`);
    j++;
};
for(let i = 1; i < todos.length; i++) {
    todos[i].children[2].onclick = function (e) {
        e.stopPropagation();
        console.log(this);
        console.log(e);
    };
    todos[i].oncontextmenu = function (e) {
        e.preventDefault();
        alert('Hi from context menu')
    };
}*/

// 3 addEventListener

const colors = ['red', 'green', 'blue', 'white'];
let j = 0;
const todos = document.getElementsByClassName('todo');
const secondTodo = todos[1];
const form = document.getElementsByTagName('main')[0];
// event listener
const changeBGColor = function(e) {
    j %= 4;
    this.setAttribute('style', `background-color: ${colors[j]}`);
    j++;
};
//
form.addEventListener('click', changeBGColor);
// form.removeEventListener('click', changeBGColor);
for(let i = 1; i < todos.length; i++) {
    todos[i].children[2].addEventListener('click', function (e) {
        e.stopPropagation();
        console.log(this);
        console.log(e);
    });
    todos[i].children[2].addEventListener('contextmenu', function (e) {
        e.preventDefault();
        alert('Hi from context menu')
    });
}




