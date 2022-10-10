//1) Add jQuery into the project (bottom of the body tag)
//2) Add the app.js script tag under the jQuery script tag
//3) Go into app.js and select all the elements with the class of 'navItem'
let navItems = $('nav, .navItem');

//4) On each of the navItem elements change the color to white.
$(navItems).css('color', 'white');
//$(navItems).css('color', 'white');

//5) Now select the element with the ID of 'nav'
let navElem = $('#nav');

//6) Give that element a background color of #145
$(navElem).css('background-color', '#145');

//7) Select all the even list items
let listEvens = $('ul li:even');

//8) Change the background color to #ccc
$(listEvens).css('background-color', '#ccc');

//9) Select all the odd list items
let listOdds = $('ul li:odd');

//10) Change the background color to #aaa
$(listOdds).css('background-color', '#aaa');

//11) Select the input tag
let inputs = $('input');

//12) Change the value to be your first name
$(inputs).val("Wayne");

//13) Push this code up to github and turn in the link to your repository in canvas